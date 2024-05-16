
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget{
  Widget build(BuildContext context){
    return MaterialApp(body:const Center(child: CustomWidgetText("hello word"),))
  }
}

class CustomWidgetText extends StatelessWidget{
  final String text;

  Widget build(BuildContext context){
    return Text(
      text
    )
  }
}