import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ChatListItem from "../components/ChatListItem/ChatListItem";
import { RootTabScreenProps } from "../types";
import chatRooms from "../data/Chats";

const ChatsScreen = ({ navigation }: RootTabScreenProps<"Status">) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return <ChatListItem chatRoom={item} index={index} />;
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
