import {View} from "react-native"
import {styles} from './item.style'

export const Item = (props: {name: string, date: string}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemNameContainer}>
                <Text style={styles.itemName}>{props.name}</Text>
            </View>
            <View style={styles.itemDateContainer}>
                <Text style={styles.itemDate}>{props.date}</Text>
            </View>
        </View>
    )
}