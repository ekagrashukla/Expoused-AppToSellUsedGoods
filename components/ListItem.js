import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import AppText from './AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Swipeable from 'react-native-gesture-handler/Swipeable';

import Icon from './Icon'

export default function ListItem({title,subTitle,image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor = "#f8f4f4"
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image}
                    source={image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={25} color="#6e6969"/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        padding:15,
        backgroundColor:"#fff",
        alignItems:"center"
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
    },
    detailsContainer:{
        flex:1,
        marginLeft:10,
        justifyContent:"center"
    },
    title:{
        color:"black",
        fontWeight:"bold"
    },
    subTitle:{
        color:"#6e6969"
    }
})
