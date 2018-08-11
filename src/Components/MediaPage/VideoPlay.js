import React, {PureComponent, Fragment} from 'react';
import YouTube from 'react-youtube';
import _ from "lodash";
import axios from "axios";
import ShowMore from '@tedconf/react-show-more';
//user components
import { media } from '../../data';


class VideoPlay extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      video: {},
      videos: []
    };

    this.watchVideo = this.watchVideo.bind(this);
  }

  watchVideo = (vd) => {
    this.setState({ video: vd });
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      top: 0
    })
  };

  componentDidMount() {
    this.setState({ video: media[0], videos: media })
  }

  render() {
    const { video, videos } = this.state;

    if (videos.length === 0) return <div></div>

    return (
      <div className="row justify-content-center border-top">
        <div className="col-12 col-md-10">
          <div className="row justify-content-center border-bottom my-2">
            <div className="col-12 col-lg-8 col-xl-6 d-flex justify-content-center align-items-center">
              <YouTube
                id={video.videoId}
                videoId={video.videoId}
                containerClassName="video-container my-2 my-md-4"
              />
            </div>
            <div className="col-12 col-lg-8 col-xl-6">
              <div className="d-flex flex-column my-2 my-md-4">
                <span className="mb-2 mb-md-4 text-color-blue font-28">{ video.videoTitle }</span>
                <div className="date-view d-flex justify-content-between w-100 mb-2 mb-md-4">
                  <span className="text-secondary">{ video.videoDate }</span>
                  <span className="text-secondary">{ video.viewCount } baxış</span>
                </div>
                <p className="text-justify">
                  { video.text }
                </p>
              </div>
            </div>
          </div>
          <ShowMore
            items={videos}
            by={4}
          >
            {({
                current,
                onMore,
              }) => (
              <Fragment>
                <div className="row justify-content-center mt-2 mb-4">
                  {
                    current.map((vd, idx) => {
                      return(
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 my-3" key={idx}>
                          <div className="video-card-wrap d-flex flex-column align-items-center my-3">
                            <img src={vd.videoImage} alt="article1" className="img-fluid art-img" />
                            <div className="art-info-wrap p-2 d-flex flex-column justify-content-between align-items-start h-100">
                              <div className="my-1 text-left w-100 art-header">
                          <span className="font-18">
                            {_.truncate(vd.videoTitle, { 'length': 45 }).replace(/<\/?[^>]+>/g,'').replace('&nbsp;', ' ')}
                          </span>
                              </div>
                              <small className="my-1 text-color text-justify video-mini-desc">
                                {_.truncate(vd.text, { 'length': 120 }).replace(/<\/?[^>]+>/g,'').replace('&nbsp;', ' ')}
                              </small>
                              <div className="d-flex align-items-end justify-content-center w-100 h-100">
                                <button type="button" className="video-watch-btn border p-1 my-1 text-color cursor-pointer font-weight-bold"
                                        onClick={() => this.watchVideo(vd)}
                                >VİDEOYA BAX</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="row justify-content-center my-4">
                  <button className="video-watch-btn border p-2 my-1 text-color-blue cursor-pointer font-weight-bold"
                          disabled={!onMore} onClick={() => { if (!!onMore) onMore(); }}
                  >
                    DAHA ÇOX GÖSTƏR
                  </button>
                </div>
              </Fragment>
            )}
          </ShowMore>
        </div>
      </div>
    );
  }
}

export default VideoPlay;