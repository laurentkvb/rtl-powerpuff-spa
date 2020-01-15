import { EPISODES_GET_PROGRAM, EPISODES_GET_SHOW_BY_ID } from './types';

import { parseData } from './utils';

import initialState from './state';

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case EPISODES_GET_PROGRAM:
      return { loading: false, show: parseData(action.data), episode: null };
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
