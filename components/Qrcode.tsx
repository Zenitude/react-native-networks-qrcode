import { StyleSheet, View, Alert } from "react-native";
import React, { useRef } from "react";
import QRCode from "react-native-qrcode-svg";
import { colors, icons } from "@/constants";
import ButtonImage from "./ButtonImage";
import ViewShot, { captureRef } from "react-native-view-shot";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from "expo-file-system";
//import RNFS, { DocumentDirectoryPath, writeFile, exists, mkdir } from "react-native-fs";

export default function Qrcode({datas : {fgColor, bgColor, qrcode: {defaultValue, value, quietzone, size, logo}}} : QrcodeProps) {
    const viewshotRef = useRef<ViewShot>(null);
    const qrcodeRef = useRef(null);
    const today = (new Date());
    const dateTime = {
        date: today.toLocaleDateString().split("/").join("-"),
        time: today.toLocaleTimeString().split(":").join("-")
    }

    // const downloadImage = async (ref: React.RefObject<ViewShot>) => {
    //     if(!ref.current) { return; }

    //     try {
    //         const status = await MediaLibrary.requestPermissionsAsync();
    //         console.log('status: ', status);
    //         if(!status.granted) {
    //             Alert.alert('Permission to access media library is required !')
    //             return;
    //         }

    //         const filename = `myQrCode_${dateTime.date}_${dateTime.time}`;

    //         const uri = await captureRef(ref, {
    //             format: 'jpg',
    //             fileName: filename,
    //             quality: 0.8,
    //             height: 250,
    //             width: 250,
    //         });

    //         const asset = await MediaLibrary.createAssetAsync(uri);
    //         await MediaLibrary.createAlbumAsync('Download', asset, false);

    //         console.log('Image saved to media library : ', asset.uri);

    //         //const path = `${FileSystem.documentDirectory}${filename}`;

    //         // await FileSystem.moveAsync({
    //         //     from: uri,
    //         //     to: path
    //         // });

    //         //console.log('Image saved to : ', path)
    //     }
    //     catch(error) {
    //         console.log('Error Saving image : ', error);
    //     }
       
    //     // if(RNFS) {
    //     //     const dirExist = await exists(path);
    //     //     if(!dirExist) { await mkdir(path) }
   
    //     //     await image.then(img => {
    //     //         writeFile(filePath, img, "base64")
    //     //         console.log("Success download QRCode")
    //     //     }).catch(error => console.log(`Error Download QRCode : ${error}`))
    //     // }

    // }

    const downloadImage = async (ref: React.RefObject<ViewShot>) => {
        try {
          // Informer l'utilisateur de la demande de permission
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
                  // Demander les permissions pour accéder à la bibliothèque multimédia
                  const { granted } = await MediaLibrary.requestPermissionsAsync();
                  if (!granted) {
                    alert('Permission to access media library is required!');
                    return;
                  }
    
                  // Capturer l'image du QR code
                  const uri = await captureRef(ref, {
                    format: 'jpg',
                    quality: 0.8,
                  });
    
                  // Enregistrer l'image dans la bibliothèque multimédia
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
        <ViewShot ref={viewshotRef}>
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
        </ViewShot> 
    )
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
        width: 50,
        height: 50,
        borderRadius: 10,
        borderColor: colors.black,
        backgroundColor: colors.blue,
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