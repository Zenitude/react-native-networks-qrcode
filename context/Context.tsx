import React, { useState, createContext } from "react";
import { colors, icons } from "@/constants";

export const Context = createContext<ContextType | null>(null);

export default function ContextProvider({children}: ContextProps) {
    const [ datas, setDatas ] = useState({
        link: "",
        fgColor: colors.black,
        bgColor: colors.white,
        qrcode: {
            value: "",
            includeMargin: true,
            size: 250,
            level: "M",
            imageSettings: {
                src: icons.zen,
                x: undefined,
                y: undefined,
                height: 50,
                width: 50,
                excavate: true
            }
        } 
    });

    return (
        <Context.Provider value={{datas, setDatas}}>
            {children}
        </Context.Provider>
    )
}