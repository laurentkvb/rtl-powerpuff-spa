import React from 'react';
import './episodeItem.scss';
import { Link } from 'react-router-dom';

import { RichText } from '../richText/RichText';

export const EpisodeItem = ({ item }) => (
  <div className="episode-item">
    <Link to={{ pathname: `/episodes/${item.id}` }}>
      {item.image && item.image.medium ? (
        <img
          alt={item.name}
          src={item.image && item.image.medium ? item.image.medium : null}
        />
      ) : (
        <div className="episode-item__image-not-found">
            <p>Image not found</p>
        </div>
      )}

      <h2>{item.name}</h2>
      <h4>{'Season ' + item.season + ' - episode nr. ' + item.number} </h4>

      <RichText text={item.summary} />
    </Link>
  </div>
);
