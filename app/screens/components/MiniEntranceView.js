import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DynamicZone, DynamicItem } from '../../entity/DynamicZone'
import PropTypes from 'prop-types';


export default class MiniEntranceView extends Component {

  static propTypes = {
    entranceZone: PropTypes.object
  }

  render() {
    const zone = this.props.entranceZone;
    console.log('Render Entrance Zone.')
    console.log(zone);
    return (
      <View style={styles.entrancesContainer}>
        {
          zone.items.map((item, i) => {
            return this._renderEntranceItem(item, i);
          })
        }
      </View>
    );
  };

  _renderEntranceItem = (item, i) => {
    return (
      <TouchableOpacity style={styles.entranceItem} key={i}>
        <Image style={styles.itemThumb} source={{ uri: item.imgUrl }} />
        <View style={styles.itemTitleView}>
          <Text style={styles.itemTitle} numberOfLines={2}>
            { item.title }
          </Text>
          <Text style={styles.itemSubtitle}>
            { item.subtitle }
          </Text>
        </View>
      </TouchableOpacity>
    );
  };


}



const styles =  StyleSheet.create({

    entrancesContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
    },

    entranceItem: {
      flexDirection: 'row',
      alignItems: 'center',
      width: SCREEN_WIDTH/2 - 20,
      height: 80,
    },

    itemThumb: {
      backgroundColor: '#F5FCFF',
      alignItems: 'center',
      width: 64,
      height: 64,
      backgroundColor: 'red'
    },

    itemTitleView: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    itemTitle: {
      fontSize: 13,
      padding: 3
    },

    itemSubtitle: {
      fontSize:13,
      padding:3,
      color:'#ff8202'
    }
});
