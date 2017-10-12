'use strict';

import React from 'react';
import { Alert, Animated, StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import Global from '../constants/Global';
import UIConstants from '../constants/UIConstants';
import ActionTypes from '../constants/ActionTypes';
import { fetchData } from '../store/MZStore';

import SectionHeader from './components/SectionHeader';
import MoreFooter from './components/MoreFooter';
import MiniEntranceView from './components/home/MiniEntranceView';
import SlideView from './components/SlideView';
import AlbumCell from './components/home/AlbumCell';
import FilmReviewCell from './components/home/FilmReviewCell';

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);
const SectionItemSeparator = () => (<View style={styles.separator}></View>);
class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageData: null
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
_renderSectionFooter = (sectionItem) => {
  return (
    <MoreFooter moreAction={this._moreAlbumAction}/>
  );
}




_renderHotAlbumItem = (itemInfo) => {
  console.log('_renderHotAlbumItem');
  console.log(itemInfo);

  return (
    <AlbumCell albumItem={itemInfo.item} />
  );

}


_renderFilmReviewItem = (itemInfo) => {
  console.log('_renderFilmReviewItem');
  console.log(itemInfo);
  return (
    <FilmReviewCell reviewItem={itemInfo.item} />
  );
}


_renderCellSeparator = (sectionID, rowID, adjacentRowHighlighted) => {
  console.log('_renderSeparator');
  return (
    <View style={styles.cellSeparator}></View>
  );
}

_keyExtractor = ((item, index) => {
  let key = "Explore" + item.title + index;
  return key;
})



render() {
  console.log('Start render');
  console.log(this.state.pageData);
  if (this.state.pageData == undefined) {
    return (<View/>);
  }

  let sectionList = [];
  let hotAlubmZone = this.state.pageData.hotAlubmZone;
  if (hotAlubmZone.items != undefined) {
    let albumSeciton = {
      key: 'HotAlbum',
      title: hotAlubmZone.title ? hotAlubmZone.title : '',
      data: hotAlubmZone.items,
      renderItem: this._renderHotAlbumItem
    }
    sectionList.push(albumSeciton);
  }

  let filmReviewZone = this.state.pageData.filmReviewZone;
  if (filmReviewZone.items != undefined) {
    let filmReviewSeciton = {
      key: 'FilmReview',
      title: filmReviewZone.title ? filmReviewZone.title : '',
      data: filmReviewZone.items,
      renderItem: this._renderFilmReviewItem
    }
    sectionList.push(filmReviewSeciton);
  }

  console.log(sectionList);
  return (
    <AnimatedSectionList
      stickySectionHeadersEnabled = {false}
      ListHeaderComponent={this._renderHeader}
      renderSectionHeader={this._renderSectionHeader}
      renderSectionFooter={this._renderSectionFooter}
      renderSeparator={this._renderSeparator}
      keyExtractor={this._keyExtractor}
      ItemSeparatorComponent={this._renderCellSeparator}

      sections={sectionList} />
    );
  }


  _moreAlbumAction = ()=> {

  }

  _moreFilmReviewAction = ()=> {

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

  cellSeparator: {
    height: 0.5,
    backgroundColor: '#e9e9ef'
  }

});

module.exports = HomeScreen;
