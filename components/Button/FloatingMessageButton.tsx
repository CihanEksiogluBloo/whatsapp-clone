import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

type FloatingComp = {
  onPress: () => void;
};

const FloatingMessageButton: React.FC<FloatingComp> = ({ onPress }) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <MaterialCommunityIcons
        name="android-messages"
        onPress={onPress}
        size={27}
        color="white"
        style={{
          borderRadius: 100,
          backgroundColor: Colors[colorScheme].headerBackground,
          padding: 10,
        }}
      />
    </View>
  );
};

export default FloatingMessageButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
});
