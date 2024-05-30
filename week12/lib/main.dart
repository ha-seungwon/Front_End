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
      home: MyHome(),
    );
  }
}

class MyHome extends StatefulWidget {
  const MyHome({super.key});

  @override
  MyHomeState createState() => MyHomeState();
}

class MyHomeState extends State<MyHome> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            expandedHeight: 250.0,
            floating: false,
            pinned: true,
            flexibleSpace: FlexibleSpaceBar(
              title: const Text("프로필"),
              background: Image.asset(
                "images/image_01.jpg",
                fit: BoxFit.cover,
              ),
            ),
          ),
          SliverList(
              delegate:
                  SliverChildBuilderDelegate((context, index) => const Card(
                      margin: EdgeInsets.all(10),
                      child: Padding(
                        padding: EdgeInsets.all(16),
                        child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  Text(
                                    "ui/ux 디자이너",
                                    style: TextStyle(
                                        color: Colors.blue,
                                        fontSize: 16,
                                        fontWeight: FontWeight.bold),
                                  ),
                                  Spacer(),
                                  Icon(
                                    Icons.bookmark_border,
                                    color: Colors.blueAccent,
                                  )
                                ],
                              ),
                              SizedBox(
                                height: 10,
                              ),
                              Text(
                                "구글",
                                style: TextStyle(fontSize: 14),
                              ),
                              SizedBox(
                                height: 10,
                              )
                            ]),
                      ))))
        ],
      ),
    );
  }
}

// appBar: AppBar(
// title: const Text("탭바 뷰 예제"),
// bottom: TabBar(controller: _tabController, tabs: const [
// Tab(
// text: "탭1",
// icon: Icon(Icons.home),
// ),
// Tab(
// text: "탭2",
// icon: Icon(Icons.settings),
// )
// ]),
// ),
// body: TabBarView(
// controller: _tabController,
// children: const [
// Center(
// child: Text("첫 번째 페이지"),
// ),
// Center(
// child: Text("두 번쨰 페이지"),
// )
// ],
// ),

//
// class MyHome extends StatelessWidget {
//   final List<String> images = [
//     "images/image_01.jpg",
//     "images/image_02.jpg",
//     "images/image_03.jpg"
//   ]; //List<String>.generate(20, (index) => "아이템 $index");
//
//   MyHome({super.key});
//
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//         appBar: AppBar(
//           title: const Text("리스트 뷰 예시"),
//         ),
//         body: PageView.builder(
//             itemCount: images.length,
//             itemBuilder: (context, index) {
//               return Container(
//                 decoration: BoxDecoration(
//                     image: DecorationImage(
//                         image: AssetImage(images[index]), fit: BoxFit.cover)),
//                 child: Center(
//                   child: Text(
//                     "페이지 ${index + 1}",
//                     style: const TextStyle(
//                         fontSize: 24,
//                         color: Colors.white,
//                         fontWeight: FontWeight.bold,
//                         backgroundColor: Colors.black45),
//                   ),
//                 ),
//               );
//             }));
//   }
// }

// GridView.builder(
// gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
// crossAxisCount: 2, crossAxisSpacing: 10.0, mainAxisSpacing: 10.0),
// itemCount: items.length,
// itemBuilder: (context, index) {
// return Card(
// color: Colors.blueAccent,
// child: Center(
// child: Text(
// items[index],
// style: const TextStyle(color: Colors.white, fontSize: 16),
// ),
// ),
// );
// },
// )

// ListView.builder(
// itemCount: items.length,
// itemBuilder: (context, index) {
// // return ListTile(
// //   title: Text(items[index]),
// // );
// return Card(
// margin: const EdgeInsets.all(8.0),
// child: Padding(padding: const EdgeInsets.all(16.0),
// child: Text(items[index]),),
// );
// }),
