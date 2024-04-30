import AsyncStorage from '@react-native-async-storage/async-storage';
import {getDaysLeft} from "../Date/getDaysLeft";

export const AddItemToAsyncStorage = async (itemName: string, expiryDate: Date) => {
    try {
        const existingItems = await AsyncStorage.getItem('items');
        let items = existingItems ? JSON.parse(existingItems) : [];
        const nextId = items.length > 0 ? items[items.length - 1].id + 1 : 1
        const newItem = { id: nextId, name: itemName, date: getDaysLeft(expiryDate) };
        items.push(newItem);
        await AsyncStorage.setItem('items', JSON.stringify(items))
    } catch (error) {
        console.error('Error adding item:', error);
        return null
    }
};