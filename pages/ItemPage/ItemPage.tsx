import {View, StyleSheet, Text, TextInput} from "react-native";
import {useState} from "react";

export const ItemPage = () => {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")

    return (
        <View style={styles.itemPageContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Name</Text>
                <TextInput style={styles.nameInput} value={name} onChangeText={setName}/>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>Date of expiry</Text>
                <TextInput style={styles.dateInput} value={date} onChangeText={setDate}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemPageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    nameContainer: {
        position: 'absolute',
        top: 80,
        left: 20,
    },
    nameText: {
        fontFamily: 'JosefinSans-Regular',
        fontSize: 26,
        color: '#fff',
        left: 10
    },
    nameInput: {
        top: 5,
        width: 350,
        height: 60,
        borderRadius: 15,
        backgroundColor: '#2A2B38',
        fontFamily: 'JosefinSans-Light',
        fontSize: 26,
        color: '#fff',
        padding: 10
    },
    dateContainer: {
        position: 'absolute',
        top: 180,
        left: 20,
    },
    dateText: {
        fontFamily: 'JosefinSans-Regular',
        fontSize: 26,
        color: '#fff',
        left: 10
    },
    dateInput: {
        top: 5,
        width: 350,
        height: 60,
        borderRadius: 15,
        backgroundColor: '#2A2B38',
        fontFamily: 'JosefinSans-Light',
        fontSize: 26,
        color: '#fff',
        padding: 10
    },
})