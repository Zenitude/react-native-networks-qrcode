import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { colors, icons } from "@/constants";
import { Context } from "@/context/Context";

type SelectFieldProps = {
    data : {title: string}[];
    setter: React.Dispatch<React.SetStateAction<QrcodeType>>
}

export default function SelectField({data, setter}: SelectFieldProps) {
    const { theme } = useContext(Context)!;

    const styles = StyleSheet.create({
        label: {
            color: theme === 'dark' ? colors.dark.text : colors.light.text,
            marginBottom: -15
        },
        dropdownButtonStyle: {
            flex: 1,
            height: 45,
            backgroundColor: theme === 'dark' ? colors.dark.backgroundField : colors.light.backgroundField,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 12,
        },
        dropdownButtonTxtStyle: {
            flex: 1,
            fontSize: 18,
            fontWeight: '500',
            color: theme === 'dark' ? colors.dark.text : colors.light.text,
        },
        dropdownButtonArrowStyle: {
            width: 25,
            height: 25
        },
        dropdownButtonIconStyle: {
            width: 25,
            height: 25,
            marginRight: 8,
        },
        dropdownMenuStyle: {
            backgroundColor: theme === 'dark' ? colors.dark.backgroundField : colors.light.backgroundField,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: theme === 'dark' ? colors.dark.theme.secondary : colors.light.theme.secondary,
        },
        dropdownItemStyle: {
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: 12,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 8,
            borderBottomWidth: 2,
            borderBottomColor: theme === 'dark' ? colors.dark.theme.primary : colors.light.theme.primary,
            borderTopWidth: 2,
            borderTopColor: theme === 'dark' ? colors.dark.theme.primary : colors.light.theme.primary,
        },
        dropdownItemTxtStyle: {
            flex: 1,
            fontSize: 18,
            fontWeight: '500',
            color: theme === 'dark' ? colors.dark.text : colors.light.text,
        },
        dropdownItemIconStyle: {
            width: 25,
            height: 25,
            marginRight: 8,
        },
      });

    const selectChoice = (selectedItem: {title: string, value: number}, index: number) => {
        setter((prev) => {
            const previous = {...prev};
            previous.qrcode.quietzone = selectedItem.value
            return previous;
        })
    }

    return (
        <SelectDropdown
            data={data}
            onSelect={selectChoice}
            renderButton={(selectedItem, isOpened) => {
                return (
                    <View style={styles.dropdownButtonStyle}>
                        <Text style={styles.dropdownButtonTxtStyle}>
                            {(selectedItem && selectedItem.title) || 'Select margin'}
                        </Text>
                        <Image 
                            source={isOpened ? (theme === 'dark' ? icons.chevronUp : icons.chevronUpLight) : (theme === 'dark' ? icons.chevronDown : icons.chevronDownLight)} 
                            resizeMode="contain"
                            style={styles.dropdownButtonArrowStyle} 
                        />
                    </View>
                );
            }}
            renderItem={(item, index, isSelected) => {
            return (
                <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: theme === 'dark' ? colors.dark.background : colors.light.background})}}>
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
            );
            }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
        defaultValue={"Medium"}
        />
    )
}

