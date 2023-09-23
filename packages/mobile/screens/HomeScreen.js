import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";

import User from "../components/User";

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
      <Text>Home</Text>
      <User userId={userId} setUser={setUser} />
      {user && <Text>{user.name}</Text>}
      {user && <Text>{user.email}</Text>}
      {user && <Text>{user.events}</Text>}
    </View>
  );
}
