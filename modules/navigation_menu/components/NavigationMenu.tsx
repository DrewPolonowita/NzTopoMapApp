import { checkTestRegion, clearcache, downloadRegion } from "@/modules/map/services/downloadRegion";
import viewDownloadedRegion from "@/modules/map/services/viewDownloadedRegion";
import { Dimensions, StatusBar, Text, View } from "react-native";
import { initialWindowMetrics } from 'react-native-safe-area-context';
import NavigationButton from "./NavigationButton";



export default function NavigationMenu() {

    const WINDOW_HEIGHT = Dimensions.get('window').height;
    const { _insets, frame } = initialWindowMetrics;
    const BOTTOM_NAV_BAR_HEIGHT = frame.height - WINDOW_HEIGHT- StatusBar.currentHeight
    
    return (
        <View
            style = {{
                display: "flex",
                position: "absolute",
                flexDirection: "column",
                height: BOTTOM_NAV_BAR_HEIGHT*-4,
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0)",
                bottom: "0"
            }}
        >
            <>
                <View
                style = {{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row"
                }}
                >

                    <NavigationButton onPress={downloadRegion}>
                        <Text>
                            download
                        </Text>
                    </NavigationButton>
                    <NavigationButton onPress={viewDownloadedRegion}>
                        <Text>
                            computer, turn off the internet
                        </Text>
                    </NavigationButton>
                    <NavigationButton onPress={checkTestRegion}>
                        <Text>
                            print test regions
                        </Text>
                    </NavigationButton>
                    <NavigationButton onPress={clearcache}>
                        <Text>
                            clear cache
                        </Text>
                    </NavigationButton>

                </View>
                <View
                style = {{  
                    flex: 1
                }}
                ></View>
            </>
        </View>
    );
}