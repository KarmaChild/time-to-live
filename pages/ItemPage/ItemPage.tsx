import {View, StyleSheet, Text, TextInput, Dimensions, Button, Platform} from "react-native"
import React, {useState} from "react"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import {SaveDeleteButton} from "../../components/SaveDeleteButton/SaveDeleteButton"
import {AddItemToAsyncStorage} from "../../utils/AsyncStorage/addItemToAsyncStorage"
import {deleteItemFromAsyncStorage} from "../../utils/AsyncStorage/deleteItemsFromAsyncStorage"
import {formatDate} from "../../utils/Date/formatDate"
import Modal from "react-native-modal"

const windowWidth = Dimensions.get('window').width

type props = {
    id: string
    name: string
    date: string
    route: any
    navigation: any
}

export const ItemPage: React.FC<props> = ({ route, navigation}) => {
    const { id, name, date } = route.params
    console.log('params', id, name, date )
    const [_name, setName] = useState(name)
    const [_date, setDate] = useState(date)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false)

    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight =Dimensions.get("window").height

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const toggleDatePicker = () => {
        setDatePickerVisibility(!isDatePickerVisible)
    }

    const handleConfirm = (date: Date) => {
        setDate(date)
        toggleDatePicker()
    }

    const addItem = async () => {
        await AddItemToAsyncStorage(id || '', _name, _date).then(async () => {
            console.log(`${_name} added to Async Storage`)
            navigation.goBack()
        }).catch(console.error)
    }

    const deleteItem = async () => {
        await deleteItemFromAsyncStorage(id).then(() => {
            console.log('item deleted')
            navigation.goBack()
            toggleModal()
        }).catch(console.error)
    }

    return (
        <View style={styles.itemPageContainer}>
            <Modal
                isVisible={isModalVisible}
                deviceWidth={deviceWidth}
                deviceHeight={deviceHeight}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalText}>Are you sure you want to delete{name ? ` ${_name}?` : `?`}</Text>
                    <View style={styles.modalButtons}>
                        <View style={{marginRight: 10}}>
                            <Button title='Yes' onPress={deleteItem}/>
                        </View>
                        <Button title='No' onPress={toggleModal}/>
                    </View>
                </View>
            </Modal>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Name</Text>
                <TextInput style={styles.input} value={_name} onChangeText={setName}/>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>Date of expiry</Text>
                <TextInput style={styles.input} value={_date ? formatDate(new Date(_date)) : ""} onFocus={toggleDatePicker}/>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={toggleDatePicker}
            />
            <View style={styles.saveDelContainer}>
                <SaveDeleteButton onPress={addItem} save={true} disabled={_name === '' || _date === null}/>
                <SaveDeleteButton onPress={toggleModal} save={false} disabled={_name === '' || _date === null}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemPageContainer: {
        position: 'absolute',
        top: 30,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameContainer: {
        position: 'absolute',
        top: 80,
        left: 20,
    },
    nameText: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#fff',
        left: 10
    },
    input: {
        top: 5,
        width: (0.9 * windowWidth),
        height: 60,
        borderRadius: 15,
        backgroundColor: '#2A2B38',
        fontFamily: 'Light',
        fontSize: 16,
        color: '#fff',
        padding: 10
    },
    dateContainer: {
        position: 'absolute',
        top: 180,
        left: 20,
    },
    dateText: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#fff',
        left: 10
    },
    saveDelContainer: {
        position: 'absolute',
        flexDirection: 'row',
        top: 300,
        left: windowWidth/2 - 45,
    },
    modal: {
        alignItems: 'center',
        right: 'auto',
        width: 320,
        height: 200,
        backgroundColor: "#2A2B38",
        borderRadius: 8
    },
    modalText: {
        textAlign: 'center',
        width: "70%",
        top: 60,
        fontFamily: 'Regular',
        fontSize: 18,
        color: '#fff',
    },
    modalButtons: {
        top: 70,
        flexDirection: 'row',
    },
})