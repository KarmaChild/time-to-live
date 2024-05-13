import {StyleSheet, Text, View} from "react-native"
import {Item} from "../../components/Item/Item"
import {AddItemButton} from "../../components/AddItemButton/AddItemButton"
import React, {useCallback, useEffect, useState} from "react"
import {Dimensions} from 'react-native'
import {useFonts} from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import {StatusBar} from "expo-status-bar"
import {getItemsFromAsyncStorage} from "../../utils/AsyncStorage/getItemsFromAsyncStorage"
import {getDaysLeft} from "../../utils/Date/getDaysLeft"
import {useFocusEffect} from "@react-navigation/native"
import {Image} from "expo-image"
import {ItemProps} from "../../types/types"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

type HomeProps = {
    navigation: any
}

SplashScreen.preventAutoHideAsync()

export const Home: React.FC<HomeProps>= ({ navigation }) => {
    const [appIsReady, setAppIsReady] = useState(false)
    const [fontsLoaded, fontError] = useFonts({
        'Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Light': require('../../assets/fonts/Poppins-Light.ttf'),
    })
    const [items, setItems] = useState<ItemProps[]>([])


    useEffect(() => {
        async function fetchData() {
            try {
                const items = await getItemsFromAsyncStorage();
                setItems(items);
                await SplashScreen.hideAsync();
                setAppIsReady(true);
            } catch (error) {
                console.warn(error);
            }
        }
        fetchData();
    }, [])

    useFocusEffect(
        useCallback(() => {
            async function fetchItems() {
                try {
                    const items = await getItemsFromAsyncStorage()
                    setItems(items)
                } catch (error) {
                    console.warn(error)
                }
            }
            fetchItems()
        }, [])
    )

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady && fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [appIsReady])

    if (!appIsReady) {
        return null
    }

    console.log('items', items)
    return (
        <View onLayout={onLayoutRootView} style={styles.homeContainer}>
            <StatusBar style='light'/>
            {/*<Text style={styles.header}>Home</Text>
            <Image  source={require("../../assets/icon.svg")} style={styles.headerImg}/>
            */}
            {/*<View style={styles.headerContainer}>
                <Text style={styles.header}>de-clutter</Text>
            </View>*/}
            {
                items.length > 0 ? (
                    <View style={styles.items}>
                        {
                            items.map((item, index) => (
                                <Item key={index}
                                      id={item.id || ''}
                                      name={item.name || ''}
                                      date={getDaysLeft(new Date(item.date))}
                                      onPress={() => navigation.navigate('ItemPage',
                                          {
                                              id: item.id,
                                              name: item.name,
                                              date: item.date,
                                          })
                                      }/>
                            ))
                        }
                    </View>
                ) : (
                    <View style={styles.noItems}>
                        <Image source={require("../../assets/sad.svg")} style={styles.saveImg}/>
                        <Text style={styles.noItemsText}>No items yet, Add items!</Text>
                    </View>
                )
            }
            <View style={styles.AddItem}>
                <AddItemButton onPress={() => navigation.navigate(
                    'ItemPage',
                    {
                        id: null,
                        name: null,
                        date: null,
                    }
                    )}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        position: 'absolute',
        top: 30,
        left: 0,
    },
    headerContainer: {
        top: 30,
        width: windowWidth,
        alignItems: 'center'
    },
    headerImg: {
        width: 50,
        height: 50
    },
    header: {
        fontFamily: 'Regular',
        fontSize: 30,
        color: '#007AFF',
    },
    items: {
        position: 'absolute',
        top: 60,
    },
    AddItem: {
        position: 'absolute',
        top: windowHeight-143,
        left: windowWidth-108,
    },
    noItems: {
        alignItems: 'center',
        top: windowHeight/4,
    },
    noItemsText: {
        fontFamily: 'Regular',
        fontSize: 20,
        color: '#2A2B38',
    },
    saveImg: {
        width: 100,
        height: 100,
    }
})
