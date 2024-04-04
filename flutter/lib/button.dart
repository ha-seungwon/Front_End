import 'package:flutter/material.dart';

void main() => runApp(const ButtonTutorial());

class ButtonTutorial extends StatelessWidget {
  const ButtonTutorial({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Button Tutorial"),
        ),
        body: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                //ElevatedButton 는 입체 버튼
                ElevatedButton(
                  onPressed: () {
                    //동작 구현
                  },
                  child: const Text("ElevatedButton"),
                ),
                const SizedBox(
                  height: 10,
                ),
                OutlinedButton(
                    onPressed: () {}, child: const Text("outlined button")),
                const SizedBox(
                  height: 10,
                ),
                IconButton(
                  onPressed: () {},
                  icon: const Icon(Icons.connected_tv_sharp),
                ),

                FloatingActionButton(
                  onPressed: () {},
                  child: const Icon(Icons.navigation),
                  backgroundColor: Colors.green,
                ),
                const SizedBox(
                  height: 10,
                ),
                ElevatedButton.icon(
                    onPressed: () {},
                    icon: const Icon(Icons.save),
                    label: const Text("ElevatedButton with Icon")),

                const SizedBox(
                  height: 10,
                ),
                OutlinedButton.icon(
                    onPressed: () {},
                    icon: const Icon(Icons.info),
                    label: const Text("Text button with Icon"))
              ],
            ),
          ),
        ),
      ),
    );
  }
}
