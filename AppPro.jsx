import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import FlatCard from "./components/FlatCard";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const AppPro = () => {
  return (
    <SafeAreaView>
        <ScrollView>
      <FlatCard/>
      <ElevatedCards/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AppPro