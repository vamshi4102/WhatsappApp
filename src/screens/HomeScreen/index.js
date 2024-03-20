import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import UserCard from "../../components/UserCard";
import { storiesData } from "../../assets/data/StoriesData";
import AddStatus from "../../components/addStaus";
import ChatCard from "../../components/ChatCard";
import { chatsData } from "../../assets/data/ChatsData";
const HomeScreen = () => {
  return (
      <ImageBackground style={styles.back_image} source={require('../../assets/images/primary_bg.png')}>
        <View style={styles.container}>
        {/* top bar */}
        <View style={styles.top_bar}>
            <Text style={styles.logo}>WhatsApp</Text>
            <View style={styles.top_bar_buttons}>
                <TouchableOpacity style={styles.top_bar_btn}>
                <Feather name="search" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.top_bar_btn}>
                <SimpleLineIcons name="settings" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
        {/* status list */}
        <View style={styles.status_list}>
           <FlatList 
           ListHeaderComponent={<AddStatus />}
           data={storiesData}
           renderItem={({item})=><UserCard user={item} />}
           horizontal
           showsHorizontalScrollIndicator={false}
           />
        </View>
        {/* sub navigation */}
        <View style={styles.sub_nav}>
            <TouchableOpacity style={[styles.sub_nav_btn,styles.sub_nav_btn_active]}>
                <Text style={styles.sub_nav_text}>Chats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sub_nav_btn}>
                <Text style={styles.sub_nav_text}>Status</Text>
            </TouchableOpacity>
        </View>
        {/* chats */}
        <View>
        <FlatList 
           data={chatsData}
           showsVerticalScrollIndicator={false}
           renderItem={({item})=><ChatCard chat={item} />}
           />
        </View>
        </View>
      </ImageBackground>
  );
};

export default HomeScreen;
