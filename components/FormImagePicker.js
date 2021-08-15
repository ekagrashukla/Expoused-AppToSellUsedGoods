import { useFormikContext } from 'formik'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ErrorMessage from './ErrorMessage'
import ImageInputList from './ImageInputList'

export default function FormImagePicker({name}) {
    const { errors, setFieldValue, touched, values} = useFormikContext
    const imageUris = values[name]
    const handleAdd = uri => {
        setFieldValue(name,[...imageUris,uri])
    }
    
    const handleRemove = uri => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri))
    }

    return (
        <>
            <ImageInputList imageUris = {imageUris}
                imageUris = {imageUris}
                onAddImage = {handleAdd}
                onRemoveImage = {handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

const styles = StyleSheet.create({})
