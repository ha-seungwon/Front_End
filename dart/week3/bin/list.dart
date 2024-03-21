//리스트

List<int> list = {1,2,3,4,5};

List<int> fixed = List<int>.filled(5,0);
List<int> generate = List.generate(5,(index) => index *index);

void main(){
list.add(6);
list.addAll([5,6]);
list.insert(0,0);
list.remove(2);
}
// 리스트 검색
int number = list[0];
List<String> stringNumbers = list.map((number)=> "$number").toList();
List<int> numb = list.reduce((currentSum, currentNumber)=> currentSum + currentNumber);


//list sort
list.sort((a,b) => b.compareTo(a));
list.reversed.toList();
