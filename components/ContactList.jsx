import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ContactList = () => {
    const contacts = [
        {
          uid: 1,
          name: 'Alice Johnson',
          status: 'Active',
          imageUrl: 'https://placekitten.com/200/300', 
        },
        {
          uid: 2,
          name: 'Bob Smith',
          status: 'Inactive',
          imageUrl: 'https://placekitten.com/201/301', 
        },
        {
          uid: 3,
          name: 'Charlie Brown',
          status: 'Active',
          imageUrl: 'https://placekitten.com/202/302',
        },
        {
          uid: 4,
          name: 'David Miller',
          status: 'Active',
          imageUrl: 'https://placekitten.com/203/303', 
        },
        {
          uid: 5,
          name: 'Eva Davis',
          status: 'Inactive',
          imageUrl: 'https://placekitten.com/204/304', // Placeholder kitten image
        },
      ];
    return (
        <View>
            <Text style = {styles.headingText} >Contact List</Text>
            <ScrollView
            style = {styles.container}
            scrollEnabled = {false}
            >
              {contacts.map(({uid, name, status, imageUrl}) => (
                <View key={uid} style = {styles.userCard} >
                     <Image 
                     source={{
                        uri : imageUrl
                     }}
                     style = {styles.userImage}
                     />
                    <View>
                    <Text style = {styles.userName} >{name}</Text>
                     <Text style = {styles.userStatus} >{status}</Text>
                    </View>
          
                </View>
               
              ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 20,
        },
        container : {
            paddingHorizontal : 18,
        },
        userCard : {
            flex : 1,
            flexDirection : 'row',
            alignItems : 'center',
            backgroundColor : '#758283',
            marginBottom : 4,
            padding : 8,
            borderRadius : 10

        },
        userImage : {
            height : 50,
            width : 50,
            borderRadius : 50,
            marginRight : 15,
        },
        userName : {
    fontSize : 16,
    fontWeight : '600',
    color : '#fff'
        },
        userStatus : {
            fontSize : 13,

        },


})

export default ContactList;
