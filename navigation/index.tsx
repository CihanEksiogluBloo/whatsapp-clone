import { Feather, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName, View } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import CameraScreen from "../screens/CameraScreen";
import ChatsScreen from "../screens/Chats/ChatsScreen";
import CallScreen from "../screens/CallsScreen";
import StatusScreen from "../screens/StatusScreen";
import { RootStackParamList, TabParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatScreen from "../screens/Chats/ChatScreen";
import { Avatar } from "react-native-elements";
import ContactsScreen from "../screens/ContactsScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.headerBackground,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: Colors.light.headerTint,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Root"
          component={TopTabNavigator}
          options={{
            headerTitle: "Whatsapp",
            headerRight: () => {
              const colorScheme = useColorScheme();
              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 60,
                    marginRight: 10,
                  }}
                >
                  <Feather
                    name="search"
                    size={24}
                    color={Colors[colorScheme].headerTint}
                    onPress={() => {}}
                  />
                  <Entypo
                    name="dots-three-vertical"
                    size={24}
                    color={Colors[colorScheme].headerTint}
                    onPress={() => {}}
                  />
                </View>
              );
            },
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{
            title: "Contacts!",
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({ route, navigation }) => ({
            title: route.params?.user.name,
            headerTitleStyle: { fontSize: 16 },
            headerTitleAlign: "left",
            headerLeft: () => {
              const colorScheme = useColorScheme();
              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color={Colors[colorScheme].headerTint}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                  <Avatar
                    size="small"
                    rounded
                    source={{ uri: route.params?.user.imageUri }}
                    containerStyle={{ marginLeft: 10 }}
                  />
                </View>
              );
            },
            headerRight: () => {
              const colorScheme = useColorScheme();
              return (
                <View style={{ flexDirection: "row", marginHorizontal: 5 }}>
                  <FontAwesome
                    name="video-camera"
                    size={24}
                    color={Colors[colorScheme].headerTint}
                    style={{ marginHorizontal: 10 }}
                  />
                  <FontAwesome
                    name="phone"
                    size={24}
                    color={Colors[colorScheme].headerTint}
                    style={{ marginHorizontal: 10 }}
                  />

                  <Entypo
                    name="dots-three-vertical"
                    size={24}
                    color={Colors[colorScheme].headerTint}
                    onPress={() => {}}
                  />
                </View>
              );
            },
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const TopTab = createMaterialTopTabNavigator<TabParamList>();

function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].headerTint,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].headerBackground,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <TopTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <TabBarIcon name="camera" color={color} />,
        }}
      />
      <TopTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          title: "Chats",
        }}
      />

      <TopTab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          title: "Status",
        }}
      />
      <TopTab.Screen
        name="Calls"
        component={CallScreen}
        options={{
          title: "Calls",
        }}
      />
    </TopTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}
