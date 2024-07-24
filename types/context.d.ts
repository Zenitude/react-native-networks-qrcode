type ContextProps = {
    children: React.ReactNode;
}

type ContextType = {
    datas: QrcodeType,
    setDatas: React.Dispatch<React.SetStateAction<QrcodeType>>,
}

type QrcodeType = {
    fgColor: string;
    bgColor: string;
    qrcode: {
        defaultValue: string;
        value: string;
        quietzone: number;
        size: number;
        logo: ImageSourcePropType;
    };
}

type ImageSettings = {
    src: any;
    x: undefined;
    y: undefined;
    height: number;
    width: number;
    excavate: boolean;
}