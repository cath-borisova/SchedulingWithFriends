// Purpose: User component for mobile app.
import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";

export default function useUser(userId) {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState(null);

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

  // Event listener for user events
  useEffect(() => {
    const subscriber = firestore()
      .collection("events")
      .where("friendsInvited", "array-contains", userId)
      .onSnapshot((querySnapshot) => {
        const events = [];

        querySnapshot.forEach((documentSnapshot) => {
          events.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setEvents(events);
        console.log("hi");
        console.log("events", events);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [userId]);

  // Returns user and the events they are invited to
  return { user, events };
}
