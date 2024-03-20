import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const BlackColor = "#161817";
const PrimaryColor = "#40C351";
import { FontAwesome6 } from '@expo/vector-icons';
const AddStatus = ({ user }) => {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.user_image,
        ]}
      >
        <FontAwesome6 name="add" size={24} color="white" />
      </View>
      <Text style={styles.username}>Add</Text>
    </View>
  );
};

export default AddStatus;

const styles = StyleSheet.create({
  card: {
    width: 85,
    marginHorizontal:8
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderColor: BlackColor,
    borderWidth: 5,
  },
  user_image: {
    borderColor: '#ccc',
    borderStyle:'dashed',
    borderWidth: 3,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
 
  },
  username: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
});
