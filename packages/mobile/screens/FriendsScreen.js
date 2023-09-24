import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import useUser from "../api/useUser";

export default function HomeScreen() {
  const userId = "oSyb1pRJCsCCTjf3pB6D";
  // const [user, setUser] = useState(null);

  const { user, events, friends } = useUser(userId);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Friends</Text>
      {friends.map((friend) => (
        <Text key={friend.id}>{friend.name}</Text>
      ))}
    </View>
  );
}
