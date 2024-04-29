import {StyleSheet, TouchableOpacity, View} from "react-native"
import { Image } from 'expo-image'
import React from "react";
import {Link} from "react-router-native";

type Props = {
    onPress: () => void
}
export const AddItemButton = () => {

    return (
        <Link to="/itempage">
            <TouchableOpacity style={styles.addItemContainer}
            >
                <View>
                    <Image source={require("../../assets/plus.svg")}
                           style={styles.addItemPlusContainer}
                    />
                </View>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    addItemContainer: {
        width: 88,
        height: 88,
        borderRadius: 44,
        backgroundColor: '#008080',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addItemPlusContainer: {
        width: 55,
        height: 55,
    }
})