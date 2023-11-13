import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <Text>Upcoming Weather</Text>
      <ImageBackground
        // eslint-disable-next-line no-undef
        source={require('../../assets/cat-img.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={({ item }) => (
            <ListItem
              condition={item.weather[0].main}
              dt_txt={item.dt_txt}
              min={item.main.temp_min}
              max={item.main.temp_max}
            />
          )}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
  },
});

UpcomingWeather.propTypes = {
  weatherData: PropTypes.array,
};

export default UpcomingWeather;
