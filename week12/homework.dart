import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "뷰 구성하기",
      home: const MyHome(),
    );
  }
}

class MyHome extends StatefulWidget {
  const MyHome({super.key});

  @override
  MyHomeState createState() => MyHomeState();
}

class MyHomeState extends State<MyHome> {
  final List<String> genres = ['판타지', '에세이', 'SF', '역사', '소설'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            expandedHeight: 300.0,
            floating: false,
            pinned: true,
            flexibleSpace: FlexibleSpaceBar(
              title: const Row(
                children: [
                  Icon(Icons.book),
                  SizedBox(width: 10),
                  Text(
                    "승원 서점",
                    style: TextStyle(color: Colors.white),
                  ),
                ],
              ),
              background: Image.asset(
                "images/bookstore_background.jpg",
                fit: BoxFit.cover,
              ),
            ),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
                  (context, index) {
                final genre = genres[index % genres.length];
                return Card(
                  margin: const EdgeInsets.all(10),
                  child: Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Text(
                              "책 제목 $index",
                              style: const TextStyle(
                                color: Colors.blue,
                                fontSize: 16,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            const Spacer(),
                            const Icon(
                              Icons.bookmark_border,
                              color: Colors.blueAccent,
                            ),
                          ],
                        ),
                        const SizedBox(height: 10),
                        Text("저자: 저자 $index"),
                        Text("출판 날짜: 2023-01-${(index % 30) + 1}"),
                        Text("남은 재고: ${(index + 5) % 20}권"),
                        Text("위치: 서가 ${(index % 5) + 1}"),
                        Text("장르: $genre"),
                        const SizedBox(height: 10),
                      ],
                    ),
                  ),
                );
              },
              childCount: 15,
            ),
          ),
        ],
      ),
    );
  }
}
