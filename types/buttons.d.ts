type ButtonModalProps = {
    styles: {
        container: StyleProp<any>;
        button: StyleProp<any>;
    }
    setter: React.Dispatch<React.SetStateAction<any>>
    data: any;
    children: React.ReactNode;
}