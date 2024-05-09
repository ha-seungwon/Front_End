import "package:flutter/material.dart";

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "streambuild 예제",
      home: Scaffold(
        appBar: AppBar(
          title: const Text("streambuilder 실습"),
        ),
        body: const Center(
          child: RealtimeDataDisplay(),
        ),
      ),
    );
  }
}

class RealtimeDataDisplay extends StatefulWidget {
  const RealtimeDataDisplay({super.key});

  @override
  RealtimeDataDisplayState createState() => RealtimeDataDisplayState();
}

class RealtimeDataDisplayState extends State<RealtimeDataDisplay> {
  late Stream<int> _numberStream;

  @override
  void initState() {
    super.initState();
    _numberStream = _generateNumbers();
  }

  Stream<int> _generateNumbers() {
    return Stream.periodic(const Duration(seconds: 1), (int count) => count + 1)
        .take(10);
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: _numberStream,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const CircularProgressIndicator();
          } else if (snapshot.hasError) {
            return Text("애러 발생: ${snapshot.error}");
          } else if (snapshot.hasData) {
            return Text("숫자: ${snapshot.data}");
          }
          else{
            return Text("Finish");
          }
        });
  }
}
