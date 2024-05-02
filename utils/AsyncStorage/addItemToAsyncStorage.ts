import AsyncStorage from '@react-native-async-storage/async-storage'
import {editItemExpiry, scheduleExpiryNotification} from "../Notification/scheduleExpiryNotification";

export const AddItemToAsyncStorage = async (itemId: string, itemName: string, expiryDate: Date) => {
    try {
        let items: any[] = []
        const existingItems = await AsyncStorage.getItem('items')
        if (existingItems) {
            items = JSON.parse(existingItems)
            if (itemId) {
                const index = items.findIndex(item => item.id === parseInt(itemId))
                if (index !== -1) {
                    items[index] = { id: parseInt(itemId), name: itemName, date: expiryDate }
                    //editItemExpiry(itemId, itemName,expiryDate)
                } else {
                    console.error('Item not found for update')
                    return null
                }
            } else {
                const nextId = items.length > 0 ? items[items.length - 1].id + 1 : 1
                items.push({ id: nextId, name: itemName, date: expiryDate })
                //scheduleExpiryNotification(nextId, itemName, expiryDate)
            }
        } else {
            items.push({ id: 1, name: itemName, date: expiryDate })
            //scheduleExpiryNotification('1', itemName, expiryDate)
        }
        
        await AsyncStorage.setItem('items', JSON.stringify(items))
        return items
    } catch (error) {
        console.error('Error adding/updating item:', error)
        return null
    }
}