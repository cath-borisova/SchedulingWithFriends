// Purpose: User component for mobile app.
import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";

export default function User({ userId, setUser }) {
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
}
