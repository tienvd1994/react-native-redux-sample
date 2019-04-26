import {
  FETCHING_PEOPLE_REQUEST,
  FETCHING_PEOPLE_SUCCESS,
  FETCHING_PEOPLE_FAILURE
} from "./types";

export const fetchingPeopleRequest = () => ({
  type: FETCHING_PEOPLE_REQUEST
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

export const fetchPeople = () => {
  // return {
  //   type: FETCHING_PEOPLE_FAILURE,
  //   payload: [{id: 1}]
  // };

  // return async dispatch => {
  //   dispatch(fetchingPeopleRequest());

  //   try {
  //     let response = await fetch("https://randomuser.me/api/?results=15");
  //     let json = await response.json();

  //     console.log(json);

  //     dispatch(fetchingPeopleSuccess(json.results));
  //   } catch (error) {
  //     console.log(error);

  //     dispatch(fetchingPeopleFailure(error));
  //   }
  // };

  return function(dispatch) {
    dispatch(fetchingPeopleRequest());

    let url = "https://medu.cloudbsc.com:8080/api/v1/bootstrap";
    // let url = "https://randomuser.me/api/?results=15";

    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        dispatch(fetchingPeopleFailure(error));
      })
      .then(response => {
        console.log(response[0].courses);
        dispatch(fetchingPeopleSuccess(response[0].courses));
        // dispatch(fetchingPeopleSuccess(response.results));
      });
  };
};
