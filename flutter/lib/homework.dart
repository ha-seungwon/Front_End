import 'package:flutter/material.dart';

void main() => runApp(const Business_card());

class Business_card extends StatelessWidget {
  const Business_card({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
            appBar: AppBar(
                title: const Text(
              "My Business_card",
              style: TextStyle(fontSize: 20, shadows: [
                Shadow(
                    offset: Offset(2.0, 2.0),
                    blurRadius: 3.0,
                    color: Color.fromARGB(225, 0, 0, 0))
              ])
            )),
            body: SingleChildScrollView(
              child: Padding(
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Container(
                        width: 400,
                        height: 400,
                        decoration: BoxDecoration(
                          color: Colors.orange,
                          border: Border.all(color: Colors.black, width: 2),
                          borderRadius: BorderRadius.circular(10),
                          gradient: LinearGradient(
                              begin: Alignment.topLeft,
                              end: Alignment.bottomRight,
                              colors: [Colors.orange, Colors.yellow]),
                          image: DecorationImage(
                              image: NetworkImage(
                                  "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc")),
                        ),
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: const Text("My image"),
                        ),
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      Divider(
                        color: Colors.grey,
                      ),
                      Container(
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: const Text(
                            "Name : Ha Seung Won",
                            style: TextStyle(fontSize: 20),
                          ),
                        ),
                      ),
                      Container(
                          child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: const Text(
                          "Job : Student",
                          style: TextStyle(fontSize: 20),
                        ),
                      )),
                      Container(
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Row(
                            children: [
                              FloatingActionButton(
                                onPressed: () {},
                                child: const Icon(Icons.phone),
                                backgroundColor: Colors.lightBlue,
                              ),
                              SizedBox(width: 8.0),
                              Text(
                                "010-1234-1234",
                                style: TextStyle(fontSize: 20),
                              ),
                            ],
                          ),
                        ),
                      ),
                      Container(
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Row(
                            children: [
                              FloatingActionButton(
                                onPressed: () {},
                                child: const Icon(Icons.email),
                                backgroundColor: Colors.lightBlue,
                              ),
                              SizedBox(width: 8.0),
                              Text(
                                "hs12341234@gamil.com",
                                style: TextStyle(fontSize: 20),
                              ),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      Container(
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Row(
                            children: [
                              Icon(Icons.comment_bank),
                              SizedBox(width: 12.0),
                              Icon(Icons.home),
                            ],
                          ),
                        ),
                      )
                    ],
                  )),
            )));
  }
}
