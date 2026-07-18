import { View } from "react-native";

import MapViewComponent from "@/modules/map/components/MapViewComponent";
import Buttons from "@/modules/map/components/Buttons";
import { useRef, useState } from "react";
import { MapRef } from "@maplibre/maplibre-react-native";

export default function Index() {
  const mapref = useRef<MapRef>(null);
  // const [offline, setOffline] = useState<boolean>(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <MapViewComponent />
      <Buttons />
    </View>
  );
}
