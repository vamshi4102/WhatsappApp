import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserProfileCard from "./userProfileCard";

const ChatCard = ({chat}) => {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <UserProfileCard
          image={chat.profileImage}
          seenStatus={true}
        />
      </View>
      <View style={styles.right}>
        <View style={styles.user_info_row}>
          <View>
            <Text style={styles.user_name}>{chat.name}</Text>
          </View>
          <View>
            <Text style={styles.time}>{chat.messageTime}</Text>
          </View>
        </View>
        <View style={styles.user_info_row}>
          <View>
            <Text style={styles.message}>{chat.lastMessage}</Text>
          </View>
          {/* <View style={styles.badge}>
            <Text style={styles.badge_text}>2</Text>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  left: {},
  right: {
    marginLeft: 10,
  },
  user_info: {},
  user_info_row: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  user_name: {
    fontSize: 20,
    color: "#fff",
    fontWeight:'600'
  },
  time: {
    textAlign: "right",
    color: "#fff",
  },
  message: {
    color: "#ccc",
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  badge_text: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },
});
