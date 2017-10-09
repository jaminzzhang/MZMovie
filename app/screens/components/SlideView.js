import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import { DynamicZone, DynamicItem } from '../../entity/DynamicZone'
import PropTypes from 'prop-types';



export default class SlideView extends Component {


  static propTypes = {
    slideZone: PropTypes.object,
    height: Number
  }

  render() {
    let zone = this.props.slideZone;
    console.log('Render Slide Zone.')
    // console.log(zone);
    {
      if (zone.items == undefined) {
        return <View/>;
      }
    }
    return (
      <View>
        <Swiper
          height={this.props.height}
          dotColor ="white"
          activeDotColor = "#ed6d00"
          autoplay = {true}
          autoplayTimeout={3}
          paginationStyle  = {[{ position:'absolute',bottom:5,},{bottom:10}]}
          >
          {
            zone.items.map((item, i) => {
              return (
                <View key={i} style={styles.slide} >
                  <Image resizeMode='stretch' style={styles.slideImage} source={{ uri: item.imgUrl }} />
                </View>
              );
            })
          }
        </Swiper>
    </View>
    );
  };


}


const styles = StyleSheet.create({

    container: {
      flex: 1
    },

    slide: {
      flex: 1,
    },

    slideImage: {
      flex: 1,
      margin: 10,
    }
})
