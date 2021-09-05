import React from "react";
import { FlatList, StyleSheet, View, ImageBackground } from "react-native";
import MessageContainer from "../../components/ChatComps/MessageContainer";
import { User, Message } from "../../types";

import BG from "../../assets/images/BG.png";



export type ChatScreenProps = {

  route: { params: { user: User; messages: Message[] } };
};

const ChatScreen: React.FC<ChatScreenProps> = ({ route }) => {
  const { messages } = route.params;

  return (
    <ImageBackground resizeMode="cover" style={styles.image} source={BG}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MessageContainer messageItem={item} />;
        }}
      />
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
