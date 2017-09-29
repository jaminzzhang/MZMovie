'use strict'
// import Cookie from 'react-native-cookies'
import ActionTypes from '../constants/ActionTypes'


const MZRequest = {
  get: (url, successCallback, failureCallback) => {
    console.log('start fetch' + url);
    fetch('GET', url)

  }
}


function fetchData(action) {
  var {type, playload} = action;
  console.log('start fetch ' + action.type);
  switch (type) {
    case ActionTypes.HOME_PAGE:
      return new Promise(fetchHomePageData);
      break;
    case ActionTypes.EXPLORE_PAGE:
      return new Promise(fetchExplorePageData);
      break;
    default:
      return new Promise.reject(new Error('fail'));
  }
}


function fetchHomePageData(resolve, reject) {
  var data = {
    bannerZone: {
      items: [
        {title: '#专题#Banner1', imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg'},
        {title: 'Banner2', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},
        {title: '测试长字串看看', imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.uRsOUJY4cyGkPWnKuDAB0AEsCo&p=0&pid=1.1'},
      ]
    },

    miniEntranceZone: {
      title: 'miniEntrance',
      key: 'miniEntr',
      items: [
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
        },
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
        },
        
      ]
    },

    hotAlubmZone: {
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
  };

  setTimeout(function() {
    console.log('resolve')
    resolve(data);
  }, 500);
  console.log('End fetchHomePageData');
}


function fetchExplorePageData(resolve, reject) {

}



module.exports = {
  fetchData: fetchData
};
