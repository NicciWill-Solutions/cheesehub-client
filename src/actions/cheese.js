export const FETCH_CHEESES_REQUEST='FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS='FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses
});

export const FETCH_CHEESES_ERROR='FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error, message) => ({
    type: FETCH_CHEESES_ERROR,
    error,
    message
});

export const fetchCheeses = () => dispatch => {
    dispatch(fetchCheesesRequest());
    fetch('https://cheesehub-nw.herokuapp.com/api/cheeses/') //http://localhost:8080/api/cheeses || https://cheesehub-nw.herokuapp.com/api/cheeses/
    .then(res => {
        if (!res.ok) {
            return console.error('There was a problem.');
        }
        return res.json();
    })
    .then(cheeses => {
        dispatch(fetchCheesesSuccess(cheeses));
    })
    .catch(err => {
        dispatch(fetchCheesesError(err, 'Sorry, there was a problem.'));
    }) 
};  