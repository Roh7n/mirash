import images from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function signin() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.phone}
          className="w-full h-5/6"
          resizeMode="contain"
        />

        <View>
          <Text className="font-pixelify-semibold">Phone Number</Text>
          <TextInput />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
