import { View } from "react-native";
import { RefObject } from "react";
import {
  Map,
  MapRef,
  StyleSpecification,
  Camera,
} from "@maplibre/maplibre-react-native";
import topoStyle from "../../../assets/json/nz-topo-style-spec.json";
import cameraStyle from "../../../assets/json/nz-camera-style-spec.json";
import mapStyle from "../../../assets/json/nz-map-style-spec.json";

interface Props {
  mapref: RefObject<MapRef | null>;
}

export default function MapViewComponent({ mapref }: Props) {
  return (
    <View
      style={{
        width: "100%",
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
    </View>
  );
}
