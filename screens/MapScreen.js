import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

import tw from "twrnc";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            options={{
              headerShown: false,
            }}
            component={NavigateCard}
          />
          <Stack.Screen
            name="RideOptionsCard"
            options={{
              headerShown: false,
            }}
            component={RideOptionsCard}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
