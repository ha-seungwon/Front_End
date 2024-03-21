void main() {
  /// 초기화 된 값이 타입으로 지정됨
  var name = "haseungwon";

  print(name);

  name = "qoo";

  dynamic money = 10000;
  print(money);

  money = "kin";
  money = 3.15;

  String game = "the";
  int level = 100;
  //double, bool
  const newYear = 2023; // 컴파일 시
  final currentyear = DateTime.now().year; // 런타임시

  const int year = 2000;


  // 기본 연산자

  int a =10;
  int b = 5;

  int sum = a+ b;
  int difference = a-b;
  int product = a * b;
  double quotient = a/b ; //항상 double 타입으로 나누기는 나옴
  int intQuotient = a~/b;
  int remainder = a%b;
  a++;
  b--;


  //비교 연산자
  int x=100;
  int y = 200;
  bool isEqual = (x==y);

  bool isNotEqual = (x !=y);
  bool isGreater = (x>y);
  bool isLess = (x<y);
  bool isGreateEqual = (x>=y);

  //타입 비교 연산자
  bool isBool = isLess is bool;
  bool isNotBool = isLess is! bool;

  //논리 연산자
  bool trueValue = true;
  bool falseValue = false;
  //&& || 도 가능

  //null 관련 연산자
  int? nullableNumber; // 널이 가능한건 물음표를 
  String? nullableString;


  int number = nullableNumber ?? 0; // 널이면 왼쪽 아니면 오른쪽

  nullableString ??= "default value"; //널이니까 오른쪽 값을 할당

  int? length = nullableString?.length; // 널이면 출력안하고 아니면 길이를 출력

  





  



  
  
}