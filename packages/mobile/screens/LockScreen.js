import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import React from "react";

export default function LockScreen() {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <Textbox placeholder="Username" />
      <Textbox placeholder="Password" />
      <Button
        title="Forgot Password?"
        onPress={ForgotPasswordButtonHandler}
      />

      <Button
        title="Login"
        onPress={LoginButtonHandler}
      />

      <Text>
        or
      </Text>

      <Button
        title="Login with google"
        onPress={GoogleSSOButtonHandler}
      />
    </View>
  );
}

const Textbox = ({string: placeholder}) => {
  const [text, onChangeText] = React.useState('');

    return (
      <SafeAreaView>
        <TextInput
          value={text}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </SafeAreaView>
    );
}

const ForgotPasswordButtonHandler = () => {}
const LoginButtonHandler = () => {}
const GoogleSSOButtonHandler = () => {}
