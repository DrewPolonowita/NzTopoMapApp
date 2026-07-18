import { View, Button } from "react-native";
import {
  Map,
  MapRef,
  StyleSpecification,
  Camera,
  NetworkManager,
} from "@maplibre/maplibre-react-native";
import { useRef } from "react";
import topoStyle from "../../../assets/json/nz-topo-style-spec.json";
import cameraStyle from "../../../assets/json/nz-camera-style-spec.json";
import mapStyle from "../../../assets/json/nz-map-style-spec.json";

import {
  downloadTestRegion,
  checkTestRegion,
  clearcache,
} from "../services/OfflineMapService";

export default function MapViewComponent() {
  let offline = false;
  const mapref = useRef<MapRef>(null);
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
        ref={mapref}
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
          await downloadTestRegion(await mapref.current?.getBounds());
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
