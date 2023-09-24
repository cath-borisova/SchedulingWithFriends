import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";

const usersCollection = firestore().collection("Users");

export default function HomeScreen() {
  const userId = "oSyb1pRJCsCCTjf3pB6D";
  const [user, setUser] = useState(null);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Friends</Text>
    </View>
  );
}
