import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ContactsScreenParams } from "../types";

type CSParams = {
  route: { params: ContactsScreenParams };
};

const ContactsScreen: React.FC<CSParams> = ({ route }) => {
  const {name} = route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
