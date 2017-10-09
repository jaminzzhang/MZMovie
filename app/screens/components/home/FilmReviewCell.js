import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DynamicZone, DynamicItem } from '../../../entity/DynamicZone'
import PropTypes from 'prop-types';



export default class FilmReviewCell extends Component {
  static propTypes = {
    reviewInfo: PropTypes.object
  }

  render() {
    let itemInfo = this.props.reviewInfo;
    console.log('Render album cell');
    console.log(itemInfo);
    return (
      <TouchableOpacity style={styles.reviewCell}>
        <Image style={styles.thumb} source={{ uri: itemInfo.imgUrl }} />
        <View style={styles.titleView}>
          <Text style={styles.title} numberOfLines={2}>
            { itemInfo.title }
          </Text>
          <Text style={styles.subtitle}>
            { itemInfo.subtitle }
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
}



const styles =  StyleSheet.create({

    reviewCell: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      height: 64,
      paddingLeft: 10,
      paddingRight: 10,
    },

    thumb: {
      backgroundColor: '#F5FCFF',
      alignItems: 'center',
      justifyContent: 'center',
      width:  ,
      height: 44,
      backgroundColor: 'red'
    },

    titleView: {
      paddingLeft: 10,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    title: {
      fontSize: 16,
      padding: 3,
      color: 'black'
    },

    subtitle: {
      fontSize:13,
      padding:3,
      color:'#cccccc'
    }
});
