import 'dart:math';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => ThemeModel(),
      child: const MaterialApp(home: HomePage()),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  int _generateRandomIndex() {
    return Random().nextInt(colorList.length);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("이름 관리앱"),
      ),
      body: Consumer<ThemeModel>(
        builder: (context, themeColor, child) {
          return Container(
            color: themeColor.color,
            // Set the background color based on the theme color
            child: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    "Hello!",
                    style: TextStyle(
                        color: Colors
                            .white), // Set text color to white for better visibility
                  ),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => const ChangeTheme(),
                        ),
                      );
                    },
                    child: const Text("Change color"),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      int randomIndex = _generateRandomIndex();
                      themeColor.changeTheme(colorList[randomIndex]);
                    },
                    child: const Text("Random Change color"),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

List<Color> colorList = [
  Colors.blue,
  Colors.red,
  Colors.green,
  Colors.orange,
  Colors.purple,
];

class ChangeTheme extends StatelessWidget {
  const ChangeTheme({super.key});

  @override
  Widget build(BuildContext context) {
    final themeColor = Provider.of<ThemeModel>(context, listen: false);
    TextEditingController colorController = TextEditingController();

    return Scaffold(
      appBar: AppBar(
        title: const Text("change color"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: <Widget>[
            Text(
              "Available Colors:",
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 10),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: colorList.asMap().entries.map((entry) {
                int index = entry.key;
                Color color = entry.value;
                return Text(
                  "$index: $color", // Display the index and color directly
                  style: TextStyle(
                    color: color,
                    fontSize: 16,
                  ),
                );
              }).toList(),
            ),
            TextField(
              controller: colorController,
            ),
            ElevatedButton(
                onPressed: () {
                  themeColor
                      .changeTheme(colorList[int.parse(colorController.text)]);
                  //
                  Navigator.pop(context);
                },
                child: const Text("save")),
          ],
        ),
      ),
    );
  }
}

class ThemeModel extends ChangeNotifier {
  Color _color = Colors.blue;

  Color get color => _color;

  void changeTheme(Color newColor) {
    _color = newColor;

    notifyListeners();
  }
} //이름 관리 클래스
