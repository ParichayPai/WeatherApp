import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherType } from '../util/weatherType';
import moment from 'moment';

const ListItem = ({ dt_txt, min, max, condition }) => {
  const { item, temp, date, dateTextWrapper: dateStyles } = styles;
  moment;
  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color={'white'} />
      <View style={dateStyles}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'indianred',
    padding: 20,
    borderWidth: 5,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  dateTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
});

ListItem.propTypes = {
  dt_txt: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  condition: PropTypes.string,
};

export default ListItem;
