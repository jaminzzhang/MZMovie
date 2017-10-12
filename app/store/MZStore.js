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
        // {
        //   title: '入口1',
        //   subtitle: '这是一个测试入口1',
        //   imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
        //   routerUrl: 'mzm://mz.com/e1'
        // },
        // {
        //   title: '入口2',
        //   subtitle: '这是一个测试入口2',
        //   imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
        //   routerUrl: 'mzm://mz.com/e2'
        // },

      ]
    },

    hotAlubmZone: {
      title: '热门主题合辑',
      key: 'hotAlbumn',
      items: [
        {
          title: '测试1',
          imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
          subtitle: '122',
        },
        {
          title: '测试1',
          imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
          subtitle: '3232'
        },
        {
          title: '测试1',
          imgUrl: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2499135561.webp',
          subtitle: '3232'
        }
      ]
    },

    filmReviewZone: {
      title: '精彩影评',
      key: 'reviews',
      items: [
        {
          title: '测试1',
          imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
          subtitle: '122',
          extInfo: {
            avatarUrl: '',
            createTime: '10-8',
            commentCount: 10,
          }
        },
        {
          title: '测试1',
          imgUrl: 'https://img01.shunliandongli.com/attachment/channelimg/2017/09/nQUUFdx9gyy9vzqDKx79vv9VihZL9X.jpg',
          subtitle: '3232',
          extInfo: {
            avatarUrl: '',
            createTime: '10-8',
            commentCount: 10,
          }
        },
        {
          title: '测试1',
          imgUrl: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2499135561.jpg',
          subtitle: '连续几款预告都做的情绪十足精彩纷呈，让人误以为会是一部快意复仇片，谁知正片却呈现出了一部与大部分人预期截然不同的政治惊悚片，甚至可以说是成龙银幕生涯唯二情节复杂的电影（上一部是（新宿事件））。关于成龙角色的描绘始终很草率，甚至居于边缘化的尴尬处境，当然，突破性演技是完全没话说！',
          extInfo: {
            avatarUrl: '',
            createTime: '10-8',
            commentCount: 10,
          }
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
