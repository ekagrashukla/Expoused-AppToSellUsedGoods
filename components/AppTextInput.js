import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Screen from './Screen'

export default function AppTextInput({icon,width='100%',...otherProps}) {
    return (
        <Screen>
            <View style={[styles.container, {width}]}>
                {icon && <MaterialCommunityIcons 
                name={icon} 
                size={20}
                color="#6e6969"
                style={styles.icon}
                />}
                <TextInput style={styles.textInput} {...otherProps}/>
            </View>
            </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f8f4f4",
        borderRadius:25,
        flexDirection: "row",
        padding:15,
        marginVertical:10,
    },
    textInput:{
        fontSize:18,
        fontFamily:  Platform.OS === "android" ? "Roboto" : "Avenir",
        color: "#0c0c0c",
    },
    icon:{
        marginRight:10
    }
})
