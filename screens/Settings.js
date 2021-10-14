import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Settings extends React.Component {
  renderSettings = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.settings}>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.settings}>
        {this.renderSettings()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  settings: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Settings;
