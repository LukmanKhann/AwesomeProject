import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FlatCard = () => {
  return (
    <View>
      <Text style = {styles.headingText} >FlatCard</Text>
      <View style = {styles.container} >
        <View style = {[styles.card, styles.cardOne]} >
            <Text>Red</Text>
        </View>
        <View style = {[styles.card, styles.cardTwo]} >
            <Text>Purple</Text>
        </View>
        <View style = {[styles.card, styles.cardThree]} >
            <Text>Pink</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
    fontSize : 24,
    fontWeight : 'bold',
    paddingHorizontal : 20,
    },
    container : {
        flex : 1,
        flexDirection : 'row',
        padding : 8
    },
    card : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        height : 100,
        width : 100,
        borderRadius : 4,
        margin : 8,
    },
    cardOne : {
        backgroundColor : '#EF5354'
    },
    cardTwo : {
        backgroundColor : '#652cde'
    },
    cardThree : {
        backgroundColor : '#f002e4'
    },
})

export default FlatCard