import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import themeStyles from '../styles/theme';

const SingleCard = ({ item }) => {
    const { textColor, cardBg } = themeStyles();

    return (
        <Card style={[styles.card, cardBg]}>
            <Card.Content>
                <Title style={[styles.title, textColor]}>{item.name.en}</Title>
                <Paragraph style={[styles.subtitle, textColor]}>{item.name.ar}</Paragraph>
            </Card.Content>
        </Card>
    );
};

export default SingleCard;

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
    },
});
