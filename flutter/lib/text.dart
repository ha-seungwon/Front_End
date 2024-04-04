import 'package:flutter/material.dart';

// void main() {
//   //option + command + l 정렬
//   runApp(const MaterialApp(
//     home: Scaffold(body: Text("Hello Flutter")), //상단에 바 layou
//     )
//   );
// }

void main() => runApp(const TextTutorial());

class TextTutorial extends StatelessWidget {
  const TextTutorial({super.key});

  @override //build 에서는 필요
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Text tutoril exmple"),
        ),
        body: SingleChildScrollView(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start, //가로정렬
            children: <Widget>[
              //여러개 붙일때는 children
              Text(
                "hello flutter",
                style: TextStyle(fontSize: 24, color: Colors.blue),
              ),
              const SizedBox(
                height: 20,
              ),
              Text(
                "i'm flutter",
                style: TextStyle(
                  decoration: TextDecoration.underline,
                  decorationColor: Colors.red,
                  decorationStyle: TextDecorationStyle.dotted,
                  fontSize: 20,
                ),
              ),
              Text(
                "hello flutter",
                style: TextStyle(fontSize: 24, color: Colors.blue),
              ),
              Text(
                "Letter Spacing & Word Spacing",
                style: TextStyle(
                  letterSpacing: 2.0,
                  wordSpacing: 4.0,
                  fontSize: 20,
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              Text(
                "Text Shadow",
                style: TextStyle(fontSize: 20, shadows: [
                  Shadow(
                    offset: Offset(2.0, 2.0),
                    blurRadius: 3.0,
                    color: Color.fromARGB(225, 0, 0, 0))
                ]),
              ),
              Text("Font Family",
              style: TextStyle(
                fontFamily: "Serif",
                fontSize: 20,
              ),)
            ],
          ),
        ),
      ),
    );
  }
}
