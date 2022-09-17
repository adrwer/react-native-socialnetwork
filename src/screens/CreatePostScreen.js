import { View, Text, StyleSheet, Image, TextInput, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons"
import * as ImagePicker from 'expo-image-picker';

const user = {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Vadim Savin",
  };

const CreatePostScreen = () => {
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    // const insets = useSafeAreaInsets();

    const onSubmit = () => {
        console.warn("On Press")
        setDescription("")
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
        
          console.log(result);
        
          if (!result.cancelled) {
            setImage(result.uri);
          }
    }

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.container, { marginBottom: 10 }]}
        contentContainerStyle={{ flex: 1 }}
        // keyboardVerticalOffset={150}
>
        <View style={styles.header}>
            <Image source={{uri: user.image}}  style={styles.profileImage} />
            <Text style={styles.name}>{user.name}</Text>
            <Entypo
                onPress={pickImage}
                name="images"
                size={24}
                color="limegreen"
                style={styles.icon}
                />
        </View>

        <TextInput 
            value={description} 
            onChangeText={setDescription}
            placeholder='What is on your mind?' 
            multiline  />
        <Button title="Post" onPress={onSubmit} />

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 10,
        paddingTop: 30,
        backgroundColor: "#fff"
    },
    header: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginRight: 10
    },
    image: {
        width: "100%",
        aspectRatio: 4 / 3,
    },
    name: {
        fontWeight: "500"
    },
    buttonContainer: {
        marginTop: "auto"
    },
    icon: {
        marginLeft: "auto"
    }

})

export default CreatePostScreen