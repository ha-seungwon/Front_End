import 'package:flutter/material.dart';
import 'memo_edit_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  Widget build(BuildContext context) {
    return const MaterialApp(
      title: "메모  앱",
      home: MemoListScreen(),
    );
  }
}

class MemoListScreen extends StatefulWidget {
  const MemoListScreen({super.key});

  @override
  MemoListScreenState createState() => MemoListScreenState();
}

class MemoListScreenState extends State<MemoListScreen> {
  List<Memo> memos = []; // 메모 저장하는 리스트

  void addMemo(Memo memo) {
    setState(() {
      memos.add(memo);
    });
  }

  void deleteMemo(int index) {
    setState(() {
      memos.removeAt(index);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("메모 리스트"),
      ),
      body: ListView.builder(
        itemCount: memos.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(memos[index].title),
            trailing: Row(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                IconButton(
                    onPressed: () async {
                      final updatedMemo = await Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) =>
                                MemoEditScreen(memo: memos[index])),
                      );
                      if (updatedMemo != null) {
                        setState(() {
                          memos[index] = updatedMemo;
                        });
                      }
                    },
                    icon: const Icon(Icons.edit)),
                IconButton(
                    onPressed: () => deleteMemo(index),
                    icon: const Icon(Icons.delete))
              ],
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          final result = await Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const MemoEditScreen()),
          );

          if (result != null) {
            setState(() {
              memos.add(result);
            });
          }
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}

class Memo {
  String title;
  String content;

  Memo({required this.title, required this.content});
}
