import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back}>
        <Ionicons name="chevron-back-outline" size={30} color="#40C351" />
        <View style={styles.number}>
          <Text style={styles.number_text}>5</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.user_info}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1592621385645-e41659e8aabe?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.user_image}
        />
        <View style={styles.user_bio}>
          <Text style={styles.username}>ChatHeader</Text>
          <Text style={styles.last_seen}>Active now</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.call_btn}>
        <Ionicons name="call-sharp" size={24} color="#40C351" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.call_btn}>
        <Ionicons name="videocam" size={24} color="#40C351" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    flexDirection: "row",
    // justifyContent:'space-between'
  },
  back: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    width: 25,
    height: 25,
    borderRadius: 15,
    marginRight: 5,
    backgroundColor: "#40C351",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -7,
  },
  number_text: {},
  user_info: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  user_image: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  last_seen: {
    color: "#f3f3f3",
  },
  call_btn: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  user_bio: {
    marginLeft: 10,
  },
});
