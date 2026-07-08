import { View } from "react-native";
import { Map, StyleSpecification, Camera } from "@maplibre/maplibre-react-native";

import topoStyle from "../../../assets/json/nz-topo-style-spec.json";
import cameraStyle from "../../../assets/json/nz-camera-style-spec.json";


export default function MapViewComponent() {

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Map mapStyle={topoStyle as StyleSpecification}>
        <Camera
            initialViewState={{
                    center: [172.6207487, -43.52872608],
                    zoom: 8
                }}
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
