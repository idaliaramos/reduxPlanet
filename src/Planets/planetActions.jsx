const getPlanet = () => {
  return dispatch => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=41VnYPWSO4p5gRvZPMgDzPls94Hnm0pzkAq8q5fu`
    )
      .then(response => response.json())
      .then(planet =>
        dispatch({
          type: "GET_PLANET",
          payload: planet
        })
      );
    //   .catch(err => dispatch({
    //     type: FETCH_TODOS_FAILED,
    //     payload: err
    //   })
    // )
  };
}
//many other functions

export { getPlanet };
