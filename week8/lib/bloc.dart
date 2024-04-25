import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: BlocProvider(
        create: (context) => CounterBloc(),
        child: const CounterPage(),
      ),
    );
  }
}

class CounterPage extends StatelessWidget {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("블록 카운터 앱")),
      body: Center(
        child: BlocBuilder<CounterBloc, CounterState>(
            builder: (context, state) {
              return Text(
                "카운터: ${state.counter}", style: const TextStyle(fontSize: 20),);
            }
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: ()=>
        context.read<CounterBloc>().add(Increment()),
        child: const Icon(Icons.add),
      ),
    );
  }
}


abstract class CounterEvent {}

class Increment extends CounterEvent {} //이벤트

abstract class CounterState {
  final int counter;

  CounterState(this.counter);
}

class CounterValue extends CounterState {
  CounterValue(super.counter);
}

class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterValue(0)) {
    on<Increment>((event, emit) {
      emit(CounterValue(state.counter + 1));
    });
  }
}
