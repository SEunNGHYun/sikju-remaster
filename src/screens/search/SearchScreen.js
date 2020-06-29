import React , {useState}from 'react';
import {
  View, Text, StyleSheet, TextInput
} from 'react-native';

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tinyLogo: {
    width: 400,
    height: 600,
  },
});

const SearchScreen = ({ navigation }) => {
  const [InputVal , changeInputVal] = useState("");
  return (
    <View style={styles.view}>
      <TextInput value={InputVal}/>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;
