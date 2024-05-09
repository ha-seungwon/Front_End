Future<String> fetchData() {
  return Future.delayed(const Duration(seconds: 2), () => "데이터 가져오기");
}

Future<void> printData() async {
  try {
    print("데이터 가져오는중 ");
    String data = await fetchData();
    print("데이터 가져오기 완료 : $data");
  } catch(e){
    print("에러 발생: $e");
  }
}

void main(){
  printData();
  print("데이터 가져오기가 시작되었습니다.");
}