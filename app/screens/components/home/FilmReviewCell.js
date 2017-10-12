import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DynamicZone, DynamicItem } from '../../../entity/DynamicZone'
import PropTypes from 'prop-types';



export default class FilmReviewCell extends Component {
  static propTypes = {
    reviewItem: PropTypes.object
  }

  render() {
    let itemInfo = this.props.reviewItem;
    console.log('Render Film Review cell');
    console.log(itemInfo);
    return (
      <TouchableOpacity style={styles.reviewCell}>
        <View style={styles.titleView}>
          <Text style={styles.title} numberOfLines={1}>
            { itemInfo.title }
          </Text>
          <Text style={styles.subtitle} numberOfLines={2}>
            { itemInfo.subtitle }
          </Text>
          <View style={styles.detail}>
            <Image style={styles.authorAvatar} source={{ uri: itemInfo.extInfo.avatarUrl }} />
            <Text style={styles.timeText} numberOfLines={1}>
              { itemInfo.extInfo.createTime }
            </Text>
            <View style={styles.comments}>
              <Text style={styles.commentCount}>
                { itemInfo.extInfo.commentCount }
              </Text>
              <Image source={require('../../../../assets/info_icon_hot.png')}/>
            </View>
          </View>
        </View>
        <Image style={styles.thumb} source={{ uri: itemInfo.imgUrl }} />
      </TouchableOpacity>
    );
  };
}



const styles =  StyleSheet.create({

    reviewCell: {
      backgroundColor: '#fefefe',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      height: 100,
      width: SCREEN_WIDTH,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
    },

    thumb: {
      backgroundColor: '#F5FCFF',
      alignItems: 'center',
      width:  120,
      height: 90,
      flexShrink: 0,
    },

    titleView: {
      flex: 1,
      height: 90,
      paddingRight: 5,
      flexShrink: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    title: {
      fontSize: 15,
      padding: 3,
      color: 'black',
      height: 24,
    },

    subtitle: {
      fontSize:13,
      padding:4,
      color:'#cccccc'
    },

    detail: {
      height: 20,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    authorAvatar: {
      width: 20,
      height: 20,
      backgroundColor: '#ccc'
    },

    timeText: {
      fontSize: 12,
      color: '#ccc',
    },

    comments: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    commentCount: {
      paddingRight: 4,
      fontSize: 12,
      color: '#ccc',
    }

});
