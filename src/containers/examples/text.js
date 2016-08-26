import React from 'react';

import Text from '../../components/text';

class Component extends React.Component {
  render() {
    return (
      <div style={{ margin: 20 }}>
        <br />
        <Text type="t1">t1-用于titlebar标题文案</Text>
        <br />
        <Text type="t2">t2-仅用于按钮提示文字</Text>
        <br />
        <Text type="t3">t3-用于列表/表单 标签/标题文案</Text>
        <br />
        <Text type="t4">t4-用于列表/表单右侧说明文案</Text>
        <br />
        <Text type="t5">t5-用于列表/表单等辅助字体</Text>
        <br />
        <Text type="t6">t6-用于列表/表单下方说明文字</Text>
      </div>
    );
  }
}

export default Component;
