import React, { useEffect, useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import useUser from "../api/useUser";
import { normalizeWidth, normalizeHeight } from "./Responsive";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function HomeScreen() {
  const userId = "oSyb1pRJCsCCTjf3pB6D";
  const { user, events, friends} = useUser(userId);
  const {displayFriends, setDisplayFriends} = useState(friends);
  const [search, setSearch] = useState('');

export default function HomeScreen() {
  const userId = "oSyb1pRJCsCCTjf3pB6D";
  // const [user, setUser] = useState(null);

  const { user, events, friends } = useUser(userId);

  const addFriend = () => {
    console.log("here");
  }
  const deleteFriend = (friendName) => {
    Alert.alert(
      'Remove Friend',
      'Are you sure you want to remove ' + friendName + "?",
      [
        { text: 'Yes', onPress: () => console.log('OK Pressed') },
        { text: 'No', onPress: () => console.log('No Pressed') },
      ]
    )
  }
  const displayFriendRows = (typeOfFriends) => {
    let rows = [];
    friends.forEach((friend) => {

      const friendId = friend.id; // Friend's ID
      const friendData = friend.data; // Friend's data
      if(search === '' || search === friend.data.name.substring(0, search.length)) {
        const searchFriends = () => {

        }
        // let eventTogether = false;
        // for(let i = 0; i < events.length; i++){
        //   console.log("events[i] ", events[i]);
        //   for(let j = 0; j < events[i].friendsInvited.length; j++){
        //     console.log("events[i].friendsInvited ", events[i].friendsInvited);
        //     if (events[i].friendsInvited[j] == friendId){
        //       eventTogether = true;
        //       break;
        //     }
        //     if(eventTogether){
        //       break;
        //     }
        //   }
        // }

        //   if(eventTogether){
        //     rows.push(
        //       <View style={styles.row}>
        //         <View style={styles.person}>
        //           <Image
        //             style={styles.pfp}
        //             source={{
        //               uri: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        //             }}/>
        //           <Text style={styles.friendText} numberOfLines={1}>{friendData.name}</Text>
        //         </View>
        //         <Icon style={styles.icon} size={30} name="calendar" />
        //       </View>
        //     );
        // } else {
        rows.push(
          <View style={styles.row}>
            <View style={styles.person}>
              <Image
                style={styles.pfp}
                source={{
                  uri: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
                }} />
              <Text style={styles.friendText} numberOfLines={1}>{friendData.name}</Text>
            </View>
            <Icon style={styles.icon} size={30} name="calendar" />
            <Pressable style={styles.pressX} onPress={() => deleteFriend(friendData.name)}>
              <Text style={styles.delete}>X</Text>
            </Pressable>
          </View>
        );
      }
    });
    return rows;
  }
  return (
    <View
      style={styles.container}
    >
      <View syle={styles.list}>
        <Text style={styles.title}>FRIENDS</Text>
        <View style={styles.row}>
        <View style={styles.searchOval}>
          <Icon style=
                  {{marginRight: 10, marginLeft: 5}} size={normalizeHeight(34)} name="magnify" />
          <TextInput
            onChangeText={setSearch}
            value={search}
            editable
            maxLength={40}
            placeholder="Search"
            style={{fontSize: normalizeHeight(24)}}
          />
        </View>
          <Pressable style=
                       {{flex: 1, alignItems: 'center', alignContent:'center', margin: 10, marginLeft: 0}}
                     onPress={() => addFriend()}>
          <Icon style={styles.icon} size={normalizeHeight(50)} name="account-plus" />
          </Pressable>
        </View>

        {displayFriendRows(displayFriends)}
      </View>

      <Text>Friends</Text>
      {friends.map((friend) => (
        <Text key={friend.id}>{friend.name}</Text>
      ))}
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
    color: '#161826',
  },
  row : {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignContent: 'flex-end',
    margin: 10,
  },
  list : {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: "flex-start",
    backgroundColor: '#000',
  },
  pfp : {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 20,
  },
  person : {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    // alignContent: 'flex-start',
    flex: 6,
  },
  friendText : {
    fontSize: normalizeHeight(30),
    flex: 1,
  },
  icon : {
    color: '#161826',
    marginLeft: 20,
    flex: 1,
  },
  delete : {
    fontSize: normalizeHeight(40),
    color: '#970000',
  },
  pressX : {
    flex: 1,
    marginLeft: 10
  },
  searchIcon : {
    flex: 1,
    alignSelf: 'flex-start',
  },
  searchOval : {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignContent: 'flex-end',
    marginTop : 10,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#161826',
    padding: 5,
    flex: 3
  }
});
