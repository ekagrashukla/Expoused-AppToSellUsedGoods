import React from 'react'
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import AppButton from './AppButton'

export default function WelcomeScreen() {
    return (
        <ImageBackground 
        blurRadius={4}
        style = {styles.background}
        source = {require('../assets/background.jpg')}>
        <View style={styles.logoContainer}>
        <Image 
        source = {require('../assets/expoused_logo.png')}
        style = {styles.logo}></Image>
        <Text style={styles.tagline}> An Expo for used stuff </Text>
        </View>
        <View style = {styles.buttonsContainer}>
        <AppButton  title="Login" color="tomato" onPress = {() => console.log("Pressed")}/>
        <AppButton title="Register" color="dodgerblue"/>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:"flex-end",
        alignItems: "center",
    },
    logo:{
        height:170,
        width:200
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    buttonsContainer:{
        padding: 20,
        width:'100%',
    },
    tagline:{
        fontSize:20,
        paddingVertical:20,
        fontWeight:"600",
    }
})
