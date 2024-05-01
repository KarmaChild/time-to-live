import AsyncStorage from "@react-native-async-storage/async-storage"


export const getItemsFromAsyncStorage = async () => {
    try {
        const items = await AsyncStorage.getItem('items')
        return items ? JSON.parse(items) : []
    } catch (error) {
        console.error('Error retrieving items:', error)
        return []
    }
}