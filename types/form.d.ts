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

type SwitchEditProps = {
    edit: boolean;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
    text: string;
    children: React.ReactNode;
}

type FormContactProps = {
    styles : StyleProps<any>
    datas : DatasContact;
    setter: React.Dispatch<React.SetStateAction<DatasContact>>;
}

type DatasContact = {
    from: string;
    createdAt: string;
    message: string;
}