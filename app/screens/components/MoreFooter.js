import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class MoreFooter extends Component {
  static propTypes = {
    moreAction: PropTypes.func
  }

  render() {
    return (
      <View style={styles.moreFooter}>
        <TouchableOpacity
          style={styles.moreButton}
          onPress={this.props.moreAction}
        >
        <Text style={styles.moreText}>更多</Text>
        <Image source={require('../../../assets/arrow_right_light.png')}></Image>
      </TouchableOpacity>
      </View>

    );
  };
}



const styles =  StyleSheet.create({


    moreFooter: {
      flex: 1,
      width: SCREEN_WIDTH,
      height: 40,
      backgroundColor: '#fefefe',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },


    moreButton: {
      padding: 5,
      width: 64,
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },

    moreText: {
      fontSize: 13,
      color: '#ccc',
    },

    separator: {
      height: 8,
      backgroundColor: '#e9e9ef',
    }
});
