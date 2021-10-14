import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class SpaceCalls extends React.Component {
  renderSpaceCalls = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.spacecalls}>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.spacecalls}>
        {this.renderSpaceCalls()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  spacecalls: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default SpaceCalls;
