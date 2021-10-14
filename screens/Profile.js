import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Profile extends React.Component {
  renderProfile = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.profile}>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.profile}>
        {this.renderProfile()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Profile;
