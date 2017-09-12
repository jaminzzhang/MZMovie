import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, SectionList, TouchableOpacity } from 'react-native';
import { Tile } from 'react-native-elements';
import Swiper from 'react-native-swiper';

var SCREEN_WIDTH = Dimensions.get('window').width;

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bannerList: [
        {title: '#专题#Banner1', imgUrl: 'https://tse4-mm.cn.bing.net/th?id=OIP.JLFjnk7qoiXkhr7EoiPirAEsDG&p=0&pid=1.1'},
        {title: 'Banner2', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},
        {title: '测试长字串看看', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},
      ],
      sectionItemList: [
        {
          key: 'entrances',
          title: '入口',
          data: [
            {title: 'entrance1', imgUrl: 'https://tse4-mm.cn.bing.net/th?id=OIP.JLFjnk7qoiXkhr7EoiPirAEsDG&p=0&pid=1.1'},
            {title: 'entrance2', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},
            {title: 'entrance3', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},

          ],
        },
        {
          key: 'filmReviews',
          title: '影评',
          data: [
            {title: 'reivew1', imgUrl: 'https://tse4-mm.cn.bing.net/th?id=OIP.JLFjnk7qoiXkhr7EoiPirAEsDG&p=0&pid=1.1'},
            {title: 'reivew2', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},
            {title: 'review3', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},

          ],
        },
      ],
      miniEntranceSection: {
        key: 'filmReviews',
        title: '影评',
        data: [
          {title: 'reivew1', imgUrl: 'https://tse4-mm.cn.bing.net/th?id=OIP.JLFjnk7qoiXkhr7EoiPirAEsDG&p=0&pid=1.1'},
          {title: 'reivew2', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},
          {title: 'review3', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},

        ],
      },


      miniEntranceList : [[
        {title: 'reivew1', imgUrl: 'https://tse4-mm.cn.bing.net/th?id=OIP.JLFjnk7qoiXkhr7EoiPirAEsDG&p=0&pid=1.1'},
        {title: 'reivew2', imgUrl: 'http://www.barrymellorphotography.co.uk/assets/Uploads/landscapes-13.jpg'},
        {title: 'review3', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},
      ]],

      filmReviewList: [
        {title: 'E1', imgUrl: ''},
        {title: 'E2', imgUrl: ''}
      ]
    };
  }




  _renderHeader = ()=> {
    return (
      <View
        key='header'
        style={styles.header}
        height = {SCREEN_WIDTH * 0.5}
        >
        <Swiper
          key="banner"
          style={styles.banner}
          height={SCREEN_WIDTH * 0.5}
          autoplay={true}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{ bottom: -23, left: null, right: 10 }}
          >
          {
            this.state.bannerList.map((item, i) => {
              return (
                <View
                  key={'banner' + i}
                  style={styles.slide}
                  title={<Text numberOfLines={1} style={{fontSize: 17}}>{item.title}</Text>}
                  >
                  <Image key={'slide' + i} resizeMode='stretch' style={styles.slideImage} source={{ uri: item.imgUrl }}/>
                </View>
              );
            })
          }
        </Swiper>
      </View>

    );
  };


  _renderItem = (sectionItem) => {
    // console.log(sectionItem);
    return (
      <View style={styles.miniEntrance}>
        {
          this._renderEntranceItem(sectionItem.item, sectionItem.index)
        }
      </View>
    );
  };


  _renderEntranceSectionItem = (sectionItem) => {
    // console.log(sectionItem);
    return (
      <View
        key='miniEntrance'
        style={styles.miniEntrance}
        >
        {
          sectionItem.item.map((item, i) => {
            this._renderEntranceItem(item, i);
          })
        }
      </View>
    );
  };

  _renderEntranceItem = (item, i)=> {
    // console.log(item);
    return (<Text style={styles.miniEntranceTitle} numberOfLines={1}>
      {item.title}
    </Text>
);
    return (
      <TouchableOpacity
        key={'miniEntrItem' + i}
        style={styles.miniEntranceItem}
        >

        <Image key='miniEntrItemImage' source={{ uri: item.imgUrl }} style={styles.miniEntranceImage} />
        <View style={styles.miniEntranceTitleView}>
          <Text style={styles.miniEntranceTitle} numberOfLines={1}>
            {item.title}
          </Text>
        </View>

      </TouchableOpacity>
    );
  };


  _renderFilmReviewItem = (item) => {
    // console.log(item);
    return (
      <View key='FilmReview'></View>
    );
  };


  _renderSectionHeader = (section) => {
    return (
      <View
        key={'sectionHeader' + section}
        style={height=32}
        />
    );
  };

  _keyExtractor = ((item, index) => {
    return 'homte' + item.title + index;
  })

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          key='SectionList'
          // ListHeaderComponent={this._renderHeader}
          // renderSectionHeader={this._renderSectionHeader}
          keyExtractor={this._keyExtractor}
          sections={[
            {data: this.state.miniEntranceList, renderItem: this._renderEntranceSectionItem},
          ]}>
        </SectionList>
      </View>
    );
  }
};



//StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    // marginBottom: 48,
  },

  banner: {
    flex: 1,
  },

  // bannerTitle: {
  //   flex: 1,
  //   justifyContent: 'space-between'
  // },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slideImage: {
    flex: 1,
    marginLeft: 0,
  },

  miniEntrance: {
  },

  miniEntranceItem: {
    width: SCREEN_WIDTH/4,
    height: SCREEN_WIDTH/4,
  },
  miniEntranceImage: {
    width: SCREEN_WIDTH/4,
    height: SCREEN_WIDTH/4,
  }

});

module.exports = HomeScreen;
