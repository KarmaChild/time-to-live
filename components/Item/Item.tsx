import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native"


const windowWidth = Dimensions.get('window').width

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
        fontFamily: 'Regular',
        fontSize: 18,
        color: '#fff',
    },
    itemDateContainer: {
        position: 'absolute',
        top: 20,
        right: 35,
    },
    itemDate: {
        fontFamily: 'Light',
        fontSize: 16,
        color: '#fff',
    },
})