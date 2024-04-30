import AsyncStorage from "@react-native-async-storage/async-storage";

export const deleteItemFromAsyncStorage = async () => {
    try {
        await AsyncStorage.removeItem('items');
        console.log('All items deleted successfully');
    } catch (error) {
        console.error('Error deleting items:', error);
    }
}