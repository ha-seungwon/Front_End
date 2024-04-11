import 'package:flutter/material.dart';
import 'main.dart';

class MemoEditScreen extends StatefulWidget {
  final Memo? memo;

  const MemoEditScreen({super.key, this.memo});

  @override
  MemoEditScreenState createState() => MemoEditScreenState();
}

class MemoEditScreenState extends State<MemoEditScreen> {
  final _formKey = GlobalKey<FormState>();
  String? _title;
  String? _content;

  void initState() {
    super.initState();
    if (widget.memo != null) {
      _title = widget.memo!.title;
      _content = widget.memo!.content;
    }
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.memo == null ? "새 메모 작성" : "메모 수정"),
      ),
      body: Form(
        key: _formKey,
        child: Column(
          children: <Widget>[
            TextFormField(
              initialValue: _title,
              decoration: const InputDecoration(labelText: "제목"),
              onSaved: (value) => _title = value,
              validator: (value) {
                if (value!.isEmpty) {
                  return "제목을 입력하세요";
                }
                return null;
              },
            ),
            TextFormField(
              initialValue: _content,
              decoration: const InputDecoration(labelText: "내용"),
              onSaved: (value) => _content = value,
              validator: (value) {
                if (value!.isEmpty) {
                  return "내용을 입력하세요";
                }
                return null;
              },
            ),
            ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();

                    final newMemo = Memo(title: _title!, content: _content!);

                    Navigator.pop(context, newMemo);
                  }
                },
                child: const Text("저장"))
          ],
        ),
      ),
    );
  }
}
