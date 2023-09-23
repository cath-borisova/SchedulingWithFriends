import { Button, ImageBackground, SafeAreaView, Text, TextInput, View } from "react-native";
import React from "react";

const image = {uri: 'https://media.discordapp.net/attachments/1148331832983695370/1155279841109741648/background.png?width=2050&height=1022'};

export default function LockScreen() {

  let vision = true;
  const [Username, onChangeUsername] = React.useState('');
  const [Password, onChangePassword] = React.useState('');

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <ImageBackground source={image} resizeMode="cover"/>

      <Text>Login</Text>
      <SafeAreaView>
        <TextInput
          value={Username}
          placeholder="Pick a Username!"
          onChangeText={onChangeUsername}
          editable={true}
          maxLength={30}

        />

        <TextInput
          value={Password}
          placeholder="Pick a Password!"
          onChangeText={onChangePassword}
          editable={true}
          maxLength={30}
          secureTextEntry={vision}
          />

      <Button
        title="Forgot Password?"
        onPress={ForgotPasswordButtonHandler}
      />

      <Button
        title="Login"
        onPress={LoginButtonHandler(Username, Password)}
      />

      <Text>
        or
      </Text>

      <Button
        title="Login with google"
        onPress={GoogleSSOButtonHandler}
      />
      </SafeAreaView>
    </View>
  );
}

/*
const Textbox = (placeholder) => {
  const [text, onChangeText] = React.useState('');

    return (
      <SafeAreaView>
        <TextInput
          value={text}
          placeholder=placeholder
          onChangeText={onChangeText}
        />
      </SafeAreaView>
    );
}


 */
const ForgotPasswordButtonHandler = () => {}
const LoginButtonHandler = (username, password) => {}
const GoogleSSOButtonHandler = () => {}
