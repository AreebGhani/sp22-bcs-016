import React, { useState } from 'react';
import { View, StyleSheet, TextInput, FlatList } from 'react-native';
import themeStyles from '../styles/theme';
import { surah } from '../static/QuranData';
import SingleCard from '../components/SingleCard';
import { useTheme } from '../context/ThemeContext';

const Surah = () => {
  const { theme } = useTheme()
  const { bgColor, textColor } = themeStyles();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSurah = surah.filter(item =>
    item.name.en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={[styles.container, bgColor]}>
      <TextInput
        style={[styles.searchInput, textColor]}
        placeholderTextColor={theme === 'light' ? 'black' : 'white'}
        placeholder="Search Surah by English name"
        onChangeText={onChangeSearch}
        value={searchQuery}
        autoCapitalize="none"
      />
      <FlatList
        data={filteredSurah}
        renderItem={({ item }) => (
          <SingleCard item={item} />
        )}
      />
    </View>
  );
};

export default Surah;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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
  searchInput: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
