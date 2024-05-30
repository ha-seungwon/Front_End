import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(title: "inheritedwidget 예제", home: MyHome());
  }
}

class MyHome extends StatefulWidget {
  const MyHome({super.key});

  @override
  MyHomeState createState() => MyHomeState();
}

class MyHomeState extends State<MyHome> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return CounterProvider(
        counter: _counter,
        child: Scaffold(
          appBar: AppBar(
            title: const Text("ingerited 예제"),
          ),
          body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                const CounterDisplay(),
                const SizedBox(
                  height: 20,
                ),
                ElevatedButton(
                    onPressed: _incrementCounter, child: const Text("카운터 증가"))
              ],
            ),
          ),
        ));
  }
}


class CounterProvider extends InheritedWidget{
  final int counter;

  const CounterProvider({super.key, required this.counter, required super.child});

  @override
  bool updateShouldNotify(CounterProvider oldWidget){
    return oldWidget.counter != counter;
  }

  static CounterProvider? of(BuildContext context){
    return context.dependOnInheritedWidgetOfExactType<CounterProvider>();
  }
}

class CounterDisplay extends StatelessWidget{
  const CounterDisplay({super.key});

  @override
  Widget build(BuildContext context){
    final counterProvider= CounterProvider.of(context);

    return Text(
      "카운터: ${counterProvider?.counter}",
      style: const TextStyle(fontSize: 24),
    );
  }
}