import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import MessageContainer from "../../components/ChatComps/MessageContainer";

import InputTextComp from "../../components/ChatComps/InputTextComp";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
const BG = require("../../assets/images/BG.png");


const ChatScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, "ChatScreen">

> = ({ route }) => {

  const { messages } = route.params;
  const [inputText, setInputText] = useState<string>("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ImageBackground resizeMode="cover" style={styles.image} source={BG}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <MessageContainer messageItem={item} />;
          }}
        />
        <View style={{ margin: 5, justifyContent: "flex-end", height: "10%" }}>
          <InputTextComp
            text={inputText}
            setText={setInputText}
            sendMessage={() => {}}
            onMicrophoneIconPress={() => {}}
            onSmileIconPress={() => {}}
            onAttachmentIconPress={() => {}}
            onCameraIconPress={() => {
              return { image: null };
            }}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
