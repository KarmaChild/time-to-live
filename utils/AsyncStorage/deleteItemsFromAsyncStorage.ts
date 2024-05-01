import AsyncStorage from "@react-native-async-storage/async-storage"

export const deleteItemFromAsyncStorage = async (id: string) => {
    try {
        const existingItems = await AsyncStorage.getItem('items')
        if (!existingItems) {
            console.log('No items found to delete')
            return
        }

        let items = JSON.parse(existingItems)
        items = items.filter((item: any) => item.id !== id)

        await AsyncStorage.setItem('items', JSON.stringify(items))
        console.log('Item deleted successfully')
    } catch (error) {
        console.error('Error deleting item:', error)
    }
}