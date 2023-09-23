import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import { SWFStyleSheet } from "./StyleSheets";

export default function SettingsScreen() {
  return (
    //, justifyContent: "flex-start", alignItems: "center"
    <View style={{justifyContent: "flex-start"}}>

    <View style={{height: 20}}>
    </View>
    <SafeAreaView>
    <FlatList data={DATA} renderItem={friend} keyExtractor={extract}>
    </FlatList>
    </SafeAreaView>
    </View>
  );
}

const friend = (obj) => (
  <View>
    <Text>
      d
      {obj}
    </Text>
  </View>
);

const extract = (obj, num) => {
  return obj.title
}


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Friend',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Friend',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Friend',
  },
];
