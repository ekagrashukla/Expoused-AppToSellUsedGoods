import React,{useState} from 'react'
import { Modal, StyleSheet, Text, TextInput, Button,TouchableWithoutFeedback, View, FlatList } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Screen from './Screen'
import AppText from './AppText'
import PickerItem from './PickerItem'

export default function AppPicker({
    icon,
    width='100%',
    onSelectItem,
    selectedItem,
    items,
    placeholder,
    numberOfColumns = 1,
    PickerItemComponent = PickerItem,
    ...otherProps}) {
    
    const [modalVisible, setmodalVisible] = useState(false)
    
    return (
        <>
        <Screen>
        <TouchableWithoutFeedback onPress={()=>{setmodalVisible(true)}}>
            <View style={[styles.container,{width}]}>
                {icon && (<MaterialCommunityIcons 
                name={icon} 
                size={20}
                color="#6e6969"
                style={styles.icon}
                />)}
                <AppText style={styles.text}>
                    {selectedItem ? selectedItem.label : placeholder}
                </AppText>
                <MaterialCommunityIcons 
                style={styles.chevron}
                name="chevron-down" 
                size={20}
                color="#6e6969"
                />
            </View>
            </TouchableWithoutFeedback>
        </Screen>
        
        <Modal visible={modalVisible} animationType="slide">
            <Button title="Close" onPress={() => setmodalVisible(false)}/>
            <FlatList
                data={items}
                numColumns={numberOfColumns}
                keyExtractor={(item) => item.value.toString()}
                renderItem={({item})=> (
                    <PickerItemComponent
                        item={item} 
                        label={item.label}
                        onPress={() => {
                            setmodalVisible(false);
                            onSelectItem(item)
                        }}
                        />)}
            />
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f8f4f4",
        borderRadius:25,
        flexDirection: "row",
        padding:15,
        marginVertical:10
    },
    text:{
        flex:1,
        fontSize:16
    },
    textInput:{
        fontSize:18,
        fontFamily:  Platform.OS === "android" ? "Roboto" : "Avenir",
        color: "#0c0c0c"
    },
    icon:{
        marginRight:10
    },
    chevron:{
        marginRight:0
    }
})
