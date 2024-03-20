import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const BlackColor = "#161817";
const PrimaryColor = "#40C351";
const UserProfileCard = ({image,seenStatus}) => {
  return (
    <View
      style={[
        styles.user_image,
        //   { borderColor: user.seenStatus ? BlackColor : PrimaryColor },
      ]}
    >
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default UserProfileCard;

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
        borderColor: BlackColor,
        borderWidth: 5,
      },
      user_image: {
        borderColor: PrimaryColor,
        borderWidth: 3,
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
     
      },
});
