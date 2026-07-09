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
        height: "100%",
        flex: 1
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

/*
follow the LDS tutorial for getting XYZ API link
Work out how to set maplibre to use imageSource
work out how to serve locally stored images to that source.
Look at the format that downloaded LINZ data comes in (either GeoTIFF or GeoJPEG).
work ot how to link XYZ api to serve imageSource georeferenced images
*/

//4965ffcfc254417dbd88c28a1ab51d40