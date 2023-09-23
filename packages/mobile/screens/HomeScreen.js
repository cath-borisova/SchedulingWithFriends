import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";

const usersCollection = firestore().collection("Users");

export default function HomeScreen() {
  const userId = "oSyb1pRJCsCCTjf3pB6D";

  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = firestore()
      .collection("users")
      .doc(userId)
      .onSnapshot((documentSnapshot) => {
        setUser(documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [userId]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      {user && <Text>{user.name}</Text>}
    </View>
  );
}
