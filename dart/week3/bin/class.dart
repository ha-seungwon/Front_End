class Person {
  String name;
  int age;

  Person(this.name,this.age);

  void introduce(){
    print("hello, $name");
  }


}

var john = Person("john", 30);
john.introduce();

class Rectangle{
  double width, height;

  Rectangle(this.width,this.height);

  Rectangle.zero() : width=0 , height=0;
  Rectangle.square(double side) : this(side, side);


}
var zero = Rectangle.zero();
var suare = Rectangle.square(5);

// 클래스 private 변수, getter, setter

class BankAccount {
  double _balance = 0 ; //_ 한개 있으면 private 변수
  

  double get balance => _balance;

  set deposit(double amount){
    _balance += amount;
  }

}


var bank = BankAccount();
var money = bank.balance;
bank.deposit(500);
