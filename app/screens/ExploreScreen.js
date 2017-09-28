import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import Global from '../constants/Global';
import UIConstants from '../constants/UIConstants';
import ActionTypes from '../constants/ActionTypes';
import { fetchData } from '../store/MZStore';

import MiniEntranceView from './components/MiniEntranceView'


class ExploreScreen extends React.Component {

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
    console.log('start fetch explore page' + action);
    var that = this;
    fetchData(action).then((result) => {
      console.log('Result')
      console.log(result)
      console.log(this);
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
          this.state.pageData.bannerZone ? this._renderBanner() : null
        }
        {
          this.state.pageData.miniEntranceZone ?  <MiniEntranceView entranceZone={this.state.pageData.miniEntranceZone}/> : null
        }

      </View>
    );
  }




  _renderBanner = () => {
    console.log(this.state.pageData.bannerZone);
    return (
      <View>
        <Swiper
          height = {Math.floor(SCREEN_WIDTH*0.333)}
          dotColor ="white"
          activeDotColor = "#ed6d00"
          autoplayTimeout={1}
          paginationStyle  = {[{ position:'absolute',bottom:5,},{bottom:10}]}
          >
          {
            this.state.pageData.bannerZone.items.map((item, i) => {
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


  _renderSectionHeader = () => {
    return (
      <View style={styles.sectionHeader}>
        <View style={styles.headerInner}>
          <Image source={require('../../assets/title_point_r_left.png')}/>
          <Text style={{marginLeft: 10}}>精评推荐</Text>
          <Image source={require('../../assets/title_point_r_right.png')}/>
        </View>
      </View>
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
      contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between' }}
      stickySectionHeadersEnabled = {false}
      ListHeaderComponent={this._renderHeader}
      renderSectionHeader={this._renderSectionHeader}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      sections={[
        { key: 'sectionLis', data: this.state.pageData.hotAlubmZone ? this.state.pageData.hotAlubmZone.items : [] }
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
  },

  slideImage: {
    flex: 1,
    margin: 10,
  },

  sectionHeader: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: '#ededed',
    paddingTop: 10,
  },

  headerInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

});

module.exports = ExploreScreen;
