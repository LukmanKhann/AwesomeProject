import React from "react";
import { height } from "@mui/system";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ElevatedCards = () => {
    return (
        <View>
            <Text style ={styles.headingText} >Elevated Cards</Text>
            <ScrollView horizontal = {true} style = {styles.container} >
                <View style = {[styles.card , styles.cardElevated]} >
                    <Text>1</Text>
                </View>
                <View style = {[styles.card , styles.cardElevated]} >
                    <Text>2</Text>
                </View>
                <View style = {[styles.card , styles.cardElevated]}  >
                    <Text>3</Text>
                </View>
                <View style = {[styles.card , styles.cardElevated]} >
                    <Text>4</Text>
                </View>
                <View style = {[styles.card , styles.cardElevated]} >
                    <Text>5</Text>
                </View>
                <View style = {[styles.card , styles.cardElevated]} >
                    <Text>6</Text>
                </View>
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
            padding : 8,
        },
        card : {
            flex : 1,
            alignItems : 'center',
            justifyContent : 'center',
            width : 100,
            height : 100,
            borderRadius : 4,
            margin : 8,
            
        },
        cardElevated : {
            backgroundColor : '#CAD5E2',  
            elevation : 4,
            shadowOffset : {
                height : 3,
                width : 2
            },
            shadowColor : 'red',
            shadowOpacity : 1,
            shadowRadius : 4,
        }
})

export default ElevatedCards;
