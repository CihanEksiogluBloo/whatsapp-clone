import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootTabScreenProps } from "../types";

const StatusScreen = ({ navigation }: RootTabScreenProps<"Status">) => {
  return (
    <View>
      <Text>StatusScreen</Text>
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({});
