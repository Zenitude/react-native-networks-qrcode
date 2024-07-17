type ContextProps = {
    children: React.ReactNode;
}

type ContextType = {
    datas: QrcodeType,
    setDatas: React.Dispatch<React.SetStateAction<QrcodeType>>,
}

type QrcodeType = {
    link: string;
    fgColor: string;
    bgColor: string;
    qrcode: {
        value: string;
        includeMargin: boolean;
        size: number;
        level: string;
        imageSettings: ImageSettings;
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