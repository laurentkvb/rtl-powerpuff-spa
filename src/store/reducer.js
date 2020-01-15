import { EPISODES_GET_PROGRAM, EPISODES_GET_SHOW_BY_ID } from './types';

import initialState from './state';

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case EPISODES_GET_PROGRAM:
      return { loading: false, show: transformData(action.data), episode: null };
    default:
      return initialState;
    case EPISODES_GET_SHOW_BY_ID:
      const episode =
        state.show &&
        state.show.episodes &&
        state.show.episodes.find(x => x.id === Number(action.data));

      return Object.assign({}, state, {
        episode,
      });
  }
}

export function transformData(data) {
  return Object.assign(
      {},
      {
        id: data.id,
        name: data.name,
        summary: data.summary,
        image: data.image.original,
        episodes: data._embedded.episodes
      }
  );
}

