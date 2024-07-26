import { View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import SwitchEdit from './SwitchEdit';
import Field from "./subcomponents/Field";
import { networks, supports } from "@/constants";

export default function Form({styles, datas, setterDatas, options }: FormType) {
    const [ editLink, setEditLink ] = useState(false);
    const [ editForeColor, setEditForeColor ] = useState(false);
    const [ editBackColor, setEditBackColor ] = useState(false);
    const [ editPatch, setEditPatch ] = useState(false);

    return (
        <View style={styles.containerForm}>

            <SwitchEdit edit={editLink} setEdit={setEditLink} text={"Link"}>
                <Field 
                type={"url"}
                value={datas.qrcode.value}
                setValue={(text: string) => setterDatas(prev => {
                    const previous = {...prev};
                    const regex = new RegExp(/^[https://]/);
                    const mixNetworks = networks.concat(supports);

                    mixNetworks.forEach(network => {
                      if(text.includes(network.link)) {
                        previous.qrcode.value = text;
                        previous.qrcode.logo = network.icon!;
                      }
                    })

                    if(!regex.test(previous.qrcode.value)) { 
                      Alert.alert("This field can only contain url links.");
                      previous.qrcode.value = "";
                    }
                    
                    return previous;
                })}
                placeholder={"Insert your url link"}
                />
            </SwitchEdit>

          <SwitchEdit edit={editForeColor} setEdit={setEditForeColor} text={"Foreground Color"}>
            <Field 
              type={"fore"}
              value={datas.fgColor}
            />
          </SwitchEdit>          

          <SwitchEdit edit={editBackColor} setEdit={setEditBackColor} text={"Background Color"}>
            <Field 
              type={"back"}
              value={datas.bgColor}
            />
          </SwitchEdit> 

          <SwitchEdit edit={editPatch} setEdit={setEditPatch} text={"Margin"}>
            <Field 
              type={"select"}
              value={datas.bgColor}
              options={options}
            />
          </SwitchEdit> 

        </View>
  )
}