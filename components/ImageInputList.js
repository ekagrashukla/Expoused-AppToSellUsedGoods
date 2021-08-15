import React,{useRef} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import ImageInput from './ImageInput'
export default function ImageInputList({imageUris = [], onRemoveImage, onAddImage}) {
    
    const scrollView = useRef();
    
    
    return (
        <View>
        <ScrollView 
            ref={scrollView}
            horizontal={true} 
        >
        <View style={styles.container}>
            {imageUris.map((uri) => (
                <View key={uri} style={styles.image}>
                <ImageInput 
                    imageUri={uri} 
                    key={uri} 
                    onChangeImage={() => onRemoveImage(uri)}
                />
                </View>
            ))}
            <ImageInput onChangeImage={uri => onAddImage(uri)}/>
        </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    image: {
        marginRight:10
    }
})
