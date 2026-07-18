import { useState, RefObject } from "react";
import { View, Button } from "react-native";
import { MapRef, NetworkManager } from "@maplibre/maplibre-react-native";
import {
  downloadTestRegion,
  checkTestRegion,
  clearcache,
} from "../services/OfflineMapService";

interface Props {
  mapref: RefObject<MapRef | null>;
}

export default function Buttons({ mapref }: Props) {
  const [isOnline, setIsOnline] = useState(true);
  return (
    <View
      style={{
        width: "100%",
        // height: 100,
        flex: 0,
      }}
    >
      <Button
        title="Download Test Region (WIP)"
        onPress={async () => {
          console.log("Downloading test region...");
          if (!mapref) {
            throw new Error("Map has not been initialized.");
          }

          const bounds = await mapref.current?.getBounds();
          if (bounds) {
            console.log("Downloading", bounds);
            // await downloadTestRegion(bounds);
          } else {
            console.log("mapref does not exist");
          }
        }}
      />

      <Button
        title="check pack exists"
        onPress={async () => {
          await checkTestRegion();
        }}
      />

      <Button
        title="reset database"
        onPress={async () => {
          await clearcache();
        }}
      />

      <Button
        title={isOnline ? "Set offline" : "Set online"}
        onPress={() => {
          if (isOnline) {
            NetworkManager.setConnected(false);
            console.log("disabled network");
          } else {
            NetworkManager.setConnected(true);
            console.log("enabled network");
          }
          setIsOnline(!isOnline);
        }}
      />
    </View>
  );
}
