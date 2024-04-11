import 'package:flutter/material.dart';
import 'homework_edit.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  Widget build(BuildContext context) {
    return const MaterialApp(
      title: "프로필",
      home: ProfileListScreen(),
    );
  }
}

class ProfileListScreen extends StatefulWidget {
  const ProfileListScreen({super.key});

  @override
  ProfileListScreenState createState() => ProfileListScreenState();
}

class ProfileListScreenState extends State<ProfileListScreen> {
  List<Profile> profiles = []; // 메모 저장하는 리스트

  void addProfiles(Profile profile) {
    setState(() {
      profiles.add(profile);
    });
  }

  void deleteProfiles(int index) {
    setState(() {
      profiles.removeAt(index);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("프로필 리스트"),
      ),
      body: ListView.builder(
        itemCount: profiles.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text("이름:${profiles[index].name}"),

            subtitle: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("이메일: ${profiles[index].email}"),Text("주소: ${profiles[index].bio}"),

              ],
            ),

            trailing: Row(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                IconButton(
                    onPressed: () async {
                      final updatedProfile = await Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) =>
                                ProfileEditScreen(profile: profiles[index])),
                      );
                      if (updatedProfile != null) {
                        setState(() {
                          profiles[index] = updatedProfile;
                        });
                      }
                    },
                    icon: const Icon(Icons.edit)),
                IconButton(
                    onPressed: () => deleteProfiles(index),
                    icon: const Icon(Icons.delete))
              ],
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          final result = await Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const ProfileEditScreen()),
          );

          if (result != null) {
            setState(() {
              profiles.add(result);
            });
          }
        },
        child: const Text("프로필을 생성하세요"),
      ),
    );
  }
}

class Profile {
  String name;
  String email;
  String bio;

  Profile({required this.name, required this.email,required this.bio});
}
