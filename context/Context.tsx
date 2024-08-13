import React, { useState, createContext } from "react";
import { colors, icons } from "@/constants";
import { Appearance } from "react-native";

export const Context = createContext<ContextType | null>(null);

export default function ContextProvider({children}: ContextProps) {
    const [ theme, setTheme ] = useState(Appearance.getColorScheme());
    const [ datas, setDatas ] = useState({
        fgColor: colors.black,
        bgColor: colors.white,
        qrcode: {
            defaultValue: "https://www.google.com/",
            value: "",
            quietzone: 10,
            size: 260,
            logo: icons.zen
        } 
    });

    return (
        <Context.Provider value={{datas, setDatas, theme, setTheme}}>
            {children}
        </Context.Provider>
    )
}