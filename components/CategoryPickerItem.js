import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from './AppText'
import Icon from './Icon'

export default function CategoryPickerItem({item, onPress}) {
    return(
        <View style={styles.container}>
             <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:15,
        alignItems:"center",
        width:"33%"
    },
    label:{
        marginTop:7,
        textAlign:"center"
    }
})
