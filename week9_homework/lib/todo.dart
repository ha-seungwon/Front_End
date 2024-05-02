class Search {
  final int? id;
  final String name;
  final String email;

  Search({this.id, required this.name, required this.email});

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'email': email
    };
  }
}
