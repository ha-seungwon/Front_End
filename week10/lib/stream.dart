Stream<String> loadDataStream() {
  int count = 0;
  //Stream.periodi 매초마다 생성되는 스트림
  return Stream.periodic(const Duration(seconds: 1), (x) {
    count++;
    if (count < 4) {
      return "데이터 $count 로드 성공!";
    } else {
      throw "데이터 로드 실패";
    }
  }).take(4);
}

void main() {
  print("데이터 스트림 ㄷ로드 시작");

  loadDataStream().listen((data) {
    print(data);
  }, onError: (error) {
    print("에러 발생: $error");
  }, onDone: () {
    print("데이터 스트림 로드 완료");
  }, cancelOnError: false);
}
