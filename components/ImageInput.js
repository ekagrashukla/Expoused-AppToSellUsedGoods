import React,{useEffect} from 'react'
import { StyleSheet, Alert,Image, View, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

export default function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {requestPermission()}, [])

    const requestPermission = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!result.granted)
          alert("Need Gallery Permission")
    }
    
    const handlePress = () => {
        if(!imageUri) selectImage();
        else Alert.alert('Delete','Are you sure you want to delete this image?',[
            { text:'Yes', onPress: () => onChangeImage(null) },
            { text: "No" }
        ])
    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality:0.5
          });
          if(!result.cancelled)
            onChangeImage(result.uri)
        } catch (error) {
          console.log("Error reading an image ",error)
        }
    }
    
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!imageUri && (
                <MaterialCommunityIcons color={"#6e6969"} name="camera" size={40}/> 
            )}
            {
                imageUri && <Image source={{ uri: imageUri}} style={styles.image}/>
            }
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f8f4f4",
        borderRadius:15,
        justifyContent:'center',
        alignItems:"center",
        height:100,
        width:100,
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:"100%",
    }
})
