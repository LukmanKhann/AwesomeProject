import React from "react";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(){
   console.log('testing')

  return (
    <SafeAreaView >
      <Text>
      <Text style={{color : 'red'}}>Hii, Welcome to React native</Text> <Text style={{color : 'red'}}>Hii, Welcome to React native</Text>
      </Text>
      <View style={{backgroundColor : 'blue',height : 100,width : 400, display : 'flex' , justifyContent : 'center', alignItems : 'flex-end'}} >
        <Text style={{color : 'red'}}>Hii, Welcome to React native</Text>
      </View>
      <Button  title="Press Me" color='green' ></Button>
    </SafeAreaView>
  );
}

export default App;
