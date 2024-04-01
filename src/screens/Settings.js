import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChangeThemeButton from '../components/ChangeThemeButton';
import themeStyles from '../styles/theme';
import HeaderContent from '../navigation/HeaderContent';

const Settings = () => {
    const navigation = useNavigation();
    const { bgColor, textColor } = themeStyles();

    return (
        <>
            <HeaderContent navigation={navigation} />
            <View style={[styles.container, bgColor]}>
                <ChangeThemeButton />
            </View>
        </>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
