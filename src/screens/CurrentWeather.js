import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../util/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    bodyWrapper,
    container,
    description,
    feels,
    highLow,
    highLowMapper,
    tempStyles,
  } = styles;

  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather,
  } = weatherData;

  let weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView
      style={[wrapper, weatherType[weatherCondition].backgroundColor]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color={'white'}
        />
        <Text style={tempStyles}>{temp}°</Text>
        <Text style={feels}>Feels like {feels_like}°</Text>
        <RowText
          messageOne={`High: ${temp_max}°`}
          messageTwo={`Low: ${temp_min}°`}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
          containerStyles={highLowMapper}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        messageOneStyles={description}
        messageTwoStyles={highLow}
        containerStyles={bodyWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLowMapper: {
    flexDirection: 'row',
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
});

CurrentWeather.propTypes = {
  weatherData: PropTypes.any,
};

export default CurrentWeather;
