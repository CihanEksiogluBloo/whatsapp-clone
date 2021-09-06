import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  GestureResponderEvent,
} from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

type InputBox = {
  text: string;
  setText: (value: string) => void;
  onMicrophoneIconPress: (event: GestureResponderEvent) => void;
  onSmileIconPress: (event: GestureResponderEvent) => void;
  onAttachmentIconPress: (event: GestureResponderEvent) => void;
  sendMessage: () => void;
  onCameraIconPress: () => { image: null | {} };
};

const InputTextComp: React.FC<InputBox> = ({
  text,
  sendMessage,
  setText,
  onMicrophoneIconPress,
  onSmileIconPress,
  onAttachmentIconPress,
  onCameraIconPress,
}) => {
  const useSchema = useColorScheme();

  let button: JSX.Element = (
    <FontAwesome
      name="microphone"
      size={20}
      color="white"
      onPress={onMicrophoneIconPress}
    />
  );
  if (text.length > 0) {
    button = (
      <Ionicons name="send" size={20} color="white" onPress={sendMessage} />
    );
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
          color={Colors[useSchema].messageBoxIcons}
          onPress={onSmileIconPress}
        />
        <TextInput
          placeholder={"Type a message"}
          value={text}
          style={{
            backgroundColor: Colors[useSchema].background,
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
        <Entypo
          name="attachment"
          size={24}
          color={Colors[useSchema].messageBoxIcons}
          style={styles.attachment}
          onPress={onAttachmentIconPress}
        />
        <MaterialIcons
          name="photo-camera"
          size={24}
          color={Colors[useSchema].messageBoxIcons}
          style={styles.camera}
          onPress={onCameraIconPress}
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

    height: "80%",
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
  attachment: {
    paddingLeft: 13,
    paddingTop: 13,
    paddingBottom: 13,
  },
  camera: {
    paddingLeft: 13,
    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 13,
  },
});
