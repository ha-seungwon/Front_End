import 'dart:convert';
import "package:flutter/material.dart";
import 'package:http/http.dart' as http;

class User {
  final int id;
  final String name;
  final String username;
  final String email;

  User({required this.id,
    required this.name,
    required this.username,
    required this.email});

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json["id"],
      name: json["name"],
      username: json["username"],
      email: json["email"],
    );
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
          child: UserListScreen(),
        ),
      ),
    );
  }
}

class UserListScreen extends StatefulWidget {
  const UserListScreen({super.key});

  @override
  UserListScreenState createState() => UserListScreenState();
}

class UserListScreenState extends State<UserListScreen> {
  List<User> _user = [];
  bool _loading = false;

  @override
  void initState() {
    super.initState();
    fetchUsers();
  }

  Future<void> fetchUsers() async {
    setState(() {
      _loading = true;
    });

    try {
      final response = await http
          .get((Uri.parse("https://jsonplaceholder.typicode.com/users")));

      if (response.statusCode == 200) {
        final List<dynamic> userJsonList = jsonDecode(response.body);
        final List<User> userList =
        userJsonList.map((json) => User.fromJson(json)).toList();
        setState(() {
          _user = userList;
        });
      } else {
        throw Exception("유저 로드 실패");
      }
    } catch (error) {
      print(error);
    } finally {
      setState(() {
        _loading = false;
      });
    }
  }

  Future<void> addUser(String name, String username, String email) async {
    final response = await http.post(
      Uri.parse("https://jsonplaceholder.typicode.com/users"),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: jsonEncode(
          <String, String>{"name": name, "username": username, "email": email}),
    );

    if (response.statusCode == 200) {
      final newUser = User.fromJson(jsonDecode(response.body));

      setState(() {
        _user.add(newUser);
      });
    } else {
      throw Exception("유저 추가 실패");
    }
  }

  @override
  Widget build(BuildContext context) {
    return _loading ? const CircularProgressIndicator() : _user.isEmpty
        ? const Text("유저가 없습니다.")
        : ListView.builder(itemCount: _user.length,
        itemBuilder: (context, index) {
          return ListTile(
            leading: CircleAvatar(child: Text(_user[index].name[0]),),
            title: Text(_user[index].name),
            subtitle: Text(_user[index].email),);
        });
  }
}
