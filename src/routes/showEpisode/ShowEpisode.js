import React, { useEffect } from 'react';
import './showEpisode.scss';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveEpisodeFromShow } from '../../store/actions';
import { EpisodeItem } from '../../components/item/EpisodeItem';

export const ShowEpisode = ({ match }) => {
  const episode = useSelector(state => state.episode);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(retrieveEpisodeFromShow(match.params.id));

    });
  }, [dispatch, match.params.id]);

  console.log(episode);

  if (episode) {
    return (
      <div className="show-episode">
        <EpisodeItem item={episode} />
      </div>
    );
  }

  return null;
};

export default ShowEpisode;
