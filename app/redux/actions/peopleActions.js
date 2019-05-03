import {
  FETCHING_PEOPLE_REQUEST,
  FETCHING_PEOPLE_SUCCESS,
  FETCHING_PEOPLE_FAILURE,
  FETCHING_PEOPLE_REFRESH,
  FETCHING_PEOPLE_LOAD_MORE
} from "./types";

export const fetchingPeopleRequest = () => ({
  type: FETCHING_PEOPLE_REQUEST
});

export const fetchingPeopleRefresh = () => ({
  type: FETCHING_PEOPLE_REFRESH
});

export const fetchingPeopleLoadMore = () => ({
  type: FETCHING_PEOPLE_LOAD_MORE
});

export function fetchingPeopleSuccess(json) {
  return {
    type: FETCHING_PEOPLE_SUCCESS,
    payload: json
  };
}

export function fetchingPeopleFailure(error) {
  return {
    type: FETCHING_PEOPLE_FAILURE,
    payload: error
  };
}

export const fetchPeople = (page, isRefresh, isLoadMore) => {
  console.log(page);

  return function (dispatch) {
    if (isRefresh) {
      dispatch(fetchingPeopleRefresh());
    }
    else if (isLoadMore) {
      dispatch(fetchingPeopleLoadMore());
    }
    else {
      dispatch(fetchingPeopleRequest());
    }
    
    let url = `https://randomuser.me/api/?page=${page}&results=11`;
    
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        dispatch(fetchingPeopleFailure(error));
      })
      .then(response => {
        // console.log(response.results);

        dispatch(fetchingPeopleSuccess(response.results));
      });
  };
};
