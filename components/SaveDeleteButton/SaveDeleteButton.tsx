import {StyleSheet, TouchableOpacity} from "react-native";
import { Image } from 'expo-image'
import React from "react";


type props = {
    onPress: () => void;
    save: boolean
    disabled: boolean
}

export const SaveDeleteButton: React.FC<props> = ({onPress, save, disabled}) => {
    return (
        save ? (
            <TouchableOpacity style={[styles.saveContainer, disabled && {display: 'none'}]} onPress={onPress} disabled={disabled}>
                <Image source={require("../../assets/save.svg")} style={styles.saveImg}/>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={[styles.delContainer, disabled && {display: 'none'}]} onPress={onPress} disabled={disabled}>
                <Image source={require("../../assets/delete.svg")} style={styles.delImg}/>
            </TouchableOpacity>
        )
    )
}

const styles = StyleSheet.create({
    saveContainer: {
        width: 45,
        height: 45,
        borderRadius: 22,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    saveImg: {
        width: 30,
        height: 30,
    },
    delContainer: {
        width: 45,
        height: 45,
        borderRadius: 22,
        backgroundColor: '#D22B2B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    delImg: {
        width: 30,
        height: 30,
    },
})