import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Field from "@/components/subcomponents/Field";
import Button from "./Button";

export default function FormContact({styles, datas, setter} : FormContactProps) {
    const sendMessage = () => {}
    const stylesMessage = StyleSheet.compose(styles.field, styles.message);
    return (
        <View style={styles.containerForm}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.field}>
                <Field 
                    type={'email-address'}
                    value={''}
                    setValue={(text) => setter({...datas, from: text})}
                    placeholder="Enter your email address"
                />
            </View>
            
            <Text style={styles.label}>Message</Text>
            <View style={stylesMessage}>
                <Field 
                    type={'message'}
                    value={''}
                    setValue={(text) => setter({...datas, message: text})}
                    placeholder="Enter your message"
                />
            </View>
            

            <Button
                styles={{
                    container: styles.containerButton,
                    button: styles.button
                }}
                action={() => sendMessage}
            >
                <Text style={styles.textButton}>Send Message</Text>
            </Button>
        </View>
    )
}