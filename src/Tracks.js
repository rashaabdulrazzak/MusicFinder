import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class Tracks extends Component {
  state = { playing: false, audio: null, playingPreviewUrl: null };
  playAudio = (previewUrl) => () => {
    const audio = new Audio(previewUrl);
    if (!this.state.playing) {
      audio.play();
      this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
    } else {
      this.state.audio.pause();
      if (this.state.playingPreviewUrl === previewUrl) {
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({ audio, playingPreviewUrl: previewUrl });
      }
    }
  };
  trackIcon = (track) => {
    if (!track.preview_url) {
      return <span> N/A</span>;
    }
    if (
      this.state.playing &&
      this.state.playingPreviewUrl === track.preview_url
    ) {
      return <span> | |</span>;
    }
    return <span>&#9654;</span>;
  };
  render() {
    const { tracks } = this.props;
    return (
      <Container>
        <Row className="justify-content-center">
          {tracks.map((track) => {
            const { id, name, album, preview_url } = track;
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-4"
                key={id}
                onClick={this.playAudio(preview_url)}
              >
                <div className="track">
                  <img
                    src={album.images[0].url}
                    alt="trackimage"
                    className="track-image"
                  />
                  <p className="track-text">{name}</p>
                  <p className="track-icon">{this.trackIcon(track)}</p>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default Tracks;
