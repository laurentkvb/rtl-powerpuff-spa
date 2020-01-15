import React, {useEffect} from 'react';
import './showEpisode.scss';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveEpisodeFromShow} from '../../store/actions';
import {RichText} from '../../components/richText/RichText';
import EpisodeImage from '../../components/image/EpisodeImage';

export const ShowEpisode = ({ match }) => {
  const episode = useSelector(state => state.episode);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(retrieveEpisodeFromShow(match.params.id));
    });
  }, [dispatch, match.params.id]);

  if (episode) {
    return (
      <div className="show-episode">
        <a href={episode.url}>
          <EpisodeImage image={episode.image} name={episode.name} />
        </a>

        <h2>{episode.name}</h2>
        <h4>
          {'Season ' + episode.season + ' - episode nr. ' + episode.number}{' '}
        </h4>
        <h4>Released on: {episode.airdate}</h4>

        <RichText text={episode.summary} />
      </div>
    );
  }

  return null;
};

export default ShowEpisode;
