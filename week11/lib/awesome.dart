import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Awesome 애니메이션"),
        ),
        body: const Center(
          child: AwesomeAnimationWidget(),
        ),
      ),
    );
  }
}

class AwesomeAnimationWidget extends StatefulWidget {
  const AwesomeAnimationWidget({super.key});

  @override
  AwesomeAnimationWidgetState createState() => AwesomeAnimationWidgetState();
}

class AwesomeAnimationWidgetState extends State<AwesomeAnimationWidget>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _sizeAnimation;
  late Animation<double> _rotationAnimation;
  late Animation<Offset> _positionAnimation;
  late Animation<Color?> _colorAnimation;

  void initState() {
    super.initState();
    _controller =
        AnimationController(duration: const Duration(seconds: 3), vsync: this);
    _sizeAnimation = Tween<double>(begin: 50.0, end: 200.0)
        .animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));

    _rotationAnimation = Tween<double>(begin: 0, end: 2 * 3.14).animate(
        CurvedAnimation(parent: _controller, curve: Curves.easeInOut)); //회전하는거
    _positionAnimation =
        Tween<Offset>(begin: const Offset(-1, 0), end: const Offset(1, 0))
            .animate(CurvedAnimation(
            parent: _controller,
            curve: Curves.easeInOut)); //오른쪽 끝 왼쪽 끝으로 이동시키는거
    _colorAnimation = ColorTween(begin: Colors.blue, end: Colors.red)
        .animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));
  }

  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _controller,
      builder: (context, child) {
        return Transform.translate(offset: _positionAnimation.value,
          child: Transform.rotate(angle: _rotationAnimation.value,
            child: Container(width: _sizeAnimation.value,
              height: _sizeAnimation.value,
              color: _colorAnimation.value ?? Colors.blue,),),);
      },
    );
  }
}
