import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar,Text, View } from 'react-native'
import ListItem from './ListItem'
import ListItemDeleteAction from './ListItemDeleteAction'
import ListItemSeperator from './ListItemSeperator'
import Screen from './Screen'

const initialMessages = [
    {
        id:1,
        title: 'John Doe',
        description: 'Lorem Ipsum Dolor Amit',
        image: require('../assets/portrait/portrait_1.jpg')
    },
    {
        id:2,
        title: 'Kendrick Dixon',
        description: 'Lorem Ipsum Dolor Amit',
        image: require('../assets/portrait/portrait_2.jpg')
    },
    {
        id:3,
        title: 'Stephan Stevenson',
        description: 'Lorem Ipsum Dolor Amit',
        image: require('../assets/portrait/portrait_3.jpg')
    },
    {
        id:4,
        title: 'Elbert Payne',
        description: 'Lorem Ipsum Dolor Amit',
        image: require('../assets/portrait/portrait_4.jpg')
    },
    {
        id:5,
        title: 'Philbert Reid',
        description: 'Lorem Ipsum Dolor Amit',
        image: require('../assets/portrait/portrait_5.jpg')
    },
    {
        id:6,
        title: 'Leonard Whitehead',
        description: 'Lorem Ipsum Dolor Amit',
        image: require('../assets/portrait/portrait_6.jpg')
    },
]

export default function MessagesScreen() {

    const [messages,setMessages] = useState(initialMessages);
    const [refreshing,setRefreshing] = useState(false);

    const handleDelete = message =>{
        //Delete the message from messages array
        const newMessages = messages.filter(m=>m.id!== message.id)
        setMessages(newMessages);
    }

    return (
        // <SafeAreaView style={styles.screen}>
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message Tapped",item)}
                        renderRightActions={() => 
                            <ListItemDeleteAction onPress={()=>handleDelete(item)}/>}
                    />}
                    ItemSeparatorComponent={ListItemSeperator}
                    refreshing={refreshing}
                    onRefresh={() => {
                        setMessages(initialMessages)
                    }}
            />
        {/* </SafeAreaView> */}
        </Screen>
    );
}

const styles = StyleSheet.create({
   
})
