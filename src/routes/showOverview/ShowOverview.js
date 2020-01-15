import React from 'react';
import './showOverview.scss';

import { useSelector } from 'react-redux';
import { EpisodeItem } from '../../components/item/EpisodeItem';
import { RichText } from '../../components/richText/RichText';

export const ShowOverview = () => {
  const show = useSelector(state => state.show);

  console.log('show');
  console.log(show);
  console.log(show.image);
  if (show) {
    return (
      <div className="show-overview">

             <h1>{show.name}</h1>


        <div className="show-overview__description">

          <RichText text={show.summary} variant="small"/>
            <img alt={show.name} src={show.image}/>

        </div>

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
