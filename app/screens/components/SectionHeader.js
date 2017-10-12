import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DynamicZone, DynamicItem } from '../../entity/DynamicZone'
import PropTypes from 'prop-types';

export default class SectionHeader extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    let title = this.props.title;
    console.log('Render Sectioneader');
    console.log(title);
    return (
      <View style={styles.sectionHeader}>
        <View style={styles.separator} />
        <View style={styles.headerInner}>
          <Image source={require('../../../assets/title_point_r_left.png')}/>
          <Text style={styles.title}>{title}</Text>
          <Image source={require('../../../assets/title_point_r_right.png')}/>
        </View>
      </View>

    );
  };
}



const styles =  StyleSheet.create({


    sectionHeader: {
      flex: 1,
      width: SCREEN_WIDTH,
      backgroundColor: '#fefefe',
      height: 48,
      justifyContent: 'space-between',
    },

    headerInner: {
      flex: 1,
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    title: {
      fontSize: 16,
      padding: 5,
      color: 'black'
    },

    separator: {
      height: 8,
      backgroundColor: '#e9e9ef',
    }
});
