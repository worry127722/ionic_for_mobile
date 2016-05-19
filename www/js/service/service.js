/**
 * Created by wangrui on 16/5/14.
 */
angular.module('starter').service('dataService', function () {

  //聊天tab数据
  this.chatData = [
    {
      id: 1,
      name: 'lily',
      img: 'img/adam.jpg',
      info: "Lily is a young and beautiful girl, we all like her."
    },
    {
      id: 2,
      name: 'ryan',
      img: 'img/ben.png',
      info: "We all like her."
    },
    {
      id: 3,
      name: 'mike',
      img: 'img/max.png',
      info: "She is a very capable person."
    },
    {
      id: 4,
      name: 'pitter',
      img: 'img/mike.png',
      info: "She is our mainstay."
    },
    {
      id: 5,
      name: 'jion',
      img: 'img/perry.png',
      info: "We cannot leave her."
    }
  ];

  this.items = [
    {
      img: '',
      id: 1

    },
    {
      img: '',
      id: 2

    },
    {
      img: '',
      id: 3

    },
    {
      img: '',
      id: 4

    },
    {
      img: '',
      id: 5

    }

  ]

});
