import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: const Text("Implicit 예제"),
      ),
      body: const ImplicitDemo(),
    ));
  }
}

class ImplicitDemo extends StatefulWidget {
  const ImplicitDemo({super.key});

  @override
  ImplicitDemoState createState() => ImplicitDemoState();
}

class ImplicitDemoState extends State<ImplicitDemo> {
  bool _isBig = false;

  // Widget build(BuildContext context) {
  //   return Center(
  //     child: GestureDetector(
  //       onTap: () {
  //         setState(() {
  //           _isBig = !_isBig;
  //         });
  //       },
  //       child: AnimatedContainer(
  //         duration: const Duration(seconds: 1),
  //         width: _isBig ? 200.0 : 100.0,
  //         height: _isBig ? 200.0 : 1000.0,
  //         color: _isBig ? Colors.blue : Colors.red,
  //         child: const Center(
  //           child: Text("눌러보세요"),
  //         ),
  //       ),
  //     ),
  //   );
  // }
  //

  bool _visible = true;

  // @override
  // Widget build(BuildContext context) {
  //   return Center(
  //     child: GestureDetector(
  //       onTap: () {
  //         setState(() {
  //           _visible = !_visible;
  //         });
  //       },
  //       // child: AnimatedOpacity(
  //       //   opacity: _visible ? 1.0 : 0.0, //투명 불투명
  //       //   duration: const Duration(seconds: 1), //변화하는데 걸리는 시
  //       //   child: Container(
  //       //     width: 200.0,
  //       //     height: 200.0,
  //       //     color: Colors.blue,
  //       //     child: const Center(
  //       //       child: Text("눌러보세요"),
  //       //     ),
  //       //   ),
  //       // ),
  //     ),
  //   );
  // }

  bool _showFirst = true;

  // @override
  // Widget build(BuildContext context) {
  //   return Center(
  //       child: GestureDetector(
  //     onTap: () {
  //       setState(() {
  //         _visible = !_visible;
  //       });
  //     },
  //     child: AnimatedCrossFade(
  //       duration: const Duration(seconds: 1),
  //       firstChild: Container(
  //         width: 200.0,
  //         height: 200.0,
  //         color: Colors.blue,
  //         child: const Center(
  //           child: Text("첫번쨰 박스"),
  //         ),
  //       ),
  //       secondChild: Container(
  //         width: 200.0,
  //         height: 200.0,
  //         color: Colors.green,
  //         child: const Center(
  //           child: Text("두번쨰 박스"),
  //         ),
  //       ),
  //       crossFadeState: _showFirst ? CrossFadeState.showFirst : CrossFadeState.showSecond,
  //     ),
  //   ));
  // }

  bool _isMoved = true;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        AnimatedPositioned(
          top: _isMoved ? 50.0 : 200.0,
          left: _isMoved ? 50.0 : 200.0,
          duration: const Duration(seconds: 1),
          child: GestureDetector(
            onTap: () {
              setState(() {
                _isMoved = !_isMoved;
              });
            },
            child: Container(
              width: 100.0,
              height: 100.0,
              color: Colors.blue,
              child: const Center(
                child: Text("탭하세요"),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
