import { OfflineManager } from "@maplibre/maplibre-react-native";

const downloadRegion = async () => {
    const progressListener = (offlineRegion: any, status: any) =>
        console.log(offlineRegion, status);
    const errorListener = (offlineRegion: any, error: any) =>
        console.log(offlineRegion, error);

    await OfflineManager.createPack(
    {
        mapStyle: "https://demotiles.maplibre.org/tiles/tiles.json",
        minZoom: 14,
        maxZoom: 20,
        bounds: [172.59, -43.424, 172.7266, -43.269],
        metadata: { customValue: "myValue" },
    },
        progressListener,
        errorListener,
    );
}

export default downloadRegion;