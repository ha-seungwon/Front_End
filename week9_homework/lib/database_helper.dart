import 'package:path_provider/path_provider.dart';
import 'package:sqflite/sqflite.dart';
import 'dart:io';
import 'todo.dart';
import 'package:path/path.dart';

class DatabaseHelper {
  static const _databaseName = "MyDatabase.db";
  static const _databaseVersion = 1;
  static const table = 'search_table';
  static const columnId = 'id';
  static const columnName = 'name';
  static const columnEmail = 'email';

  DatabaseHelper._privateConstructor();
  static final DatabaseHelper instance = DatabaseHelper._privateConstructor();

  static Database? _database;

  Future<Database> get database async => _database ??= await _initDatabase();

  Future<Database> _initDatabase() async {
    Directory documentsDirectory = await getApplicationDocumentsDirectory();
    String path = join(documentsDirectory.path, _databaseName);
    return await openDatabase(path, version: _databaseVersion, onCreate: _onCreate);
  }

  Future _onCreate(Database db, int version) async {
    await db.execute('''
          CREATE TABLE $table (
            $columnId INTEGER PRIMARY KEY,
            $columnName TEXT NOT NULL,
            $columnEmail TEXT NOT NULL
          )
          ''');
  }

  Future<int> insert(Search search) async {
    Database db = await database;
    int id = await db.insert(table, search.toMap());
    return id;
  }

  Future<List<Map<String, dynamic>>> getAllUsers() async {
    Database db = await database;

    List<Map<String, dynamic>> results = await db.rawQuery('SELECT $columnName, $columnEmail FROM $table');
    return results;
  }
}
