import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";
import { Message } from "../../types";
import Colors from "../../constants/Colors";
import { useColorScheme } from "react-native";

export type MessageItems = {
  messageItem: Message;
};

const MessageContainer: React.FC<MessageItems> = ({ messageItem }) => {
  const colorScheme = useColorScheme();
  const isMe = messageItem.user.id === "u2";

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isMe
          ? Colors.myMessageBox
          : Colors[colorScheme!].messageBox,
        marginRight: isMe ? 7 : "10%",
        marginLeft: isMe ? "10%" : 7,
      }}
    >
      <Text style={{ ...styles.text, color: Colors[colorScheme!].text }}>
        {messageItem.content}
      </Text>
      <Text style={styles.time}>{moment(messageItem.createdAt).fromNow()}</Text>
    </View>
  );
};

export default MessageContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 7,
  },
  text: {
    color: "red",
    justifyContent: "center",
  },
  time: {
    alignSelf: "flex-end",
    opacity: 0.5,
    fontSize: 13,
  },
});
