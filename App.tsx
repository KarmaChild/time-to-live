import {Home} from "./pages/Home/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {ItemPage} from "./pages/ItemPage/ItemPage"

export default function App() {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                             screenOptions={{
                                 cardStyle: {
                                     backgroundColor: '#3D3E51',
                                 },
                             }}>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="ItemPage"
                              component={ItemPage}
                              options={{
                                  title: "",
                                  headerTransparent: true,
                                  headerBackTitleVisible: false,
                                  headerTintColor: '#007AFF'
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}