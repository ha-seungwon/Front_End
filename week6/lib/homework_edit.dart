import 'package:flutter/material.dart';
import 'homework.dart';

class ProfileEditScreen extends StatefulWidget {
  final Profile? profile;

  const ProfileEditScreen({super.key, this.profile});

  @override
  ProfileEditScreenState createState() => ProfileEditScreenState();
}

class ProfileEditScreenState extends State<ProfileEditScreen> {
  final _formKey = GlobalKey<FormState>();
  String? _name;
  String? _email;
  String? _bio;

  void initState() {
    super.initState();
    if (widget.profile != null) {
      _name = widget.profile!.name;
      _email = widget.profile!.email;
      _bio = widget.profile!.bio;
    }
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.profile == null ? "새 메모 작성" : "메모 수정"),
      ),
      body: Form(
        key: _formKey,
        child: Column(
          children: <Widget>[
            TextFormField(
              initialValue: _name,
              decoration: const InputDecoration(labelText: "이름"),
              onSaved: (value) => _name = value,
              validator: (value) {
                if (value!.isEmpty) {
                  return "이름을 입력하세요";
                }
                return null;
              },
            ),
            TextFormField(
              initialValue: _email,
              decoration: const InputDecoration(labelText: "메일"),
              onSaved: (value) => _email = value,
              validator: (value) {
                if (value!.isEmpty) {
                  return "메일을 입력하세요";
                }
                else if (!isValidEmail(value)) {
                  return '올바른 이메일 형식이 아닙니다';
                }
                return null;
              },
            ),
            TextFormField(
              initialValue: _bio,
              decoration: const InputDecoration(labelText: "주소"),
              onSaved: (value) => _bio = value,
              validator: (value) {
                if (value!.isEmpty) {
                  return "주소 입력하세요";
                }
                return null;
              },
            ),
            ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();

                    final newProfile = Profile(
                        name: _name!, email: _email!, bio: _bio!);

                    Navigator.pop(context, newProfile);
                  }
                },
                child: const Text("저장"))
          ],
        ),
      ),
    );
  }
}

bool isValidEmail(String email) {
  // 간단한 형식 검증 로직
  return RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(email);
}
