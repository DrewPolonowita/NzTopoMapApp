import { View, Button } from "react-native";
import {
  Map,
  StyleSpecification,
  Camera,
  NetworkManager,
  OfflineManager,
} from "@maplibre/maplibre-react-native";

import topoStyle from "../../../assets/json/nz-topo-style-spec.json";
import sattopoStyle from "../../../assets/json/nz-topo-style-spec-offline.json";
import cameraStyle from "../../../assets/json/nz-camera-style-spec.json";
import mapStyle from "../../../assets/json/nz-map-style-spec.json";
import {
  downloadTestRegion,
  checkTestRegion,
  clearcache,
} from "../services/OfflineMapService";

export default function MapViewComponent() {
  var offline = false;
  return (
    <View
      style={{
        width: "100%",
        // height: "100%",
        flex: 1,
      }}
    >
      <Map
        mapStyle={topoStyle as StyleSpecification}
        logo={false}
        attribution={false}
        compassHiddenFacingNorth={false}
        scaleBar={true}
        preferredFramesPerSecond={mapStyle.preferredFramesPerSecond}
        onPress={async () => {
          console.log("Downloading test region...");
          await downloadTestRegion();
        }}
      >
        <Camera
          initialViewState={cameraStyle.initialViewState}
          minZoom={cameraStyle.minZoom}
          maxZoom={cameraStyle.maxZoom}
          maxBounds={cameraStyle.cameraBounds}
        />
      </Map>

      <Button
        title="Download Test Region"
        onPress={async () => {
          console.log("Downloading test region...");
          await downloadTestRegion();
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
