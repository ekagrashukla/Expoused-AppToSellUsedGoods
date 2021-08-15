import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Screen from './Screen'
import * as Yup from 'yup'
import AppFormField from './AppFormField'
import SubmitButton from './SubmitButton'
import AppForm from './AppForm'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default function LoginScreen() {
    return (
        <>
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../assets/expoused_logo.png')}
            />
            <AppForm
                initialValues={{email:'', password:''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                    <AppFormField
                        icon="email"
                        name="email"
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="password"
                        secureTextEntry={true}
                    />
                    
                    <SubmitButton title="Login"/>
            </AppForm>
        </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:200,
        height:140,
        alignSelf:'center',
        marginTop:20,
        marginBottom:20
    },
    container:{
       padding:10 
    }
})
