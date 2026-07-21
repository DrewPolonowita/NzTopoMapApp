import { OfflineManager } from "@maplibre/maplibre-react-native";

export const downloadRegion = async () => {
    const progressListener = (offlineRegion: any, status: any) =>
        console.log(offlineRegion, status);
    const errorListener = (offlineRegion: any, error: any) =>
        console.log(offlineRegion, error);

    await OfflineManager.createPack(
    {
        mapStyle: "asset://nz-topo-style-spec.json",
        minZoom: 0,
        maxZoom: 24,
        bounds: [172.59, -43.424, 172.7266, -43.269],
        metadata: { customValue: "test" },
    },
        progressListener,
        errorListener,
    );
}






export const checkTestRegion = async () => {
    const packs = await OfflineManager.getPacks();
    console.log("Packs:", packs);
}

export const clearcache = async () => {
    console.log("Clearing offline database...");

    await OfflineManager.resetDatabase();

    console.log("Cleared offline database")
}