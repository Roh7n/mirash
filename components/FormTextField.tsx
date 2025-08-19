import { Text, TextInput, View } from "react-native";

export default function FormTextField({ label = "", ...rest }) {
  return (
    <View>
      {label && <Text className="font-pixelify-medium ">{label}</Text>}
      <TextInput
        className="bg-blue-100 h-12 mt-1 border rounded-xl border-blue-300"
        autoCapitalize="none"
        {...rest}
      />
    </View>
  );
}
