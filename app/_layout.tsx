import NavigationMenu from "@/modules/navigation_menu/components/NavigationMenu";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />
      <NavigationMenu />
    </View>
  );
}
