import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserProfileCard from "./userProfileCard";
const BlackColor = "#161817";
const PrimaryColor = "#40C351";
const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <UserProfileCard image={user.image} seenStatus={user.seenStatus} />
      <Text style={styles.username}>{user.userName}</Text>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    width: 85,
    marginHorizontal:8
  },
  username: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
});
