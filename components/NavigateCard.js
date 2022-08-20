import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center p-5 text-xl`}>NavigateCard</Text>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})