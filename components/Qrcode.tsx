import { StyleSheet, View, Alert } from "react-native";
import React, { useContext, useRef } from "react";
import QRCode from "react-native-qrcode-svg";
import { colors, icons } from "@/constants";
import ButtonImage from "./ButtonImage";
import ViewShot, { captureRef } from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library';
import { Context } from "@/context/Context";

export default function Qrcode() {
  const { datas, theme } = useContext(Context)!;
  const { fgColor, bgColor, qrcode:  {defaultValue, value, quietzone, size, logo}} = datas;
  const qrcodeRef = useRef(null);
  const today = (new Date());
  const dateTime = {
    date: today.toLocaleDateString().split("/").join("-"),
    time: today.toLocaleTimeString().split(":").join("-")
  }

    const styles = StyleSheet.create({
      container: {
        marginTop: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
      },
      containerButton: {
        width: 60,
        height: 60,
        borderRadius: 10,
        borderColor: theme === 'dark' ? colors.dark.border : colors.light.border,
        backgroundColor: theme === 'dark' ? colors.dark.background : colors.light.background,
        borderWidth: 1,
        padding: 5,
        alignSelf: "flex-start"
      },
      button: {
        width: "100%",
        height: "100%",
        borderRadius: 10
      },
      iconButton: {
        width: "100%",
        height: "100%",
        borderRadius: 10
      },
    })

    const downloadImage = async (ref: React.RefObject<ViewShot>) => {
        try {
          Alert.alert(
            'Permission Required',
            'To download the QR code, the app needs permission to save images to your photo library. You will see a popup asking for this permission. Please allow access.',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: async () => {
                  const { granted } = await MediaLibrary.requestPermissionsAsync();
                  if (!granted) {
                    alert('Permission to access media library is required!');
                    return;
                  }
    
                  const uri = await captureRef(ref, {
                    format: 'jpg',
                    fileName: `qrcode_${dateTime.date}_${dateTime.time}`,
                    quality: 0.8,
                  });

                  const asset = await MediaLibrary.createAssetAsync(uri);
                  await MediaLibrary.createAlbumAsync('Download', asset, false);
                  console.log('Image saved to media library:', asset.uri);
                },
              },
            ]
          );
        } catch (error) {
          console.error('Error saving image:', error);
        }
      };

    return (
      <View style={styles.container}>
        <QRCode 
          value={value !== "" ? value : defaultValue}
          size={size}
          logoSize={30}
          quietZone={quietzone}
          color={fgColor}
          backgroundColor={bgColor}
          logo={logo}
          logoBackgroundColor={colors.white}
          getRef={(c) => qrcodeRef.current = c }
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

