import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import Boat from './components/boats';

const App = () => {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.boatList}>
          <Text style={styles.title}>Get Boats for Sale</Text>
          <Boat
              name="Sea Ray 500 Sundancer"
              description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
              image={require('./img/sea_ray.jpg')}
          />
          <Boat
            name="Four Winns Horizon 180"
            description="A sporty look and refined details truly set the Horizon 180 above all others.,"
            image={require('./img/four_winns.jpg')}
          />
          <Boat
            name="Flipper 640 ST"
            description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
            image={require('./img/flipper.jpg')}
          />
          <Boat
            name="Princess V48"
            description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
            image={require('./img/princess.jpg')}
          />
          <Boat
            name="Bayliner 175 Bowrider"
            description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.,"
            image={require('./img/bayliner.jpg')}
          />
          <Boat
            name="Fairline Targa 47"
            description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
            image={require('./img/fairline.jpg')}
          />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f2f2f2',
  },
  boatList: {
    width: '100%',
    maxWidth: 600,
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default App;
