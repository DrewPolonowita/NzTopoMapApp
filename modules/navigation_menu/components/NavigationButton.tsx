import { PropsWithChildren } from "react";
import { Pressable } from "react-native";

type PropsWithChildrenAndGenerics = PropsWithChildren<{
    onPress: () => void;
}>;

const NavigationButton = ({ children, onPress} : PropsWithChildrenAndGenerics) => {
    
    return (
        <Pressable
        style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}

        onPress={onPress}
        >
            {children}
        </Pressable>
    );
}


export default NavigationButton;