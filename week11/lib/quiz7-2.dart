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
  late Animation<Color?> _colorAnimation;
  bool _isClicked = false;

  @override
  void initState() {
    super.initState();
    _controller =
        AnimationController(duration: const Duration(seconds: 1), vsync: this);
    _colorAnimation = ColorTween(begin: Colors.blue, end: Colors.red)
        .animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _toggleAnimation() {
    if (_isClicked) {
      _controller.reverse();
    } else {
      _controller.forward();
    }
    setState(() {
      _isClicked = !_isClicked;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        AnimatedBuilder(
          animation: _controller,
          builder: (context, child) {
            return Container(
              width: 100,
              height: 100,
              color: _colorAnimation.value,
            );
          },
        ),
        const SizedBox(height: 20),
        ElevatedButton(
          onPressed: _toggleAnimation,
          child: const Text('Toggle Animation'),
        ),
      ],
    );
  }
}