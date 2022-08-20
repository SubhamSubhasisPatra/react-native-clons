import React, { useEffect, useRef } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_APIKEY } from "@env";

const GooglePlacesInput = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText("Some Text");
  }, []);

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder="Search"
      onFail={(err) => console.log(err)}
      onNotFound={(err) => console.log(err,'not found')}
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      returnKeyType={"default"}
      fetchDetails={true}
      styles={{
        container:{
            flexGrow: 1
        }
      }}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;
