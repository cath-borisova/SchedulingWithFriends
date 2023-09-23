import { ScrollView, Text, View } from "react-native";
import React from "react";
import { SWFStyleSheet } from "./StyleSheets";

export default function SettingsScreen() {
  return (
    //, justifyContent: "flex-start", alignItems: "center"
    <View>
      <View style={{flex: 0.1}}>

      </View>

    <ScrollView style={{ flex: 1}}>

        <Text>
          Friends
        </Text>
        <Text style={SWFStyleSheet.asd}>
          ads {"\n"}
          ads {"\n"}
          ads {"\n"}
          ads {"\n"}
          ads {"\n"}
          ads {"\n"}
          ads {"\n"}
          ads {"\n"}
          ads {"\n"}
          ads {"\n"}
          ads {"\n"}
          ads {"\n"}ads {"\n"}
          ads {"\n"}
          ads {"\n"}ads {"\n"}ads {"\n"}ads {"\n"}ads {"\n"}ads {"\n"}ads {"\n"}ads {"\n"}

          asd
        </Text>
      <Text>
        Hello
      </Text>
    </ScrollView>
    </View>
  );
}
