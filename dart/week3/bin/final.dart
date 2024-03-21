//상속 

class Animal {
  void move(){
    print("moves");
  }
}

class Bird extends Animal {
  //오버라이드
  @override // 상속했다는 표시
  void move(){
    super.move();
    print("bird moves");

  }
}



void main(){
  var bird = Bird();
  bird.move();
}

class Flyer{
  void fly(){
    print("flies");
  }
}


class Swimmer {
  void swim(){
    print("swim");
  }
}

class Duck implements Flyer, Swimmer {
  @override

  void fly{
    print("the duck flies");
  }

  void swim{

  }
}



//abstract

abstract class Shape{// 추상 클래스
  void draw();// 추상 메서드
}


class Circle extends Shape{
  void draw(){
    print("Drawing a circle");
  }
}

//maxin
//class 코드를 재사용


//제너릭

var boxInt = Box<int>(0);
var boxString = Box<String>("Hello");

List<int> list =[1,2,3];

T first<T>(List<T> lisit){
  return list[0];

}

int firstInt = first<int>([1,2,3]);
String firstString = first<String>(["a","b","c"]);


//스태틱 
class Counter {
  static int _value =0;

  static void increment(){
    _value++;
  }
  static int get value => _value;
}
//cascade
void main(){
  print(Counter.value);
  Counter.increment();
}


