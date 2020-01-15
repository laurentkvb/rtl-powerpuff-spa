import axios from 'axios';

import { EPISODES_GET_PROGRAM, EPISODES_GET_SHOW_BY_ID } from './types';

export const fetchData = data => {
  return {
    type: EPISODES_GET_PROGRAM,
    data,
  };
};

/**
 * Fetches the show from the api by the show's id
 * @param id
 */
export const fetchShowById = id => {
  return dispatch => {
    return axios
      .get(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => {
        dispatch(fetchData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

/**
 * Retrieves the episode from the shows in the state by the episode's id
 * @param id
 * @returns {{data: *, type: string}}
 */
export const retrieveEpisodeFromShow = id => {
  return {
    type: EPISODES_GET_SHOW_BY_ID,
    data: id,
  };
};
