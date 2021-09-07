import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackScreenProps } from "../types";

const ContactsScreen: React.FC<RootStackScreenProps<"Contacts">> = ({
  route,
}) => {
  const { name } = route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactsScreen;


