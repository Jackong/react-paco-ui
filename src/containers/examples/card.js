import React from 'react';

import Card from '../../components/card';

class Component extends React.Component {
  render() {
    const card1 = {
      header: '头条头条',
      title: '标题标题',
      content: '文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
      tips: '2016-08-08',
      link: <a href="http://hcz.pingan.com">更多</a>,
    };
    const card2 = {
      header: '头条头条',
      title: '标题标题',
      content: '文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
      image: 'http://placehold.it/688x346/1cabeb/ffffff?text=PACO-UI',
      tips: '2016-08-08',
      link: <a href="http://hcz.pingan.com">更多</a>,
    };
    return (
      <div>
        <br />
        <Card {...card1} />
        <br />
        <Card {...card2} />
      </div>
    );
  }
}

export default Component;
