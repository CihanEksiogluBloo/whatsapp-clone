import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { RootTabScreenProps } from "../../types";
import chatRooms from "../../data/Chats";
import ChatListItem from "../../components/ChatComps/ChatListItem";

const ChatsScreen: React.FC<RootTabScreenProps<"Status">> = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ChatListItem chatRoom={item} />;
        }}
      />
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
