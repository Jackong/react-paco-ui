import React from 'react';

import Border from '../../components/border';

const styles = {
  base: {
    marginTop: 10,
  },
  border: {
    margin: 20,
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
  },
  origin: {
    border: '1px solid #e5e5e5',
  },
};

class Component extends React.Component {
  render() {
    return (
      <div style={styles.base}>
        <div style={{ ...styles.border, ...styles.origin }}>
          Origin 1px
        </div>
        <Border style={styles.border}>
          Retina 1px
        </Border>
      </div>
    );
  }
}

export default Component;
