import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const FancyCard = () => {
    return (
        <View>
            <Text style = {styles.headingText} >Trending places</Text>
            <View style = {styles.headingText} >
                <View style = {[styles.card, styles.cardElevated]} >
                <Image
                source={{
                    uri : 'https://images.unsplash.com/photo-1704883800515-2e95381324f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }}
                style = {styles.cardImage}
                />
                <View style = {styles.cardBody} >
                    <Text style = {styles.cardTitle} >Cafe</Text>
                    <Text style = {styles.cardLabel}>Hydrabad</Text>
                    <Text style = {styles.cardDescription}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore necessitatibus placeat cupiditate. Voluptates provident perferendis aut repudiandae facilis accusantium unde earum. Itaque, hic impedit dolores sunt ipsum atque quo totam.
                    </Text>
                    <Text style = {styles.cardFooter}>30 mins away</Text>
                </View>

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
        container : {},
        card : {
            width : 350,
            height : 390,
            marginHorizontal : 10,
            marginVertical : 8,
            borderRadius : 6,
        },
        cardElevated : {
            backgroundColor : '#FFFFFF',
            elevation : 5,
            shadowOffset : {
                height : 1,
                width : 1,
            }

        },
        cardImage : {
            height : 180,
            marginBottom : 8,
            borderTopLeftRadius : 7,
            borderTopRightRadius : 7,


        },
        cardBody : {
            flex : 1,
            flexGrow : 1,
            paddingHorizontal : 12,
        },
        cardTitle : {
            color : '#000000',
            fontSize : 22,
            fontWeight : 'bold',
            marginBottom : 7,
        },
        cardLabel : {
            color : '#000000',
            fontSize : 18,
            marginBottom : 10,
            
        },
        cardDescription : {
            color : '#758283',
            fontSize : 14,
            marginBottom : 15,
        
        },
        cardFooter : {
            color : '#000000'
        },
        
})

export default FancyCard;
