import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DynamicZone, DynamicItem } from '../../../entity/DynamicZone'
import PropTypes from 'prop-types';



export default class AlbumCell extends Component {
  static propTypes = {
    albumItem: PropTypes.object
  }

  render() {
    let itemInfo = this.props.albumItem;
    console.log('Render album cell');
    console.log(itemInfo);
    return (
      <TouchableOpacity style={styles.albumCell}>
        <Image style={styles.albumPhoto} source={{ uri: itemInfo.imgUrl }} />
        <View style={styles.albumTitleView}>
          <Text style={styles.albumTitle} numberOfLines={2}>
            { itemInfo.title }
          </Text>
          <Text style={styles.albumSubtitle}>
            { itemInfo.subtitle }
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
}



const styles =  StyleSheet.create({

    albumCell: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      height: 164,
      backgroundColor: '#fefefe'
    },

    albumPhoto: {
      width: SCREEN_WIDTH,
      height: 120,
    },

    albumTitleView: {
      paddingLeft: 10,
      height: 44,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    albumTitle: {
      fontSize: 15,
      paddingLeft: 5,
      paddingTop: 5,
      paddingBottom: 4,
      color: 'black'
    },

    albumSubtitle: {
      fontSize: 13,
      paddingLeft: 5,
      paddingBottom: 5,
      color:'#ababab'
    },


    separator: {
      height: 4,
      backgroundColor: '#e9e9ef'
    }
});
