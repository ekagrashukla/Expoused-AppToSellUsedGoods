import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export default function AppText({children,style,...otherProps}) {
    return (
        <View>
            <Text style={[styles.text,style]} {...otherProps}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",

    }
})
