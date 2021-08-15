import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from './Card'
import Screen from './Screen'

const listings = [
    {
        id: 1,
        title: "Red Jacket for sale",
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: "Sofa in great condition",
        price: 1000,
        image: require('../assets/couch.jpg')
    },
    {
        id:3,
        title: "Wooden Table for sale",
        price: 50,
        image: require('../assets/table.jpg')
    },
    {
        id:4,
        title: "Flower pot for sale",
        price: 20,
        image: require('../assets/flowerpot.jpg')
    }
]


export default function ListingsScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) =>
                <Card
                    title={item.title}
                    subTitle={"$" + item.price}
                    image={item.image}
                />
            }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:8,
        backgroundColor:"#f8f4f4"
    }
})
