import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import chatRooms from "../../data/Chats";
import ChatListItem from "../../components/ChatComps/ChatListItem";
import FloatingMessageButton from "../../components/Button/FloatingMessageButton";
import { RootTabScreenProps } from "../../types";

const ChatsScreen: React.FC<RootTabScreenProps<"Chats">> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ChatListItem chatRoom={item} />;
        }}
      />
      <View style={styles.floatingIcon}>
        <FloatingMessageButton
          onPress={() => {
            navigation.navigate("Contacts", {
              id: "u2",
              name: "Cihan",
              imageUri: "https://avatars.githubusercontent.com/u/77451782?v=4",
            });
          }}
        />
      </View>
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
  floatingIcon: {
    marginBottom: 20,
    alignSelf: "flex-end",
    marginRight: 20,
  },
});
