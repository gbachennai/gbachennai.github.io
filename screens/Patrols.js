import React, {Component, useState, useEffect} from 'react';
import { Button, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { theme, Block } from 'galio-framework';

import StreamPlayer from '../components/StreamPlayer';

const { width } = Dimensions.get('screen');

const Patrols = () => {

  const [leftCamera, setLeftCamera] = useState('rtsp://admin:12345abc%21@68.206.80.4:554/video1');
  const [rightCamera, setRightCamera] = useState('rtsp://admin:ram%402021%21@97.105.52.200:10553/video1');

  const [patrolOn, setPatrolOn] = useState(false);

  const startPatrol = () => {
    setPatrolOn(true);
  }

  const stopPatrol = () => {
    setPatrolOn(false);
  }


  const renderPatrols = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.patrols}>

        <Block style={styles.sideBySide}>
          <Block style={styles.vlcPlayer}>
            {patrolOn === true && <StreamPlayer rtspUrl={leftCamera} />}
          </Block>
          <Block style={styles.vlcPlayer}>
            {patrolOn === true && <StreamPlayer rtspUrl={rightCamera} />}
          </Block>
        </Block>

        {patrolOn === false && 
          <Button
            onPress={startPatrol}
            title={'Start'}
            color={theme.COLORS.PRIMARY}
            accessibilityLabel="Play or Stop"
          />
        }

        {patrolOn === true && 
          <Button
            onPress={stopPatrol}
            title={'Stop'}
            color={theme.COLORS.PRIMARY}
            accessibilityLabel="Play or Stop"
          />}
      </ScrollView>
    )
  }

  return (
    <Block flex center style={styles.patrols}>
      {renderPatrols()}
    </Block>
  );
}

const styles = StyleSheet.create({
  patrols: {
    width: width,    
  },
  vlcPlayer: {
    backgroundColor: theme.COLORS.BLACK,
    width: Dimensions.get('window').width * 0.49,
    height: Dimensions.get('window').width * 0.49 * (3 / 4),
    borderRadius: 5,
    borderColor: theme.COLORS.GREY,
    borderWidth: 1,
    borderStyle: "solid"
  },
  sideBySide: {
    width: Dimensions.get('window').width * 0.98,
    height: Dimensions.get('window').width * 0.49 * (3 / 4),
    marginLeft: Dimensions.get('window').width * 0.01,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.COLORS.WHITE,
  },  

});

export default Patrols;