import { View, StyleProp, ImageSourcePropType, TouchableOpacity, Image, GestureResponderEvent  } from 'react-native'
import React from 'react'

type ButtonImageProps = {
    styles: {
        container: StyleProp<any>;
        button: StyleProp<any>;
        icon: StyleProp<any>;
    }
    src: ImageSourcePropType,
    action: (event: GestureResponderEvent) => void
}

export default function ButtonImage({styles, src, action}: ButtonImageProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={action} style={styles.button}>
            <Image 
                source={src}
                resizeMode="contain"
                style={styles.icon}
            />
        </TouchableOpacity>
    </View>
  )
}