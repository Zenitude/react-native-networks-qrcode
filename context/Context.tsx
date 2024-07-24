import React, { useState, createContext } from "react";
import { colors, icons } from "@/constants";

export const Context = createContext<ContextType | null>(null);

export default function ContextProvider({children}: ContextProps) {
    const [ datas, setDatas ] = useState({
        fgColor: colors.black,
        bgColor: colors.white,
        qrcode: {
            defaultValue: "https://www.google.com/",
            value: "",
            quietzone: 10,
            size: 200,
            logo: icons.zen
        } 
    });

    return (
        <Context.Provider value={{datas, setDatas}}>
            {children}
        </Context.Provider>
    )
}