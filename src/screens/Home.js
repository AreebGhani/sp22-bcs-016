import { Image, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderContent from '../navigation/HeaderContent';
import themeStyles from '../styles/theme';
import Surah from './Surah';
import Juz from './Juz';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
    const navigation = useNavigation();
    const { textColor } = themeStyles();

    return (
        <>
            <HeaderContent navigation={navigation} />
            <View style={styles.banner}>
                <Text style={[styles.bannerText, textColor]}>Reading Surah</Text>
                <Image
                    style={styles.bannerImg}
                    source={require("../../assets/1.jpg")}
                />
            </View>
            <Tab.Navigator>
                <Tab.Screen name="Surah" component={Surah} />
                <Tab.Screen name="Juz" component={Juz} />
            </Tab.Navigator>
        </>
    );
};

export default Home;

const styles = StyleSheet.create({
    banner: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    bannerText: {
        fontSize: 20,
        marginBottom: 20,
    },
    bannerImg: {
        height: 200,
        width: 370,
        borderRadius: 20,
    }
});
