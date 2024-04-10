import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const EnterMessage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Entypo name="emoji-happy" size={24} color="#ccc" />
        <TextInput placeholder="Message..." placeholderTextColor={"#ccc"}  style={styles.message} />
        <Ionicons name="mic-sharp" size={24} color="#ccc" />
      </View>
      <View style={styles.send}>
        <FontAwesome5 name="paper-plane" size={24} color="white" />
      </View>
    </View>
  );
};

export default EnterMessage;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    width: "100%",
    height: 50,
    marginBottom: 30,
    flexDirection: "row",
    padding:5
  },
  left: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal:10,
    paddingVertical:10,
    height:50,
    borderRadius:8,
    backgroundColor:'rgba(255,255,255,0.2)'
  },
  send: {
    backgroundColor: "#40C351",
    width: 50,
    height:50,
    borderRadius:8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  message: {
    flex: 1,
    // backgroundColor:'yellow',
    marginHorizontal:10,
    height:'100%',
    paddingHorizontal:10,
    borderLeftWidth:1,
    borderLeftColor:'gray',
    borderRightWidth:1,
    borderRightColor:'gray'
  },
});
