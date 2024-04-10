import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Message = (props) => {
  const MyUserId = "user1";

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            props.message.userId === MyUserId
              ? "#40C351"
              : "rgba(255,255,255,0.2)",
          alignSelf:
            props.message.userId === MyUserId ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text style={styles.message}>{props.message.message}</Text>
      <View style={styles.time_row}>
        <Text style={styles.time}>{props.message.time}</Text>
        {props.message.userId === MyUserId && props.message.readStatus === "sent" ? (
          <Ionicons name="checkmark-sharp" size={20} color="white" />
        ) : props.message.userId === MyUserId && props.message.readStatus === "delivered" ? (
          <Ionicons name="checkmark-done-sharp" size={20} color="white" />
        ) : props.message.userId === MyUserId && props.message.readStatus === "Read" ? (
          <Ionicons name="checkmark-done-sharp" size={20} color="blue" />
        ) : null}
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    maxWidth: "80%",
  },
  message: {
    fontSize: 15,
    color: "#fff",
  },
  time_row: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  time: {
    alignSelf: "flex-end",
    color: "#f3f3f3",
    marginRight:5
  },
});
