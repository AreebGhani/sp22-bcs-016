import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import themeStyles from '../styles/theme';

const DrawerContent = (props) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { bgColor, textColor } = themeStyles();

  const itemBgColor = theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)';

  return (
    <View
      style={[styles.container, bgColor]}
    >
      <DrawerContentScrollView>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../../assets/favicon.png")}
          />
        </View>
        <DrawerItem
          style={[styles.item, { backgroundColor: itemBgColor }]}
          label={() => <Text style={[styles.text, textColor]}>Home</Text>}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <DrawerItem
          style={[styles.item, { backgroundColor: itemBgColor }]}
          label={() => <Text style={[styles.text, textColor]}>Settings</Text>}
          onPress={() => {
            navigation.navigate("Settings");
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 16,
    marginBottom: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    borderRadius: 20,
  },
  text: {
    marginLeft: 26,
    textAlign: 'center',
  }
});
