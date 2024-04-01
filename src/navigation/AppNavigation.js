import { StatusBar } from 'expo-status-bar'
import { NavigationContainer, DarkTheme, DefaultTheme, } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Settings from '../screens/Settings'
import { useTheme } from '../context/ThemeContext'
import DrawerContent from './DrawerContent'

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    const { theme } = useTheme();

    return (
        <>
            <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
            <NavigationContainer
                theme={theme === 'dark' ? DarkTheme : DefaultTheme}
            >
                <Drawer.Navigator
                    drawerContent={props => <DrawerContent {...props} />}
                    screenOptions={{
                        drawerType: "front",
                        headerShown: false,
                    }}
                >
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Settings" component={Settings} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigation
