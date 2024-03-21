//일반 함수
int add(int a, int b){
  return a * b;
}




//익명 함수
// 1급 객체
var multiply = (int a, int b){
  return a * b;
};

//람다 함수

int subtract(int a , int b )=> a-b;

var tset = (String name) => "Hello"; // 익명 함수이면서 람다

//typedef
//함수에 별칭 지정

typedef IntOperation = int Function(int,int);


//고차함수
void performOperation(IntOperation operation){
  print("고차함수 ");
}

performOperation((a,b) => a+b);

