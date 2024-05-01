import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

export const Item = ( props: {id?: string, name: string, date: string, onPress: () => void}) => {
    return (
        <TouchableOpacity style={[
            styles.itemContainer
        ]}
                          onPress={props.onPress}
        >
            <View style={styles.itemNameContainer}>
                <Text style={styles.itemName}>{props.name}</Text>
            </View>
            <View style={styles.itemDateContainer}>
                <Text style={styles.itemDate}>{props.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        height: 55,
        width: 390,
    },
    itemNameContainer: {
        position: 'absolute',
        top: 15,
        left: 20,
    },
    itemName: {
        fontFamily: 'JosefinSans-Regular',
        fontSize: 26,
        color: '#fff',
    },
    itemDateContainer: {
        position: 'absolute',
        top: 15,
        right: 35,
    },
    itemDate: {
        fontFamily: 'JosefinSans-Light',
        fontSize: 24,
        color: '#fff',
    },
})