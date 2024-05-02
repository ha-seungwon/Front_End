// String preheatOven() {
//   return "오븐 예열 완료!";
// }
//
// void bakeCake() {
//   String status = preheatOven();
//   print(status);
//   print("케이크 굽기 시작!");
// }
//
// bakeCake();
//
// Future<String> preheatOven() {
//   return Future.delayed(Duration(minutes: 5), () {
//     return "오븐 예열 완료!";
//   });
// }
//
// void bakeCake() async {
//   print("오븐 예열 시작!");
//   String status = await preheatOven();
//   print(status);
//   print("케이크 굽기 시작!");
// }
//
// bakeCake();