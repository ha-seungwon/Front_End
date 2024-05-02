import "package:path_provider/path_provider.dart";
import "package:sqflite/sqflite.dart";
import "dart:io";
import "todo.dart";
import "package:path/path.dart";

class DatabaseHelper {
  static const _databaseName = "MyDatabase.db";
  static const _databaseVersion = 1;
  static const table = "todo_table";
  static const columnId = "id";
  static const columnTitle = "title";

  DatabaseHelper._privateConstructor();

  static final DatabaseHelper instance = DatabaseHelper._privateConstructor();


  static Database? _database;

  Future<Database> get database async => _database ??= await _initDatabase();

  Future<Database> _initDatabase() async {
    Directory documentDirectory = await getApplicationDocumentsDirectory();
    String path = join(documentDirectory.path, _databaseName);
    return await openDatabase(
        path, version: _databaseVersion, onCreate: _onCreate);
  }

  Future _onCreate(Database db, int version) async {
    await db.execute('''
      CREATE TABLE $table (
      $columnId INTEGER PRIMARY KEY,
      $columnTitle TEXT NOT NULL
    ''');
  }


  Future<int> insert(Todo todo) async {
    Database db = await database;
    int id = await db.insert(table, todo.toMap());
    return id;
  }

  Future<List<Todo>> todos() async {
    Database db = await database;
    List<Map> maps = await db.query(table); //쿼리로 읽어오기
    return List.generate(maps.length, (i) {//각 요소를 읽어오고 디비에서 -> 리스트 -> todo 객채로 바꾼다
      return Todo(
        id: maps[i]["id"],
        title: maps[i]['title'],);
    });
  }
}

