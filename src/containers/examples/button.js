import React from 'react';

import Button from '../../components/button';

const styles = {
  base: {
    width: '100%%',
    marginTop: 10,
    textAlign: 'center',
  },
  btn: {
    marginBottom: 10,
  },
  outline: {
    marginRight: 5,
  },
};

class Component extends React.Component {
  render() {
    return (
      <div style={styles.base}>
        <Button type="primary" style={styles.btn}>
          主按钮
        </Button>
        <Button type="secondary" style={styles.btn}>
          次按钮
        </Button>
        <Button type="primary" disabled style={styles.btn}>
          不可点击按钮
        </Button>
        <Button type="outline" style={{ ...styles.btn, ...styles.outline }}>
          按钮
        </Button>
        <Button type="outline" style={{ ...styles.btn, ...styles.outline }}>
          三字钮
        </Button>
        <Button type="outline" style={{ ...styles.btn, ...styles.outline }}>
          四字按钮
        </Button>
        <Button type="outline" style={{ ...styles.btn, ...styles.outline }}>
          五个字按钮
        </Button>
        <Button type="warning" style={styles.btn}>
          警示按钮
        </Button>
        <Button type="warning" disabled style={styles.btn}>
          警示按钮不可点
        </Button>
        <Button type="bottom" style={styles.btn}>
          底部按钮
        </Button>
      </div>
    );
  }
}

export default Component;
