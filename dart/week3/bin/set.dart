Set<String> empty = {};
Set<int> number = {1,2,3,4,5};
Set<int> setFromList = set.from([1,2,3,3,4,5]);

//set 추가, 삭제
//add, addall, remove, removeall, retainall

//set 검색
bool contain = number.containAll({2,3,4,});
bool three = number.contains(3);

for ( int val in numbers){
  print(val);
}
//set 연산 합집합 차집합

// intersection, union,
Set<int> intersection = number.intersection(other)
