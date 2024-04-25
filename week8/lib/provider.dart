import "package:flutter/material.dart";
import "package:flutter/rendering.dart";
import "package:provider/provider.dart";
import "package:week8/set_state.dart";

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => UserNameStored(),
      child: const MaterialApp(
          home: HomePage()
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  //@override
  @override
  Widget build(BuildContext context) {
    final userNameStore = Provider.of<UserNameStored>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text("이름 관리앱"),
      ), body: Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text("Hello,${userNameStore.userName}!"),
          const SizedBox(height: 20,),
          ElevatedButton(onPressed: () {
            Navigator.push(context,
                MaterialPageRoute(
                    builder: (context) => const ChangeNamePage())
            );
          },
            child: const Text("Change Name"),
          ),
        ],
      ),
    ),
    );
  }
}

class ChangeNamePage extends StatelessWidget {
  const ChangeNamePage({super.key});


  @override
  Widget build(BuildContext context) {
    final userNameStore = Provider.of<UserNameStored>(context, listen: false);
    TextEditingController nameController = TextEditingController();


    return Scaffold(
      appBar: AppBar(
        title: const Text("change name"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: <Widget>[
            TextField(
              controller: nameController,
            ),
            ElevatedButton(
                onPressed: () {
                  userNameStore.updateUserName(nameController.text);
                  Navigator.pop(context);
                },
                child: const Text("이름 저장")
            ),
          ],
        ),
      ),
    );
  }
}

class UserNameStored extends ChangeNotifier {
  String _userName = "gkk";

  String get userName => _userName;

  void updateUserName(String newName) {
    _userName = newName;

    notifyListeners();
  }
} //이름 관리 클래스
