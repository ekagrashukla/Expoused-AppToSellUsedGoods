import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AccountScreen from './components/AccountScreen';

import AppButton from './components/AppButton';
import AppPicker from './components/AppPicker';
import AppText from './components/AppText';
import AppTextInput from './components/AppTextInput';
import Card from './components/Card';
import Icon from './components/Icon';
import ImageInput from './components/ImageInput';
import ImageInputList from './components/ImageInputList';
import ListingDetailsScreen from './components/ListingDetailsScreen';
import ListingEditScreen from './components/ListingEditScreen';
import ListingsScreen from './components/ListingsScreen';
import ListItem from './components/ListItem';
import LoginScreen from './components/LoginScreen';
import MessagesScreen from './components/MessagesScreen';
import Screen from './components/Screen';
import ViewImageScreen from './components/ViewImageScreen';
import WelcomeScreen from './components/WelcomeScreen';
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  const [imageUris, setimageUris] = useState([]);
  
  const handleAdd = uri => {
    setimageUris([...imageUris,uri])
  }

  const handleRemove = uri => {
    setimageUris(imageUris.filter(imageUri => imageUri !== uri))
  }

  return (
    <>
    {/* <View style={styles.container}>
    <AppButton/>
    <AppText>React is Cool</AppText>
    </View> */}

    {/* <WelcomeScreen/> */}

    {/* <MessagesScreen/> */}

    {/* <ViewImageScreen/> */}

    {/* <ListingDetailsScreen/> */}

    {/* <Screen>
    <ListItem 
      title="My title" 
      subTitle="My subtitle" 
      ImageComponent={<Icon name="email"/>}/>
    </Screen> */}

    {/* <AccountScreen/> */}

    {/* <View style={{
      backgroundColor:"#f8f4f4",
      padding:20,
      paddingTop:100
    }}>
      <Card
        title="Red Jacket for sale"
        subTitle="$100"
        image={require("./assets/jacket.jpg")}
      />
    </View> */}

    {/* <ListingsScreen/> */}


    {/* <AppPicker 
      items={categories} 
      placeholder="Category" 
      icon="apps"
      selectedItem={category}
      onSelectItem={item => setcategory(item)}
    /> */}


    {/* <AppTextInput placeholder="Email" icon="email"/> */}
    
    {/* <LoginScreen/> */}
    {/* <ListingEditScreen/> */}

    <Screen>
    <ImageInputList 
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    />
    </Screen> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
