type ButtonModalProps = {
    styles: {
        styleContainer: StyleProp<any>;
        styleButton: StyleProp<any>;
    }
    setter: React.Dispatch<React.SetStateAction<any>>
    data: any;
    children: React.ReactNode;
}