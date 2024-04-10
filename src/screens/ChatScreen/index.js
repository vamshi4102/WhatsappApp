import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import ChatHeader from '../../components/ChatHeader'
import { ChatMessages } from '../../assets/data/ChatMessages'
import Message from '../../components/Message'
import EnterMessage from '../../components/EnterMessage'

const  ChatScreen = () => {
  return (
    <View style={styles.container}>
        {/* chat header */}
        <ChatHeader />
        {/* chat flatlist */}
        <FlatList 
        data={ChatMessages}
        renderItem={({item})=>(<Message message={item} />)}
        inverted
        />
        {/* input message */}
        <EnterMessage />
    </View>
  )
}

export default  ChatScreen;