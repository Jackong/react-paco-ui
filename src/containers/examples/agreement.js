import React from 'react';

import Agreement from '../../components/agreement';

class Component extends React.Component {
  render() {
    return (
      <Agreement>
        <h1 className="title">平安产险服务窗平台协议</h1>
        <p className="welcome">欢迎您使用服务窗平台！</p>
        <p className="foreword">
          为使用平安产险服务窗平台服务（以下简称『本服务』），你应该阅读并遵守《平安产险服务窗平台协议》(以下简称『本协议』)。
        </p>
        <h2 className="sub-title">一、【协议的范围】</h2>
        <p>
          1.1 本协议是你与平安产险之间...
        </p>
        <h2 className="sub-title">二、【定义和理解】</h2>
        <p>
          2.1 本协议是你与平安产险之间...
        </p>
        <p>
          2.2 更多协议...
        </p>
      </Agreement>
    );
  }
}

export default Component;
