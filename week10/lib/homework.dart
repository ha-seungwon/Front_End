import 'dart:convert';
import "package:flutter/material.dart";
import 'package:http/http.dart' as http;

class Todo {
  final int id;
  final String title;
  final bool completed;

  Todo({required this.id, required this.title, required this.completed});

  factory Todo.fromJson(Map<String, dynamic> json) {
    return Todo(
        id: json["id"], title: json["title"], completed: json["completed"]);
  }

  Map<String, dynamic> toJson() {
    return {'id': id, 'title': title, 'completed': completed};
  }
}

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "플러터 http",
      home: Scaffold(
        appBar: AppBar(
          title: const Text("플러터 실습"),
        ),
        body: const Center(
          child: TodoScreen(),
        ),
      ),
    );
  }
}

class TodoScreen extends StatefulWidget {
  const TodoScreen({super.key});

  @override
  TodoScreenState createState() => TodoScreenState();
}

class TodoScreenState extends State<TodoScreen> {
  List<Todo> _todo = [];
  bool _loading = false;

  @override
  void initState() {
    super.initState();
    fetchTodos();
  }

  Future<void> fetchTodos() async {
    setState(() {
      _loading = true;
    });

    try {
      final response = await http
          .get((Uri.parse("https://jsonplaceholder.typicode.com/todos")));

      if (response.statusCode == 200) {
        final List<dynamic> userJsonList = jsonDecode(response.body);
        final List<Todo> userList =
            userJsonList.map((json) => Todo.fromJson(json)).toList();
        setState(() {
          _todo = userList;
        });
      } else {
        throw Exception("todo 로드 실패");
      }
    } catch (error) {
      print(error);
    } finally {
      setState(() {
        _loading = false;
      });
    }
  }

  Future<void> deleteTodo(int id) async {
    try {
      final response = await http.delete(
          (Uri.parse("https://jsonplaceholder.typicode.com/todos/$id")));
      print(response.statusCode);
      if (response.statusCode == 200) {
        setState(() {
          _todo.removeWhere((todo) => todo.id == id);
        });
      } else {
        throw Exception("todo 삭제 실패");
      }
    } catch (error) {
      print(error); //
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
          child: Column(children: [
            _loading
                ? const CircularProgressIndicator()
                : _todo.isEmpty
                    ? const Text("todo 없습니다.")
                    : ListView.builder(
                        shrinkWrap: true,
                        // Add this line
                        physics: NeverScrollableScrollPhysics(),
                        // Change physics to BouncingScrollPhysics()
                        scrollDirection: Axis.vertical,
                        itemCount: _todo.length,
                        itemBuilder: (context, index) {
                          return ListTile(
                            title: Text(
                              _todo[index].title,
                              style: TextStyle(
                                color: _todo[index].completed
                                    ? Colors.green
                                    : Colors.red,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            subtitle: Text(
                              _todo[index].completed
                                  ? 'Completed'
                                  : 'Not Completed',
                              style: TextStyle(
                                color: _todo[index].completed
                                    ? Colors.green
                                    : Colors.red,
                              ),
                            ),
                            trailing: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Icon(
                                  _todo[index].completed
                                      ? Icons.check_circle
                                      : Icons.radio_button_unchecked,
                                  color: _todo[index].completed
                                      ? Colors.green
                                      : Colors.red,
                                ),
                                IconButton(
                                  icon: Icon(Icons.delete),
                                  onPressed: () {
                                    deleteTodo(_todo[index].id);
                                  },
                                ),
                              ],
                            ),
                          );
                        },
                      ),
          ])),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => AddTodoScreen(_todo)),
          ).then((_) {
            setState(() {});
          });
        },
        child: const Icon(Icons.add),
      ),
      floatingActionButtonLocation:
          FloatingActionButtonLocation.endFloat, // Adjust this as needed
    );
  }
}

class AddTodoScreen extends StatefulWidget {
  final List<Todo> todoList;

  const AddTodoScreen(this.todoList);

  @override
  _AddTodoScreenState createState() => _AddTodoScreenState();
}

class _AddTodoScreenState extends State<AddTodoScreen> {
  String _todoTitle = '';
  bool _todoCompleted = false;

  Future<Todo?> addTodo(String title, bool completed) async {
    try {
      final response = await http.post(
        Uri.parse("https://jsonplaceholder.typicode.com/todos"),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: jsonEncode(
            <String, dynamic>{"title": title, "completed": completed}),
      );

      print("!!!! $response.body");
      if (response.statusCode == 201) {
        final newTodo = Todo.fromJson(jsonDecode(response.body));
        widget.todoList.add(newTodo); // 리스트에 새 항목 추가
        setState(() {}); // 화면 갱신
        return newTodo;
      } else {
        throw Exception("todo 추가 실패");
      }
    } catch (error) {
      print(error);
    }
    return null;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Add Todo"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              onChanged: (value) {
                setState(() {
                  _todoTitle = value;
                });
              },
              decoration: InputDecoration(
                labelText: 'Todo Title',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 16), // Spacer
            Row(
              children: [
                Checkbox(
                  value: _todoCompleted,
                  onChanged: (value) {
                    setState(() {
                      _todoCompleted = value ?? false;
                    });
                  },
                ),
                Text('Todo Complete'),
              ],
            ),
            SizedBox(height: 16), // Spacer
            ElevatedButton(
              onPressed: () async {
                if (_todoTitle.isNotEmpty) {
                  await addTodo(_todoTitle, _todoCompleted);
                  Navigator.pop(context);
                  setState(() {});

                  // Add logic to add a new todo item
                } else {
                  return;
                }
              },
              child: const Text("Add Todo"),
            ),
          ],
        ),
      ),
    );
  }
}
