import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import Colors from "../../constants/Colors";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import IsReadIcon from "../icon/IsReadIcon";
import { ChatRoom } from "../../types";

export interface ChatListItemProp {
  chatRoom: ChatRoom;
}

const ChatListItem: React.FC<ChatListItemProp> = ({ chatRoom }) => {
  //variables

  const lastMessage = chatRoom.messages[chatRoom.messages.length - 1];
  let chatTitle: string | null = null;

  const navigation = useNavigation();

  //if else
  if (lastMessage.user.name !== chatRoom.users[0].name) {
    chatTitle = lastMessage.user.name + ": ";
  }

  //functions
  const onClick = () => {
    navigation.navigate("ChatScreen", {
      user: chatRoom.users[0],
      messages: chatRoom.messages,
    });
  };

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.imageAndContent}>
          <Avatar
            size="medium"
            rounded
            source={{ uri: chatRoom.users[0].imageUri }}
          />
          <View style={{ marginHorizontal: 10, flex: 1 }}>
            <Text style={styles.nameText}>{chatRoom.users[0].name} </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text numberOfLines={1}>
                {chatTitle}
                {lastMessage.content}
              </Text>
              <IsReadIcon readCheck={lastMessage.isRead} />
            </View>
          </View>
          <View>
            <Text style={styles.date}>
              {moment(lastMessage.createdAt).fromNow()}
            </Text>
            {!lastMessage.isRead && (
              <Text style={styles.messageCounter}>1</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    alignSelf: "flex-end",
    fontSize: 14,
    backgroundColor: Colors.light.headerBackground,
    paddingVertical: 4,
    paddingHorizontal: 8,
    margin: 5,
    borderRadius: 100,
    color: Colors.light.headerTint,
    justifyContent: "flex-end",
  },
  imageAndContent: {
    flexDirection: "row",
    width: "100%",
  },
});

export default ChatListItem;
