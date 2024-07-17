import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import { QRCodeCanvas }from "qrcode.react";
import { icons } from "@/constants";
import ButtonImage from "./ButtonImage";

export default function Qrcode({datas : {fgColor, bgColor, qrcode: {value, includeMargin, size, level, imageSettings}}} : QrcodeProps) {
    const qrcodeRef = useRef<View>(null);

    const downloadImage = (qrcodeRef: React.RefObject<View>) => {

    }

    return (
        <View ref={qrcodeRef} style={styles.container}>
            <QRCodeCanvas 
                id="qrcode"
                value={value}
                size={size}
                bgColor={bgColor}
                fgColor={fgColor}
                level={level}
                includeMargin={includeMargin}
                imageSettings={imageSettings}
            />
            <ButtonImage 
                styles={{
                    container: styles.containerButton,
                    button: styles.button,
                    icon: styles.iconButton,
                }}
                src={icons.downloadPdf}
                action={() => downloadImage(qrcodeRef)}
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50
    },
    containerButton: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    button: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    iconButton: {
        width: "100%",
        height: "100%",
    },
})