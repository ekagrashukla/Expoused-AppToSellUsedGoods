import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import AppText from './AppText';

export default function Card({title,subTitle,image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor: "#fff",
        marginBottom:20,
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:200,
    },
    detailsContainer:{
        padding:20
    },
    title:{
        marginBottom:7
    },
    subTitle:{
        color:"#4ecdc4",
        fontWeight:"bold"
    }
})
