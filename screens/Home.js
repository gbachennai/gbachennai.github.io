import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderHome = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.home}>
      </ScrollView>
    )
  }

  render() {
    console.dir(this.props);
    return (
      <Block flex center style={styles.home}>
        {this.renderHome()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
