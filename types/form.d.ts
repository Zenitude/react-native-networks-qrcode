type FormType = {
    styles: StyleProp<any>;
    datas: QrcodeType;
    setterDatas: React.Dispatch<React.SetStateAction<QrcodeType>>;
    options: {title: string;}[]
}

type FieldProps = {
    type: KeyboardTypeOptions | string;
    value: string;
    setValue?: (text:string) => void;
    placeholder?: string;
    options?: {title:string}[];
}