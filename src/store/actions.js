import axios from 'axios';

// Store types
import { EPISODES_GET_PROGRAM, EPISODES_GET_SHOW_BY_ID } from './types';

// Export action
export const fetchData = data => {
  return {
    type: EPISODES_GET_PROGRAM,
    data,
  };
};

// Export
export const fetchShowByName = name => {
  return dispatch => {
    return axios
      .get(
        `http://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(
          name,
        )}&embed=episodes`,
      )
      .then(response => {
        dispatch(fetchData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchShowById = id => {
  return dispatch => {
    return axios
      .get(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => {
        console.log('response.data');
        console.log(response.data);
        dispatch(fetchData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const retrieveEpisodeFromShow = id => {
  return {
    type: EPISODES_GET_SHOW_BY_ID,
    data: id,
  };
};
