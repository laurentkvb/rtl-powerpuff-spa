import React from 'react';
import './showOverview.scss';

import { useSelector } from 'react-redux';
import { EpisodeItem } from '../../components/item/EpisodeItem';
import { RichText } from '../../components/richText/RichText';

export const ShowOverview = () => {
  const show = useSelector(state => state.show);

  if (show) {
    return (
      <div className="show-overview">
        <div className="show-overview__description">
          <div className="show-overview__description-image">
            <img alt={show.name} src={show.image} />
          </div>

          <div className="show-overview__description-text">
            <h1>{show.name}</h1>
            <RichText text={show.summary} variant="small" />
          </div>
        </div>

        <h1>Episodes list</h1>

        {/*<hr/>*/}
        <div className="horizontal-line" />

        <div className="show-overview__box">
          {show &&
            show.episodes &&
            show.episodes.map((value, index) => (
              <EpisodeItem item={value} key={index} />
            ))}
        </div>
      </div>
    );
  }
  return null;
};

export default ShowOverview;
