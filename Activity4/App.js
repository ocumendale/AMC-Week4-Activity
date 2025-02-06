import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA1 = [
  {
    id: '1',
    title: 'Dumilat',
  },
  {
    id: '2',
    title: 'Bumangon',
  },
  {
    id: '3',
    title: 'Magtupi',
  },
  {
    id: '4',
    title: 'Maglinis',
  },
  {
    id: '5',
    title: 'Magtoothbrush',
  },
  {
    id: '6',
    title: 'Mag-almusal',
  },
  {
    id: '7',
    title: 'Magtoothbrush Ulit',
  },
  {
    id: '8',
    title: 'Maghilamos',
  },
];

const DATA2 = [
  {
    id: '9',
    title: 'Mag-exercise',
  },
  {
    id: '10',
    title: 'Magpunas ng pawis',
  },
  {
    id: '11',
    title: 'Magpahinga',
  },
  {
    id: '12',
    title: 'Maligo',
  },
  {
    id: '13',
    title: 'Magtanghalian',
  },
  {
    id: '14',
    title: 'Maglinis ng Lamesa',
  },
  {
    id: '15',
    title: 'Maghugas ng Pinggan',
  },
  {
    id: '16',
    title: 'Magpunas ng Pinggan',
  },
  {
    id: '17',
    title: 'Magpahinga',
  },
  {
    id: '18',
    title: 'Manood ng Palabas',
  },
  {
    id: '19',
    title: 'Matulog',
  },
  {
    id: '20',
    title: 'Gumising',
  },
];

const DATA3 = [

  {
    id: '21',
    title: 'Magsaing',
  },
  {
    id: '22',
    title: 'Magluto',
  },
  {
    id: '23',
    title: 'Magdasal',
  },
  {
    id: '24',
    title: 'Maghapunan',
  },
  {
    id: '25',
    title: 'Matulog',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.textstyle}>Morning</Text>
      </TouchableOpacity>
        <FlatList
          data={DATA1}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
        <TouchableOpacity style={styles.button}>
        <Text style={styles.textstyle}>Afternoon</Text>
        </TouchableOpacity>
          <FlatList
          data={DATA2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          />
          <TouchableOpacity style={styles.button}>
      <Text style={styles.textstyle}>Evening</Text>
      </TouchableOpacity>
        <FlatList
          data={DATA3}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  textstyle: {
    fontSize: 50,
  }
});

export default App;