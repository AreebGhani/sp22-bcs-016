// CustomHeader.js
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../context/ThemeContext'
import themeStyles from '../styles/theme';

const HeaderContent = () => {
    const navigation = useNavigation();
    const { theme } = useTheme();
    const { bgColor, textColor } = themeStyles();

    const iconColor = theme === 'light' ? '#1E1E1E' : '#FFFFFF';

    return (
        <View style={[styles.container, bgColor]}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <MaterialCommunityIcons name="menu" color={iconColor} size={26} />
            </TouchableOpacity>
            <View style={styles.heading}>
                <Text style={[styles.headingGreeting, textColor]}>Assalamu'alaikum,</Text>
                <Text style={[styles.title, textColor]}>Siti Aisyah</Text>
            </View>
            <Image
                style={styles.logo}
                source={require("../../assets/favicon.png")}
            />
        </View>
    );
};

export default HeaderContent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    heading: {
        flexDirection: 'column',
        justifyContent: 'center',
        justifyContent: 'center',
    },
    headingGreeting: {
        fontSize: 12,
        fontWeight: '300',
        textAlign: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    logo: {
        borderRadius: 100,
        margin: 5
    }
});
