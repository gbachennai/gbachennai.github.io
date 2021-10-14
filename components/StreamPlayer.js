import React from "react";
import {View, Dimensions, StyleSheet} from 'react-native';
import { theme } from "galio-framework";
import {VLCPlayer, VlCPlayerView} from 'react-native-vlc-media-player';

class StreamPlayer extends React.Component{
    constructor(props) {
        super(props);
    
        this.vlcPlayerSource = {
          initType: 2,
          hwDecoderEnabled: 1,
          hwDecoderForced: 1,
          uri: this.props.rtspUrl,
          initOptions: [
            '--no-audio',
            '--rtsp-tcp',
            '--network-caching=150',
            '--rtsp-caching=150',
            '--no-stats',
            '--tcp-caching=150',
            '--realrtsp-caching=150',
          ],
        };
      }

      togglePlayer = () => {
        if (this.state.playerPaused === true) {
          this.setState({
            ...this.state,
            playerPaused: false,
            playerBtnText: 'Stop',
          });
        } else {
          this.setState({
            ...this.state,
            playerPaused: true,
            playerBtnText: 'Play',
          });
        }
        console.log(this.state);
      };

      render() {
        return (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={styles.player}>
    
            <VLCPlayer
              source={this.vlcPlayerSource}
              autoplay={true}
              autoAspectRatio={true}
              resizeMode="cover"
              videoAspectRatio={"16:9"}
              //paused={this.state.playerPaused}
              isLive={true}
              autoReloadLive={true}
              style={{
                height: Dimensions.get('window').height * 0.5,
                // width: Dimensions.get('window').width * 0.9,
              }}
            />
          </View>
        );
      }
}

const styles = StyleSheet.create({
    player: {
        backgroundColor: theme.COLORS.BLACK,

        width: Dimensions.get('window').width * 0.49,
        height: Dimensions.get('window').width * 0.49 * (3 / 4),
        borderRadius: 5,
      }
});

export default StreamPlayer;