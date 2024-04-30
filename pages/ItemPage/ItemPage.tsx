import {View, StyleSheet, Text, TextInput, Dimensions} from "react-native"
import {useState} from "react"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import {SaveDeleteButton} from "../../components/SaveDeleteButton/SaveDeleteButton";

const windowWidth = Dimensions.get('window').width;

export const ItemPage = () => {
    const [name, setName] = useState("")
    const [date, setDate] = useState(new Date())
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const toggleDatePicker = () => {
        setDatePickerVisibility(!isDatePickerVisible);
    }

    const handleConfirm = (date: Date) => {
        setDate(date)
        toggleDatePicker();
    };

    return (
        <View style={styles.itemPageContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Name</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName}/>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>Date of expiry</Text>
                <TextInput style={styles.input} value={date.toDateString()} onFocus={toggleDatePicker}/>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={toggleDatePicker}
            />
            <View style={styles.saveDelContainer}>
                <SaveDeleteButton onPress={() => {}} save={true}/>
                <SaveDeleteButton onPress={() => {}} save={false}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemPageContainer: {
        position: 'absolute',
        top: 30,
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
    input: {
        top: 5,
        width: (0.9 * windowWidth),
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
    saveDelContainer: {
        position: 'absolute',
        flexDirection: 'row',
        top: 300,
        left: windowWidth/2 - 45,
    }
})