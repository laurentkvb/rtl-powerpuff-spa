import React from 'react';
import './episodeItem.scss';
import { Link } from 'react-router-dom';

import { RichText } from '../richText/RichText';
import EpisodeImage from '../image/EpisodeImage';

export const EpisodeItem = ({ item }) => (
  <div className="episode-item">
    <Link to={{ pathname: `/episodes/${item.id}` }}>
      <EpisodeImage image={item.image} name={item.name} />

      <h2>{item.name}</h2>
      <h4>{'Season ' + item.season + ' - episode nr. ' + item.number} </h4>

      <RichText text={item.summary} />
    </Link>
  </div>
);
