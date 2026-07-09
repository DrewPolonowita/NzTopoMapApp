import { NetworkManager } from "@maplibre/maplibre-react-native";

const viewDownloadedRegion = () => {
    console.log("computer turn of internet")
    NetworkManager.setConnected(false)
}

export default viewDownloadedRegion;