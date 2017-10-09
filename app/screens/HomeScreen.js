'use strict';

import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import Global from '../constants/Global';
import UIConstants from '../constants/UIConstants';
import ActionTypes from '../constants/ActionTypes';
import { fetchData } from '../store/MZStore';

import SectionHeader from './components/SectionHeader'
import MiniEntranceView from './components/home/MiniEntranceView';
import SlideView from './components/SlideView';
import AlbumCell from './components/home/AlbumCell';


class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageData: {
        bannerZone: {},
        miniEntranceZone: {}
      }
    }
  }


  componentDidMount() {
    var action = {type: ActionTypes.HOME_PAGE, playload: 'HomePage'};
    fetchData(action).then((result) => {
      // console.log('Result')
      this.setState({
        pageData: result
      });
    }).catch(function(result) {

    });
  }

  _renderHeader = () => {
    console.log('render header')
    return (
      <View style={{backgroundColor:'#ffffff'}}>
        {
          this.state.pageData.bannerZone ?
           <SlideView
             style={styles.slide}
             height={Math.floor(SCREEN_WIDTH*0.333)}
             slideZone={this.state.pageData.bannerZone} /> : null
        }
        {
          this.state.pageData.miniEntranceZone ?
          <MiniEntranceView
            entranceZone={this.state.pageData.miniEntranceZone}/> : null
        }

      </View>
    );
  }



  _renderSectionHeader = (sectionItem) => {
    return (
      <SectionHeader title={sectionItem.section.title} />
    );
  }

  _renderItem = (item) => {
    console.log(item);
    return (
      <TouchableOpacity style={styles.sectionItem}>
        <Image style={styles.itemThumb} source={{ uri: item.imgUrl }} />
        <View style={styles.itemTitleView}>
          <Text style={styles.itemTitle} numberOfLines={2}>
            { item.title }
          </Text>
        </View>
        <View style={styles.itemSubtitleView}>
          <Text style={styles.itemSubtitlePrefix}>
            { item.subtitlePrefix }
          </Text>
          <Text style={styles.itemSubtitleSufix}>
            { item.subtitleSufix }
          </Text>
        </View>
      </TouchableOpacity>
    );

  }


_renderHotAlbumItem = (itemInfo) => {
  console.log('_renderHotAlbumItem');
  console.log(itemInfo);

  return (
    <AlbumCell albumItem={itemInfo.item} />
  );

}

_keyExtractor = ((item, index) => {
  let key = "Explore" + item.title + index;
  return key;
})



render() {
  console.log('Start render');
  console.log(this.state.pageData);
  return (
    this.state.pageData.hotAlubmZone ?
    <SectionList
      stickySectionHeadersEnabled = {false}
      ListHeaderComponent={this._renderHeader}
      renderSectionHeader={this._renderSectionHeader}
      keyExtractor={this._keyExtractor}
      sections={[
        { key: 'sectionList',
          title: '热门合辑',
          data: this.state.pageData.hotAlubmZone ? this.state.pageData.hotAlubmZone.items : [],
          renderItem: this._renderHotAlbumItem }
      ]}>
    </SectionList>
    : null
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flex: 1,
  },

  slide: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: Math.floor(SCREEN_WIDTH*0.333)
  },

});

module.exports = HomeScreen;
