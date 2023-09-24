import React, { useEffect, useState } from "react";
import { Alert, Image, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { normalizeWidth, normalizeHeight } from "./Responsive";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export default function HomeScreen() {
  const userId = "QBrgmKh2gnsjcUMt5c5f";
  let personA = false;
  let notifications = [];

  if (personA){
    notifications = ['Max Brooksen has invited you to hangout.', 'Gregor Wuend has accepted your invite to hangout', 'Sam Browning has sent you a friend request.',
    'Jessica Peterson has accepted your friend request.', 'Katya Borisova has invited you to hangout.',
      'Katya Borisova has accepted your invite to hangout!', 'Anna Bamtise has invited you to hangout.',
      'Gregor Wuend has invited you to hangout.']
  }

  const [displayN, setDisplay] = useState(notifications);
  const [clicked, setClick] = useState(false);
  const [accept, setAccept] = useState(false);
  const acceptFriend = () =>
  {
    setAccept(true);
    setClick(true);
  }
  const addNotification = () => {
    if (personA) {
      setDisplay(['Daniel Dowdle has accepted your friend request.', 'Max Brooksen has invited you to hangout.', 'Gregor Wuend has accepted your invite to hangout', 'Sam Browning has sent you a friend request.',
        'Jessica Peterson has accepted your friend request.', 'Katya Borisova has invited you to hangout.',
        'Katya Borisova has accepted your invite to hangout!', 'Anna Bamtise has invited you to hangout.',
        'Gregor Wuend has invited you to hangout.'])
    } else {
      setDisplay(['Julia Truong has sent you a friend request.']);
    }
    setClick(true);
  }
  const displayNotifications = () => {
    let rows = []

        for(let i = 0; i < displayN.length; i++) {
          if (clicked && i === 0) {
            if (!personA) {
                  if(accept){
                    rows.push(
                      <Pressable onPress={() => setClick(false)}>
                        <View key={i} style={styles.list2}>
                          <View style={styles.row2}>
                            <Text style={styles.notiftext2}>{displayN[i]}</Text>
                            <Pressable><Icon size={normalizeHeight(50)} name="account-check" /></Pressable>
                          </View>
                          <View style={styles.horizontalLine} />
                        </View>
                      </Pressable>);
                  } else {
                    rows.push(
                      <Pressable onPress={() => setClick(false)}>
                        <View key={i} style={styles.list2}>
                          <View style={styles.row2}>
                            <Text style={styles.notiftext2}>{displayN[i]}</Text>
                            <Pressable onPress={() => acceptFriend()}><Icon size={normalizeHeight(50)}
                                                                 name="account-outline" /></Pressable>
                          </View>
                          <View style={styles.horizontalLine} />
                        </View>
                      </Pressable>);
                  }
            } else {
              rows.push(
                <Pressable key={i}  onPress={() => setClick(false)}>
                  <View style={styles.list2}>
                  <Text style={styles.notiftext}>{displayN[i]}</Text>
                  <View style={styles.horizontalLine} />
                </View>
                </Pressable>
              );
            }
          } else {
            rows.push(
              <View key={i} style={styles.list}>
                <Text style={styles.notiftext}>{displayN[i]}</Text>
                <View style={styles.horizontalLine} />
              </View>
            );
          }
          return rows;
        }
        }
  return (
    <View style={styles.container}>
      <View syle={styles.list}>
        <Pressable onPress={() => {addNotification()}}><Text style={styles.title}>NOTIFICATIONS</Text></Pressable>
        <View style={styles.horizontalLine} />
        {displayNotifications()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 0,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: normalizeHeight(60),
    fontFamily: 'jetbrains-mono',
    alignSelf: 'center',
    margin: 10,
    marginBottom: 20,
    color: '#161826',
  },
  row : {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignContent: 'flex-end',
    margin: 30,
    padding: 30,
  },
  row2 : {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  list : {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: "flex-start",
    backgroundColor: '#FFF',
  },
  list2 : {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: "flex-start",
    backgroundColor: '#CEECFA',
  },
  icon : {
    color: '#161826',
    marginRight: 20,
    flex: 1,

  },
  notiftext : {
    fontSize: normalizeHeight(20),
    marginTop: 15,
    marginBottom:15,
    marginLeft: 10,
  },
  notiftext2 : {
    fontSize: normalizeHeight(20),
    marginTop: 15,
    marginBottom:15,
    marginLeft: 10,
    alignSelf: 'flex-start',
    flex: 1,
  },
  horizontalLine: {
    width: '100%', // Adjust the width as needed
    height: 2, // Adjust the height as needed
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Line color
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
      android: {
        elevation: 2, // Elevation for Android shadow
      },
    }),
  },
});
