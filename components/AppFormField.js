import React from 'react'
import { useFormikContext } from 'formik';
import { StyleSheet } from 'react-native'

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({name,width, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
    
    return (
        <>
        <AppTextInput
            {...otherProps}
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            width={width}
        />
        <ErrorMessage 
            error={errors[name]} 
            visible={touched[name]}
        />

        </>
    )
}

const styles = StyleSheet.create({})
