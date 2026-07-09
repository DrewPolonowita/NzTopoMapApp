import MapViewComponent from "@/modules/map/components/MapViewComponent";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      }}
    >
        <MapViewComponent />
    </View>
  );
}