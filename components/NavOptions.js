import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={styles.card}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.text}>{item.title}</Text>
        <Icon
          style={tw`p-2 bg-black rounded-full w-10 mt-4`}
          type="antdesign"
          name="arrowright"
          color="white"
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={DATA}
      horizontal={true}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "semibold",
  },
});
