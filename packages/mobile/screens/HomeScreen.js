import React, { useEffect, useState } from "react";
import {styles} from "../styles";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Pressable,
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";
import { StyleSheet } from "react-native";

import { normalizeWidth, normalizeHeight } from "./Responsive";

import AgendaScreen from "./AgendaScreen";


export default function HomeScreen() {
  const navigation = useNavigation();

  const handleSignInPress = () => {
    navigation.navigate("Agenda"); // Navigate to the "Agenda" screen
  };


  const userId = "oSyb1pRJCsCCTjf3pB6D";


  const [showAgenda, setShowAgenda] = useState(false);


  // console.log("user", user);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={require("./Frame.png")}
        style={styles.background}
      >
        <View
          style={{
            marginBottom: normalizeHeight(300), // 100
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Login</Text>
          <View>
            <TextInput style={styles.input} placeholder="Username" />
            <View
              style={{
                height: 10,
              }}
            ></View>
            <TextInput style={styles.input} placeholder="Password" />
          </View>
          <View
            style={{
              height: 5,
            }}
          ></View>

          <Pressable onPress={() => navigation.navigate('AgendaScreen')}>
            {({ pressed }) => (
              <Text style={[styles.button, pressed && styles.buttonPressed]}>
                Forgot Password
              </Text>
            )}
          </Pressable>
          <View
            style={{
              height: 10,
            }}
          ></View>

          <Text style={styles.text}>Or</Text>

          <Pressable onPress={handleSignInPress}>
            {({ pressed }) => (
              <Text style={[styles.google, pressed && styles.buttonPressed]}>
                Sign in with Google
              </Text>
            )}
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
