import { View } from 'react-native'
import React, { useState } from 'react'
import SwitchEdit from './SwitchEdit';
import Field from './subcomponents/Field';

export default function Form({styles, datas, setterDatas, options }: FormType) {
    const [ editLink, setEditLink ] = useState(false);
    const [ editForeColor, setEditForeColor ] = useState(false);
    const [ editBackColor, setEditBackColor ] = useState(false);
    const [ editPatch, setEditPatch ] = useState(false);

    return (
        <View style={styles.containerForm}>

            <SwitchEdit edit={editLink} setEdit={setEditLink} text={"Link"}>
                <Field 
                type={"default"}
                value={datas.qrcode.value}
                setValue={(text: string) => setterDatas(prev => {
                    const previous = {...prev};
                    previous.qrcode.value = text;
                    return previous;
                })}
                placeholder={"Insert your link"}
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

          <SwitchEdit edit={editPatch} setEdit={setEditPatch} text={"QRCode Patch"}>
            <Field 
              type={"select"}
              value={datas.bgColor}
              options={options}
            />
          </SwitchEdit> 

        </View>
  )
}