import {StyleSheet, TouchableOpacity, View} from "react-native"
import { Image } from 'expo-image'
import React from "react"

type props = {
    onPress: () => void,
}

export const AddItemButton: React.FC<props> = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.addItemContainer}
                          onPress={onPress}>
            <View>
                <Image source={require("../../assets/plus.svg")}
                       style={styles.addItemPlusContainer}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addItemContainer: {
        width: 80,
        height: 80,
        borderRadius: 44,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addItemPlusContainer: {
        width: 55,
        height: 55,
    }
})