import React, {PureComponent, Fragment} from 'react';
import YouTube from 'react-youtube';
import _ from "lodash";
import axios from "axios";
//user components
import { media } from '../../data';


class VideoPlay extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      video: {},
      videos: []
    };

    this.onReady = this.onReady.bind(this)
  }

  componentDidMount() {
    console.log(media[0])
    this.setState({ video: media[0], videos: media })
  }

  onReady(event) {
    const videoTitle = event.target.j.videoData.title;
    this.setState({ videoTitle });
    console.log(videoTitle + 'fire')
  }

  render() {
    const { video, videos } = this.state;

    return (
      <div className="row justify-content-center border-top">
        <div className="col-12 col-md-10">
          <div className="row justify-content-center border-bottom my-2">
            <div className="col-12 col-lg-8 col-xl-6 d-flex justify-content-center align-items-center">
              <YouTube
                id={video.videoId}
                videoId={video.videoId}
                onReady={this.onReady}
                containerClassName="video-container my-2 my-md-4"
              />
            </div>
            <div className="col-12 col-lg-8 col-xl-6">
              <div className="d-flex flex-column my-2 my-md-4">
                <span className="mb-2 mb-md-4 text-color-blue font-28">{ video.videoTitle }</span>
                <p className="text-justify">
                  { video.text }
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-2">
            {
              videos.map((vd, idx) => {
                return(
                  <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                    <div className="video-card-wrap d-flex flex-column align-items-center justify-content-center mx-4 my-3">
                      <img src={vd.videoImage} alt="article1" className="img-fluid art-img" />
                      <div className="art-info-wrap p-2 p-md-3 d-flex flex-column justify-content-between align-items-start">
                        <div className="my-1 text-left w-100 art-header">
                          { vd.videoTitle }
                        </div>
                        <small className="my-2 text-color text-justify art-mini-desc">
                          {_.truncate(video.text, { 'length': 120 }).replace(/<\/?[^>]+>/g,'').replace('&nbsp;', ' ')}
                        </small>
                        <button className="video-watch-btn border my-2 mt-md-4 px-2 py-1 text-color cursor-pointer font-weight-bold"
                                onClick={() => this.setState({ video: vd })}
                        >VİDEOYA BAX</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlay;