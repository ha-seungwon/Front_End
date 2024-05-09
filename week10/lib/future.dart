Future<String> loadData() {
  return Future.delayed(const Duration(seconds: 3), () {
    var dataFetched = true;

    if (dataFetched) {
      return "데이터 로드 성공";
    } else {
      throw Exception("데이터 로드 실패");
    }
  });
}

void main() {
  print("데이터 로드 시작");

  loadData().then((result) {
    print(result);
  }).catchError((error) {
    print("애러");
  }).whenComplete(() {
    print("데이터 로드 완료");
  });
}
