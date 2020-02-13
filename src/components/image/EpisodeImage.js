import React from 'react';
import './episodeImage.scss';

export const EpisodeImage = ({ image, name }) => {
  let imageCouldNotBeFound = 'ik wil hier een andere text hebbemn';


    return (
        <div>
            <p>{imageCouldNotBeFound}</p>
            <p>{imageCouldNotBeFound}</p>
            <p>{imageCouldNotBeFound}</p>
            <p>{imageCouldNotBeFound}</p>
            <img alt={name} src={image && image.medium ? image.medium : null} />
        </div>
    );
};
export default EpisodeImage;
