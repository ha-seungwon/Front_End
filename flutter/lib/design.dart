import 'package:flutter/material.dart';

void main() => runApp(const DesignTutorial());

class DesignTutorial extends StatelessWidget {
  const DesignTutorial({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: const Text("Design Wigets Tutorial"),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Container(
                color: Colors.lightBlue,
                padding: const EdgeInsets.all((8.0)),
                child: const Text("Container with Background Color"),
              ),
              const SizedBox(
                height: 20,
              ),
              DecoratedBox(
                decoration: BoxDecoration(
                    color: Colors.orange,
                    border: Border.all(color: Colors.orange, width: 2),
                    borderRadius: BorderRadius.circular(4)),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: const Text("DecoratedBox with Border"),
                ),
              ),
              const SizedBox(height: 20,),
              Divider(color: Colors.grey,),
            ],
          ),
        ),
      ),
    ));
  }
}
