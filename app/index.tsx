import { Text, View } from "react-native";
import MapViewComponent from "@/modules/map/components/MapViewComponent";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapViewComponent />
    </View>
  );
}