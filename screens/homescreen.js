import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login"); //returns to login screen.
      })
      .catch((error) => alert(error.message));
  };

  var currentUser = auth.currentUser;
  var photoURL = "";
  var email = "";
  if (currentUser !== null) {
    photoURL = currentUser.photoURL;
    email = currentUser.email;
  }

  return (
    <View style={styles.container}>
      <Image source={photoURL} />
      <Text>Hello: {email == "" ? "Anonymous" : email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
