import {StyleSheet, View} from "react-native"
import {Item} from "../../components/Item/Item"
import {AddItemButton} from "../../components/AddItemButton/AddItem"
import React, {useCallback, useEffect, useState} from "react"
import {Dimensions} from 'react-native'
import {useFonts} from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import {StatusBar} from "expo-status-bar";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const items = [
    { name: "Hot Chocolate", date: "3 days left" },
    { name: "Garlic Press", date: "14 days left" },
    { name: "Egg boiler", date: "23 days left" },
]

type HomeProps = {
    navigation: any
}

SplashScreen.preventAutoHideAsync()

export const Home: React.FC<HomeProps>= ({ navigation }) => {
    const [appIsReady, setAppIsReady] = useState(false);
    const [fontsLoaded, fontError] = useFonts({
        'JosefinSans-Regular': require('../../assets/fonts/JosefinSans-Regular.ttf'),
        'JosefinSans-Light': require('../../assets/fonts/JosefinSans-Light.ttf'),
    })

    useEffect(() => {
        async function prepare() {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }
        prepare()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady && fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView} style={styles.homeContainer}>
            <StatusBar style='light'/>
            <View style={styles.items}>
                {
                    items.map((item, index) => (
                        <Item key={index} name={item.name} date={item.date}/>
                    ))
                }
            </View>
            <View style={styles.AddItem}>
                <AddItemButton onPress={() => navigation.navigate('ItemPage')}/>
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
    items: {
        position: 'absolute',
        top: 60,
    },
    AddItem: {
        position: 'absolute',
        top: windowHeight-143,
        left: windowWidth-108,
    },
});