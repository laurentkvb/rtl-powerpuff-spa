import React from 'react';
import "./episodeImage.scss"

export const EpisodeImage = ({ image, name }) => {
  if (image && image.medium) {
    return <img alt={name} src={image && image.medium ? image.medium : null} />;
  }

  return (
    <div className="episode-image__not-found">
      <p>Image not found</p>
    </div>
  );
};
export default EpisodeImage;
