import { Camera, Map, StyleSpecification } from "@maplibre/maplibre-react-native";
import { View } from "react-native";

import cameraStyle from "../../../assets/json/nz-camera-style-spec.json";
import mapStyle from "../../../assets/json/nz-map-style-spec.json";
import topoStyle from "../../../assets/json/nz-topo-style-spec.json";

export default function MapViewComponent() {
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
      >
        <Camera
            initialViewState={cameraStyle.initialViewState}
            minZoom={cameraStyle.minZoom}
            maxZoom={cameraStyle.maxZoom}
            maxBounds={cameraStyle.cameraBounds}
        />
      </Map>

    </View>
  );
}
