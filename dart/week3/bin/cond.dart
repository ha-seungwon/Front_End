//if
void main(){
int number =10;

if (number > 0){
  print("$number");
} else if (number <0){
  print("$number is negative");
}

var command = "open";
switch(command) {
  case "Close":
    print("");
    break;
  
  
}

for (int i=0;i<5;i++){
  print("i is $i");
}


List<String> names = ["A","B","C"];
for (var name in names) {
  print(name);
}

//함수형 프로그래밍
names.forEach(name) {
  print(name);
}

int count = 0;
while (count < 5){
  print("count is $count");
  count++;
}


//do - while 문

//try-catch 문
// 예외 가능성 있는 코드


}