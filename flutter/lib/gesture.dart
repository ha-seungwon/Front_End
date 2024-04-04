import 'package:flutter/material.dart';

void main() => runApp(const GestureTutorial());

class GestureTutorial extends StatelessWidget {
  const GestureTutorial({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: const Text("gesture tutorial"),
          ),
          body: Center(
            child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                GestureDetector(
                onTap: () {
            //탭 체스쳐
          },
            onDoubleTap: () {
              // 더블탭
            },
            onLongPress: () {
              //길게 누르는거
            },
            child: Container(
              padding: const EdgeInsets.all(12.0),
              decoration: BoxDecoration(
                  color: Colors.lightBlue,
                  borderRadius: BorderRadius.circular(8.0)),
              child: const Text("Tap double tap, long press"),
            ),
          ),
          const SizedBox(
            height: 10,
          ),
          Draggable(
            data: "Draggable data",
            feedback: Container(
              padding: const EdgeInsets.all(8.0),
              color: Colors.blue,
              child: const Text("Drage me"),
            ),
            childWhenDragging: Container(
              padding: const EdgeInsets.all(8.0),
              color: Colors.grey,
              child: const Text("origianl"),
            ),

            child: Container(
              padding: const EdgeInsets.all(8.0),
              color: Colors.red,
              child: const Text("drag me"),
            ),),
          DragTarget<String>(onAccept: (data) {},
              builder: (BuildContext context, List<dynamic> accepted,
                  List<dynamic> rejectd,) {
                return Container(
                  height: 100.0,
                  width: 100.0,
                  color: Colors.cyan,
                  child: const Center(child: Text("Drag Target"),)
                  ,);
              }
          )]
      ,
    ),)
    ,
    )
  }

  ,

  );
}}
