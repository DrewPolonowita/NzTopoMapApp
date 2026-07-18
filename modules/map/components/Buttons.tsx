import { View, Button } from "react-native";
import { MapRef, NetworkManager } from "@maplibre/maplibre-react-native";
import {
  downloadTestRegion,
  checkTestRegion,
  clearcache,
} from "../services/OfflineMapService";

export default function Buttons() {
  let offline = false;
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
          // await downloadTestRegion(await mapref.current?.getBounds());
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
        title="offline mode"
        onPress={async () => {
          if (offline === false) {
            NetworkManager.setConnected(true);
            offline = true;
            console.log("enabled network");
          } else {
            NetworkManager.setConnected(false);
            offline = false;
            console.log("disabled network");
          }
        }}
      />
    </View>
  );
}
