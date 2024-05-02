Future<String> preheatOven(){//future 비동기 연산

  return Future.delayed(Duration(minutes: 5),(){
    return "오븐 예열 완료";
  });
}

void bakeCake() async{
  print("오븐 예열 시작!");
  String status = await preheatOven();
  print(status);
  print("케이크 굽기 시작");
}