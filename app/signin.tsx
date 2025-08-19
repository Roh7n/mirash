import FormTextField from "@/components/FormTextField";
import images from "@/constants/images";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function signin() {
  const [phonenumber, setPhonenumber] = useState("");

  const handleLogin = () => {
    console.log(phonenumber);
  };

  return (
    <SafeAreaView className="bg-white h-full ">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.phone}
          className="w-full h-2/5"
          resizeMode="contain"
        />

        <View className="p-10 gap-3">
          <FormTextField
            keyboardType="number-pad"
            label="Phone Number"
            value={phonenumber}
            onChangeText={setPhonenumber}
          />
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-gray-900 rounded-2xl w-32 h-10 items-center justify-center self-end"
          >
            <Text className="font-pixelify-bold text-white font-semibold text-lg">
              Get OTP
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
