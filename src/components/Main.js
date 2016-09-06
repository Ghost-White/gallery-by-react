require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');

//获取图片相关数据
var imageDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转换成图片URL信息
imageDatas = (function genImageURL(iamgeDatasArr){
	for(var i=0,j=iamgeDatasArr.length;i<j;i++){
		var singleImageData = iamgeDatasArr[i];
		singleImageData.imageURL = require('../images/'+singleImageData.fileName); //增添属性imageURL
		iamgeDatasArr[i] = singleImageData;
	}

	return iamgeDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">
      	</section>
      	<nav className="controller-nav">
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
