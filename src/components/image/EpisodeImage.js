import React from 'react';
import './episodeImage.scss';

export const EpisodeImage = ({ image, name }) => {
  let imageCouldNotBeFound = 'image could not be found ';
  if (image && image.medium) {
    imageCouldNotBeFound = 'Image is here ';
    return (
      <div>
        <p>{imageCouldNotBeFound}</p>
        <img alt={name} src={image && image.medium ? image.medium : null} />
      </div>
    );
  } else {
    return (
      <div className="episode-image__not-found">
        <p>{imageCouldNotBeFound}</p>
      </div>
    );
  }
};
export default EpisodeImage;
