import { StyleSheet, View, Alert, Image, Text } from "react-native";
import React, { useContext, useRef } from "react";
import QRCode from "react-native-qrcode-svg";
import { colors, icons } from "@/constants";
import ViewShot, { captureRef } from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library';
import { Context } from "@/context/Context";
import Button from "./Button";

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
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 20
    },
    containerButton: {
      width: "100%",
      height: 60,
      borderRadius: 10,
      borderColor: theme === 'dark' ? colors.dark.theme.secondary : colors.light.theme.secondary,
      backgroundColor: theme === 'dark' ? colors.dark.backgroundButton : colors.light.backgroundButton,
      borderWidth: 1,
      padding: 5,
      alignSelf: "flex-start"
    },
    button: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    },
    textButton: {
      color: theme === "dark" ? colors.dark.textModal : colors.white,
      fontWeight: "bold",
      fontSize: 18
    },
    iconButton: {
      width: 40,
      height: 40,
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
        logoBackgroundColor={bgColor}
        getRef={(c) => qrcodeRef.current = c }
      />

      <Button 
          styles={{
            container: styles.containerButton,
            button: styles.button,
          }}
          action={() => downloadImage(qrcodeRef)}
      >
        <Text style={styles.textButton}>Download</Text>
        <Image 
          source={icons.download}
          resizeMode="contain"
          style={styles.iconButton}
        />
      </Button>
    </View>
  )
}

