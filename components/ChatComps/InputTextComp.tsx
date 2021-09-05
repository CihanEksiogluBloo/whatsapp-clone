import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

type InputBox = {
  text: string;
  setText: (value: string) => void;
};

const InputTextComp: React.FC<InputBox> = ({ text, setText }) => {
  let button: JSX.Element = (
    <FontAwesome name="microphone" size={20} color="white" />
  );
  if (text.length > 0) {
    button = <Ionicons name="send" size={20} color="white" />;
  }

  function TextChangeHandler(event: string) {
    setText(event);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputTextContainer}>
        <FontAwesome5
          style={styles.searchIcon}
          name="smile"
          size={24}
          color="black"
        />
        <TextInput
          placeholder={"Message"}
          value={text}
          style={{
            backgroundColor: "white",
            borderRadius: 50,
            height: 50,
            paddingHorizontal: 10,
            fontSize: 16,
            marginRight: 10,
            flex: 1,
          }}
          underlineColorAndroid={"transparent"}
          onChangeText={TextChangeHandler}
        />
      </View>

      <View style={styles.buttons}>{button}</View>
    </View>
  );
};

export default InputTextComp;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",

    height: "100%",
    backgroundColor: Colors.light.headerBackground,
    borderRadius: 200,
    padding: 15,
  },
  inputTextContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 40,
    margin: 5,
  },
  searchIcon: {
    paddingLeft: 13,
    paddingTop: 13,
    paddingBottom: 13,
  },
});
