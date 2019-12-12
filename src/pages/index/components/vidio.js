import React, { Component } from 'react';
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
  } from 'video-react';
import img from "../../../assets/img/banner-h.jpg"
import "../../../../node_modules/video-react/dist/video-react.css"; 
class PlayerExample extends Component {

  render() {
    return (
        <div className="index-vedio">
                        <div className="chan-head">
                <s></s>
                <h2>10大产业  汇聚百余个产业集群</h2>
                <em className="chan-head"></em>

            </div>
            <p className="chan-p">因地制宜，因势利导，在全国80多个区域打造百余个产业集群，构建产业创新生态体系</p>
        <Player poster={img}>
      <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
      <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

      <ControlBar>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>
        </div>
    );
  }
}
export default PlayerExample