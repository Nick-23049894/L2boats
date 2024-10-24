import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Boat = ({ name, description, image}) => {
    return (
      <View>

          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Icon name="ship" size={30} color="#007bff" />
              <Text style={{ marginLeft: 10 }}>{name}</Text>
          </View>
          <Text>{description}</Text>
          <Image
            source={image}
            style={styles.image}
          />
      </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginBottom: 10,
    },
});

export default Boat;
