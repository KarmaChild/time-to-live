import {StyleSheet, View} from "react-native"
import {Item} from "../../components/Item/Item"
import {AddItemButton} from "../../components/AddItemButton/AddItem"
import React from "react"
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const items = [
    { name: "Hot Chocolate", date: "3 days left" },
    { name: "Garlic Press", date: "14 days left" },
    { name: "Egg boiler", date: "23 days left" },
]

export const Home= () => {

    return (
        <View style={styles.homeContainer}>
            <View style={styles.items}>
                {
                    items.map((item, index) => (
                        <Item key={index} name={item.name} date={item.date}/>
                    ))
                }
            </View>
            <View style={styles.AddItem}>
                <AddItemButton/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    items: {
        position: 'absolute',
        top: 60,
    },
    AddItem: {
        position: 'absolute',
        top: windowHeight-113,
        left: windowWidth-108,
    },
});