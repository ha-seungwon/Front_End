import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "future builder",
      home: Scaffold(
        appBar: AppBar(
          title: const Text("futurebuilder 실습"),
        ),
        body: const Center(
          child: DataFetcher(),
        ),
      ),
    );
  }
}

class DataFetcher extends StatelessWidget {
  const DataFetcher({super.key});

  Future<String> fetchData() {
    return Future.delayed(const Duration(seconds: 3), () => "데이터 로드");
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: fetchData(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const CircularProgressIndicator();
          } else if (snapshot.hasError) {
            return Text("에러 발생: ${snapshot.error}");
          } else {
            return Text("데이터 가져오기 성공: ${snapshot.data}");
          }
        });
  }
}
