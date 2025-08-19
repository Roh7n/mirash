import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    "PixelifySans-Bold": require("../assets/fonts/PixelifySans-Bold.ttf"),
    "PixelifySans-Medium": require("../assets/fonts/PixelifySans-Medium.ttf"),
    "PixelifySans-Regular": require("../assets/fonts/PixelifySans-Regular.ttf"),
    "PixelifySans-SemiBold": require("../assets/fonts/PixelifySans-SemiBold.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
    </Stack>
  );
}
