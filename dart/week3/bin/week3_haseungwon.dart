// Q 1 
//1.리스트조작•5개의정수를포함하는리스트를생성하세요.
//•2 를곱한새리스트를map을사용하여생성하세요.
//•생성된리스트에서짝수만포함하는리스트를where을사용하여생성하세요.
//•모든요소의합을reduce를사용하여계산하세요.
List<int> list = [1,2,3,4,5];
List<int> multipliedList = list.map((number) => number * 2).toList();
List<int> evenList = list.where((number) => number % 2 == 0).toList();
int sum = list.reduce((currentSum, currentNumber)=> currentSum + currentNumber);


//2.맵조작
//•문자열을키로, 정수를값으로하는맵을생성하세요.
//•새키-값쌍을추가하고하나를삭제하세요.
//•맵의모든키에대해대문자변환을수행하는새맵을map을사용하여생성하세요.
Map<String, int> mapping = {
  "a": 1,
  "b": 2
};
mapping['a'] = 3;
mapping.remove("a");


//3.세트조작
//•5개의정수를포함하는세트를생성하세요.
//•두개의세트에대해교집합을구하세요.
//•하나의세트에요소를추가하고다른요소를삭제하세요.
//•세트의모든요소에대해2를곱한새세트를생성하세요

Set<int> number1 = {1,2,3,4,5};
Set<int> number2 = {3,4,5,6,7};

Set<int> intersection = number1.intersection(number2);

number1.add(6);
number1.remove(4);

Set<int> multiply = number1.map((number) => number * 2).toSet();

//Q2
//1.기본클래스와생성자
//•Car 클래스를만들고, make, model, year 속성을포함하세요. 각속성에대한기본생성자를제공하세요.
//•Car 객체를생성하고, 해당객체의정보를출력하는메서드를호출하세요.

class Car{
  int make;
  int model;
  int year;

  Car(this.make,this.model,this.year);


  void print_all(){
    print("print, $make");
    print("print, $model");
    print("print, $year");
  }


} 


//2.네임드생성자와상속
//•ElectricCar클래스가 Car 클래스를상속받도록하고, 배터리용량을나타내는 batteryCapacity속성을추가하세요.
//•ElectricCar에대해네임드생성자를정의하고, 객체를생성하여출력하세요.

class ElectricCar extends Car {
  //오버라이드
  @override 
  int batteryCapacity;

  ElectricCar(int make, int model, int year, this.batteryCapacity) : super(make, model, year);

  void print_all() {
    super.print_all(); // 상위 클래스의 printInfo 메서드 호출
    print("batteryCapacity: $batteryCapacity");
  }

}

//3.Mixin사용
//•Flyable과 Driveable믹스인을정의하세요. 각각fly와 drive 메서드를포함해야합니다.
//•FlyingCar클래스가Car 클래스를상속받고, Flyable과 Driveable믹스인을사용하도록만드세요.
//•FlyingCar객체를생성하고, fly와 drive 메서드를호출하세요.

mixin Flyable {
  void fly() {
    print("Flying");
  }
}

mixin Driveable {
  void drive() {
    print("Driving");
  }
}

class FlyingCar extends Car with Flyable, Driveable{
  FlyingCar() : super(12,12,12);
}

FlyingCar flyingcar =FlyingCar();
flyingcar.fly();
flyingcar.drive();


//QUIZ 3: 제네릭과고차함수
//1.제네릭을사용한컬렉션
//•제네릭을사용하여다양한타입의요소를저장할수있는Box<T> 클래스를만드세요. Box 내부에는T 타입의item을저장하고, 이를반환하는메서드를포함하세요.
//•int와 String 타입을각각저장하는Box 객체를생성하세요.
class Box<T>{
  T _item;
  Box(this._item);

  T Item(){
    return _item;
  }
}

var int_box=Box<int>(0);
var string_box=Box<String>("hello");


//2.고차함수
//•두 int 값을받아 더하는함수, 곱하는함수를작성하세요.
//•두 int 값과위에서정의한두함수중하나를 매개변수로받아해당함수를호출하는고차함수를작성하세요.

int add_(int x, int y) {
  return x + y;
}

int multiply_(int x, int y) {
  return x * y;
}

int calculate(int x, int y, Function(int, int) operation) {
  return operation(x, y);
}

int result1 =calculate(2, 3, add_);
int result2 =calculate(2, 3, multiply_);