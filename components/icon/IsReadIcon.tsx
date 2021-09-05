import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type iconType = {
  readCheck: boolean;
};

const IsReadIcon: React.FC<iconType> = ({ readCheck }) => {
  let icon;

  readCheck
    ? (icon = <Ionicons name="md-checkmark-done" size={24} color="blue" />)
    : (icon = <Ionicons name="md-checkmark-done" size={24} color="gray" />);

  return icon;
};

export default IsReadIcon;

const styles = StyleSheet.create({});
