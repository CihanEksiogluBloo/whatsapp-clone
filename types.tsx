/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";

import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type TabParamList = {
  Camera: undefined;
  Chats: undefined;
  Calls: undefined;
  Status: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<TabParamList> | undefined;
  Modal: undefined;
  ChatScreen: ChatScreenParamList;
  Contacts: ContactsScreenParams;
};

// Params of Screens
export type ChatScreenParamList = {
  user: User;
  messages: Message[];
};

export type ContactsScreenParams = {
    id: string;
    name: string;
    imageUri: string;
};

// Components

// Custom Object Types
export type User = {
  id: string;
  name: string;
  imageUri: string;
};
export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user: { id: string; name: string };
  isRead: boolean;
};

export type ChatRoom = {
  id: string;
  users: User[];
  messages: Message[];
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof TabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<TabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
