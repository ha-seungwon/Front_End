import 'package:flutter/material.dart';
import 'database_helper.dart';
import 'todo.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Search List',
      home: SearchListScreen(),
    );
  }
}

class SearchListScreen extends StatefulWidget {
  const SearchListScreen({super.key});

  @override
  SearchListScreenState createState() => SearchListScreenState();
}

bool _isValidEmail(String email) {
  // Regular expression for email validation
  final emailRegex = RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
  return emailRegex.hasMatch(email);
}

class SearchListScreenState extends State<SearchListScreen> {
  final TextEditingController _controller_name = TextEditingController();
  final TextEditingController _controller_email = TextEditingController();
  final DatabaseHelper _dbHelper = DatabaseHelper.instance;
  List<Search> _searchedItems = [];

  void _add_data() async {
    if (_controller_name.text.isNotEmpty || _controller_email.text.isNotEmpty || _isValidEmail(_controller_email.text)) {
      await _dbHelper.insert(
          Search(name: _controller_name.text, email: _controller_email.text));
      _controller_email.clear();
      _controller_name.clear();
      setState(() {});
    }
  }

  void _search() async {
    List<Map<String, dynamic>> usersMapList = await _dbHelper.getAllUsers();
    List<Search> searchedItems = usersMapList
        .map((userMap) => Search(
              name: userMap['name'],
              email: userMap['email'],
            ))
        .toList();

    // Assign the converted list to _searchedItems
    _searchedItems = searchedItems;

    // Trigger a rebuild of the UI to display the updated search results
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Search  리스트')),
      body: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: _controller_name,
              decoration: const InputDecoration(hintText: '이름을 입력하세요.'),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: _controller_email,
              decoration: const InputDecoration(hintText: '이메일을 입력하세요.'),
            ),
          ),
          ElevatedButton(
            onPressed: _add_data,
            child: const Text('저장'),
          ),
          ElevatedButton(
            onPressed: _search,
            child: const Text('검색'),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: _searchedItems.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(_searchedItems[index].email),
                  subtitle: Text(
                      _searchedItems[index].name), // Display name as subtitle
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
