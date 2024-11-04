import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar_container}>
        <View
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
         

         <Image 
            source={require('./assets/Avatar.png')}
            style={{width: 100, height: 100}}/>

<br></br>
          <Text style={{ maxWidth: 300 }}>
          A Senior Back-end developer & Software Engineer who translates prototypes to creative websites and software solutions.
          </Text>
        </View>
      </View>
      <View style={styles.details_container}>
        <View style={styles.item}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>Amani Alosaimi</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.data}>Ryadh</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Job:</Text>
          <Text style={styles.data}>Software Developer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  avatar_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.4,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  details_container: {
    backgroundColor: 'white',
    flex: 0.6,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flex: 0.25,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  label: {
    flex: 0.9,
    color: 'darkred',
    fontSize: 32,
  },
  data: {
    fontSize: 32,
  },
});
