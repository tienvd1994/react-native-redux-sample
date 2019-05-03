import {
  FETCHING_PEOPLE_REQUEST,
  FETCHING_PEOPLE_SUCCESS,
  FETCHING_PEOPLE_FAILURE,
  FETCHING_PEOPLE_REFRESH,
  FETCHING_PEOPLE_LOAD_MORE
} from "../actions/types";

const initialState = {
  isFetching: false,
  isRefreshing: false,
  isLoadMore: false,
  errorMessage: "",
  peoples: []
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PEOPLE_REQUEST:
      return { ...state, isFetching: true };

    case FETCHING_PEOPLE_REFRESH:
      return { ...state, isRefreshing: true };

    case FETCHING_PEOPLE_LOAD_MORE:
      return { ...state, isLoadMore: true };

    case FETCHING_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoadMore: false,
        isRefreshing: false,
        // peoples: action.payload
        peoples: [...state.peoples, ...action.payload]
      };

    case FETCHING_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoadMore: false,
        isRefreshing: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default peopleReducer;
