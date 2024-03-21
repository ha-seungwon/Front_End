Map<String, int> emptyMap = {};
Map<String, String> fruits = {
  "apple": "red",
  "banana": "yellow"
};


fruits['apple'] = "green"; // Corrected the assignment operator from '=' to ':'
fruits.addAll({"adsfasd": "zzz", "seungwon": "ggg"}); // Corrected the syntax for adding elements
fruits.remove("apple");
MapEntry<String, int> entry = MapEntry("apple","red");
fruits.addEntry([entry])




bool ok = fruits.containsKey("apple"); // Corrected the method name from 'containKey' to 'containsKey'
bool okValue = fruits.containsValue("purple");

