import React from 'react';

export const EpisodeImage = ({ image, name }) => {
  if (image && image.medium) {
    return <img alt={name} src={image && image.medium ? image.medium : null} />;
  }

  return (
    <div className="episode-episode__image-not-found">
      <p>Image not found</p>
    </div>
  );
};
export default EpisodeImage;
