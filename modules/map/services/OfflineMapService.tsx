import { OfflineManager, LngLatBounds } from "@maplibre/maplibre-react-native";
import topoStyle from "../../../assets/json/nz-topo-style-spec.json";

export async function downloadTestRegion(bounds: LngLatBounds) {
  console.log("Clearing offline database...");

  await OfflineManager.resetDatabase();
  console.log("Downloading test region...");

  return OfflineManager.createPack(
    {
      mapStyle: "http://100.99.19.37:8000/json/nz-topo-style-spec.json",
      minZoom: 12,
      maxZoom: 14,
      bounds: bounds,
      metadata: {
        name: "Downloaded Region",
      },
    },
    (_pack, status) => {
      console.log(status);
    },
    (_pack, error) => {
      console.error(error);
    },
  );
}

export async function checkTestRegion() {
  const packs = await OfflineManager.getPacks();
  console.log("Packs:", packs);
}

export async function clearcache() {
  console.log("Clearing offline database...");

  await OfflineManager.resetDatabase();
}
