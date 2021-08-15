import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import AppText from './AppText'
import ListItem from './ListItem'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image 
            style = {styles.image}
            source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red Jacket for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
            <View style={styles.userContainer}>
            <ListItem
                image={require("../assets/portrait/portrait_1.jpg")}
                title="John Doe"
                subTitle="5 Listings"
            />
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
    },
    detailsContainer:{
        padding: 20,
    },
    title:{
        fontSize:24,
        fontWeight:'500',
    },
    price:{
        color: "#4ecdc4",
        fontWeight:"bold",
        fontSize:20,
        marginVertical:10
    },
    userContainer:{
        marginVertical:40
    }
});
