import "package:flutter/material.dart";


void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(title: "페이지 전환 이쁘게", home: FirstPage(),)
  }
}


class FirstPage extends StatelessWidget {
  const FirstPage({super.key});


  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(title: const Text("첫번쨰 페이지"),),
      body: Center(child: ElevatedButton(onPressed: () {
        Navigator.of(context).push(_createRoute());
      }, child: const Text("두번째 페이지로 가기"),),),);
  }

  Route _createRoute() {
    return PageRouteBuilder(
        pageBuilder: (context, animation, secondaryAnimation) => SecondPage(),
        transitionsBuilder: (context,animation,secondaryAnimation,child){const begin = Offset(1.0,0.0);
          const end = Offset.zero;
          const curve = Curves.easeInOut;
          var tween = Tween(begin:begin,end: end).chain(CurveTween(curve:curve));
          return SlideTransition(position: animation.drive(tween),child: child,);

    }
  );
}

}


class SecondPage extends StatelessWidget{
  const SecondPage({super.key});

  @override
  Widget build(BuildContext context){
    return Scaffold()
  }
}