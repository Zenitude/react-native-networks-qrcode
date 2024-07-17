type NetworksType = {
    icon: ImageSourcePropType;
    link: string;
    text?: string;
}

type NetworksProps = {
    icons: NetworksType[];
}

type ModalLinksProps = {
    showModal: boolean;
    setter: React.Dispatch<React.SetStateAction<boolean>>;
}