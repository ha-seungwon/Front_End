// import 'package:flutter/material.dart';
//
// void main() => runApp(const LayoutTutorial());
//
// class LayoutTutorial extends StatelessWidget {
//   const LayoutTutorial({super.key});
//
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       home: Scaffold(
//         appBar: AppBar(
//           title: const Text("layout widget tutorial"),
//         ),
//         body: SingleChildScrollView(
//             child: Padding(
//                 padding: const EdgeInsets.all(20),
//                 child: Column(
//                   crossAxisAlignment: CrossAxisAlignment.start,
//                   children: <Widget>[
//
//                     Icon(Icons.star, color: Colors.red,),
//                     Icon(Icons.star, color: Colors.red,),
//                     Icon(Icons.star, color: Colors.red,),
//                     Icon(Icons.star_border),
//                     Icon(Icons.star_border),
//
//                   ],
//                   Row(
//                     children: <Widget>[
//                       Icon(Icons.star, color: Colors.red,),
//                       Icon(Icons.star, color: Colors.red,),
//                       Icon(Icons.star, color: Colors.red,),
//                       Icon(Icons.star_border),
//                       Icon(Icons.star_border),
//
//                     ],
//                   )
//                   Stack(
//                   CircleAvatar(
//                   backgroundColor: Color.lightBlue,
//                   radius: 40,
//                   child: const Text("BG"),
//                 ),
//                 Positioned(
//                   right: 0,
//                   bottom: 0,
//                   child: CircleAvatar(
//                     backgroundColor: Colors.red,
//                     radius: 20,
//                     child: const Text("FG"),
//                   ),
//
//                 )
//             ),
//
//           )
//         ),
//
//
//       ),
//     )));
//   }
// }

import 'package:flutter/material.dart';

void main() => runApp(const LayoutTutorial());

class LayoutTutorial extends StatelessWidget {
  const LayoutTutorial({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Layout Widget Tutorial"),
        ),
        body: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                // 별 등급을 나타내는 Row 위젯
                Row(
                  children: const <Widget>[
                    Icon(Icons.star, color: Colors.red),
                    Icon(Icons.star, color: Colors.red),
                    Icon(Icons.star, color: Colors.red),
                    Icon(Icons.star_border),
                    Icon(Icons.star_border),
                  ],
                ),
                // 겹치는 위젯을 나타내는 Stack 위젯
                Stack(
                  alignment: Alignment.center,
                  children: <Widget>[
                    CircleAvatar(
                      backgroundColor: Colors.lightBlue,
                      radius: 40,
                      child: const Text("BG"),
                    ),
                    Positioned(
                      right: 0,
                      bottom: 0,
                      child: CircleAvatar(
                        backgroundColor: Colors.red,
                        radius: 20,
                        child: const Text("FG"),
                      ),
                    ),
                  ],
                ),
          Row(
            children: <Widget>[
              Expanded(
                flex: 2,
                child: Container(color: Colors.amber, height: 100,),
              ),
              Expanded(flex:1, child: Container(color: Colors.blue,height: 100,),)
            ],)
              ],
            ),
          ),
        ),
      ),
    );
  }
}
