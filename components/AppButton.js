import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function AppButton(props) {
    return (
        <TouchableOpacity style = {[styles.button, {backgroundColor: props.color}]} onPress = {props.onPress}>
            <Text style = {styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:"tomato",
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical:10,
    },
    text: {
        color: "white",
        fontSize:18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})
