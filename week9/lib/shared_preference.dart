import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

Future<SharedPreferences> _prefs = SharedPreferences.getInstance();

Future<void> setThemeMode(String themeMode) async {
  final SharedPreferences prefs = await _prefs;
  await prefs.setString('themeMode', themeMode);
}

Future<String> loadThemeMode() async {
  final SharedPreferences prefs = await _prefs;
  return prefs.getString('themeMode') ?? 'light';
}

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  MyAppState createState() => MyAppState();
}

class MyAppState extends State<MyApp> {
  String _themeMode = 'light';

  @override
  void initState() {
    super.initState();
    loadThemeMode().then((mode) {
      setState(() {
        _themeMode = mode;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: _themeMode == 'light' ? ThemeData.light() : ThemeData.dark(),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('SharedPreferences 예제'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text('현재 테마 모드: $_themeMode'),
              ElevatedButton(
                onPressed: () {
                  String newMode = _themeMode == 'light' ? 'dark' : 'light';
                  setThemeMode(newMode).then((_) {
                    setState(() {
                      _themeMode = newMode;
                    });
                  });
                },
                child: const Text('테마 바꾸기'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
