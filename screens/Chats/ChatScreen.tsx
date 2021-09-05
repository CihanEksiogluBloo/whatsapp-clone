import React, { useState } from "react";
import { FlatList, StyleSheet, View, ImageBackground, KeyboardAvoidingView,Platform } from "react-native";
import MessageContainer from "../../components/ChatComps/MessageContainer";
import { User, Message } from "../../types";
import InputTextComp from "../../components/ChatComps/InputTextComp";
import BG from "../../assets/images/BG.png";
import { useHeaderHeight } from '@react-navigation/elements';

export type ChatScreenProps = {
  route: { params: { user: User; messages: Message[] } };
};

const ChatScreen: React.FC<ChatScreenProps> = ({ route }) => {
  const { messages } = route.params;
  const [inputText, setInputText] = useState<string>("");
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView behavior= {Platform.OS === "ios" ? "padding" : undefined} style={{flex:1}} >
    <ImageBackground resizeMode="cover" style={styles.image} source={BG}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MessageContainer messageItem={item} />;
        }}
      />
      <View style={{ margin: 5, justifyContent: "flex-end", height: "10%" }}>
        <InputTextComp text={inputText} setText={setInputText} />
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
