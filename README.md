# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Todo/ideas
- [ ] Use [layer](https://maplibre.org/maplibre-react-native/docs/components/layer) to add tracks from OSM overlaid on to the map.
- [ ] add in downloaded regions
- [ ] Use layer to add 3D terrain raster
- [ ] Add zoom detail levels
- [ ] move origin on map open
- [ ] add min and max view zoom levels (This isn't done in the API, it is done to the Layer object)
- [ ] use [location manager](https://maplibre.org/maplibre-react-native/docs/modules/location-manager) to get position, add a layer for waypoints and the person icon.

## Adding offline tiles
- [ ] dynamically switch sources based on a variable
- [ ] download visible region (use [getViewState()](https://maplibre.org/maplibre-react-native/docs/components/map#getviewstate) method)
- [ ] download preset regions (we just make a button and store some preset bounds for the download call)