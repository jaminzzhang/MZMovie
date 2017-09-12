import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import Global from '../constants/Global'
import UIConstants from '../constants/UIConstants'


class ExploreScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bannerList: [
        {title: '#专题#Banner1', imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg'},
        {title: 'Banner2', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},
        {title: '测试长字串看看', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},
      ],

      miniEntranceList: [
        {
          title: '入口1',
          subtitle: '这是一个测试入口1',
          imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
          routerUrl: 'mzm://mz.com/e1'
        },
        {
          title: '入口2',
          subtitle: '这是一个测试入口2',
          imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
          routerUrl: 'mzm://mz.com/e2'
        }
      ],

      recommendFilmList: [
        {
          title: '测试1',
          imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
          subtitlePrefix: '122',
          subtitleSufix: '3232'
        },
        {
          title: '测试1',
          imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
          subtitlePrefix: '122',
          subtitleSufix: '3232'
        },
        {
          title: '测试1',
          imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
          subtitlePrefix: '122',
          subtitleSufix: '3232'
        }
      ],

      list: [
        {
          title: '电影推荐',
          key: 'recommend',
          items: [
            {
              title: '测试1',
              imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
              subtitlePrefix: '122',
              subtitleSufix: '3232'
            },
            {
              title: '测试1',
              imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
              subtitlePrefix: '122',
              subtitleSufix: '3232'
            },
            {
              title: '测试1',
              imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
              subtitlePrefix: '122',
              subtitleSufix: '3232'
            }
          ]
        },

        {
          title: '精彩影评',
          key: 'reviews',
          items: [
            {
              title: '测试1',
              imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
              subtitlePrefix: '122',
              subtitleSufix: '3232'
            },
            {
              title: '测试1',
              imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
              subtitlePrefix: '122',
              subtitleSufix: '3232'
            },
            {
              title: '测试1',
              imgUrl: 'http://api.shunliandongli.com/v1/Channel/content.json?channel_id=1',
              subtitlePrefix: '122',
              subtitleSufix: '3232'
            }
          ]
        }

      ],
    };
  }



  _renderHeader = () => {
    return (
      <View style={{backgroundColor:'#ffffff'}}>
        {
          this._renderBanner()
        }
        {
          this._renderEntrances()
        }
      </View>
    );
  }


  _renderBanner = () => {

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
            this.state.bannerList.map((item, i) => {
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

  _renderEntrances = () => {
    return (
      <View style={styles.entrancesContainer}>
        {
          this.state.miniEntranceList.map((item, i) => {
            return this._renderEntranceItem(item, i);
          })
        }
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
  return (
    <SectionList
      contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between' }}
      stickySectionHeadersEnabled = {false}
      ListHeaderComponent={this._renderHeader}
      renderSectionHeader={this._renderSectionHeader}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      sections={[
        { key: 'sectionLis', data: this.state.list }
      ]}>
    </SectionList>
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

  entrancesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },

  entranceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SCREEN_WIDTH/2 - 20,
  },

  itemThumb: {
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    width: 64,
    height: 64
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
  },



});

module.exports = ExploreScreen;
