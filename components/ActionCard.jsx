import React from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ActionCard = () => {
    const openWebsite =(websiteLink)=>{
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style = {styles.headingText} >Blog card</Text>
            <View style = {[styles.card, styles.elevatedCard]} >
               <View style = {styles.headingContainer} >
               <Text style = {styles.headerText} >
                Horizon moon to the north east side           
               </Text>
               </View>
               <Image
               source={{
                uri : 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
               }}
               style = {styles.cardImage}
               />
               <View style = {styles.bodyContainer} >
                 <Text numberOfLines={3} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quasi voluptatem laudantium. Quos fugiat amet ut possimus a fugit temporibus. Dolores animi numquam voluptas optio error repudiandae, voluptates illo aperiam!</Text>
               </View>
               <View style = {styles.footerContainer} >
                  <TouchableOpacity
                  onPress={()=> openWebsite('https://unsplash.com/s/photos/moon')}
                  >
                    <Text style = {styles.socialLinks} >Read More</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=> openWebsite('https://unsplash.com/s/photos/moon')}
                  >
                    <Text style = {styles.socialLinks} >Redirect</Text>
                  </TouchableOpacity>
               </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 20,
       
        },
        card : {
          height : 460,
          width : 340,
          borderRadius : 6,
          marginVertical : 12,
          marginHorizontal : 26
        },
        elevatedCard : {
          backgroundColor : '#758283',
          elevation : 4,
          shadowOffset :{
            height : 1,
            width : 1,
          },
          shadowColor : '#ccc',
          shadowOpacity : 0.5,
          borderRadius : 8,
          
        },
        headingContainer : {
         height : 60,
         flexDirection : 'row',
         justifyContent : 'center',
         alignItems : 'center'
        },
        headerText : {
          fontSize : 16,
          fontWeight : '600'
        },
        cardImage : {
            height : 250,
          
        },
        bodyContainer : {
          padding : 10,
        },
        footerContainer : {
          padding : 8,
          flexDirection : 'row',
          alignItems : 'center',
          justifyContent : 'space-evenly'
        },
        socialLinks : {
          fontSize : 16,
          color : '#000000',
          backgroundColor : '#ffffff',
          paddingHorizontal : 14,
          paddingVertical : 6,
          borderRadius : 6,
        }

})

export default ActionCard;
