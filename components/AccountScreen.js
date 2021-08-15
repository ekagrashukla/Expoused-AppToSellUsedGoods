import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ListItem from './ListItem'
import Screen from './Screen'
import Icon from './Icon'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ListItemSeperator from './ListItemSeperator'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: "tomato"
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: "dodgerblue"
        }
    }
]


export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="John Doe"
                    subTitle="johndoe@gmail.com"
                    image={require("../assets/portrait/portrait_1.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                                />
                        }/>
                }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon name="logout"
                        backgroundColor="#ffe66d"/>
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor:"#f8f4f4"
    }
})
