import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

import tw from "twrnc";
import NavOptions from "../components/NavOptions";

import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import GooglePlacesInput from "../components/GooglePlacesInput";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.setAddressText("Some Text");
  // }, []);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logoStyle}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        {/* <ScrollView scrollEnabled={false}>
          <View style={styles.container_search}>
            <GooglePlacesAutocomplete
              placeholder="Search"
              debounce={200}
              minLength={2}
              enablePoweredByContainer={false}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en", // language of the results
              }}
              onPress={(data, details = null) => console.log(data)}
              onFail={(error) => console.error(error)}
            />
          </View>
        </ScrollView> */}
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container_search: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "white",
    // zIndex: 2,
  },
  text: {
    color: "red",
    fontSize: 30,
  },
  logoStyle: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
