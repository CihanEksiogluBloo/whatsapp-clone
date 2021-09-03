import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar } from "react-native-elements";
import { ChatRoom } from "../../types";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
  index: number;
};

type messageStatus = "sent" | "received" | "read";

const ChatListItem = ({ chatRoom, index }: ChatListItemProps) => {
  const isRead: messageStatus = "read";

  let readIcon;

  isRead === "read"
    ? (readIcon = <Ionicons name="md-checkmark-done" size={24} color="blue" />)
    : null;

  return (
    <View style={styles.container}>
      <View style={styles.imageAndContent}>
        <Avatar
          size="medium"
          rounded
          source={{ uri: chatRoom.users[index].imageUri }}
        />
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <Text style={styles.nameText}>{chatRoom.users[index].name} </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {readIcon}
            <Text numberOfLines={1}>
              {chatRoom.messages[chatRoom.messages.length - 1].content}
            </Text>
          </View>
        </View>
        <View>
        <Text style={styles.date}>Yesterday</Text>
        <Text style={styles.messageCounter}>1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    padding: 10,
    
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  date: { fontSize: 14, opacity: 0.6 },
  messageCounter: {
    alignSelf:"flex-end",
    fontSize: 14,
    backgroundColor: Colors.light.headerBackground,
    paddingVertical:4,
    paddingHorizontal:8,
    margin: 5,
    borderRadius:100,
    color:Colors.light.headerTint,
    justifyContent:"flex-end",


  },
  imageAndContent: {
    flexDirection: "row",
    width: "100%",
  },
});

export default ChatListItem;
