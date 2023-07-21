var initialState = {
    data: [],
};
const Fetch_API = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_API':
            return {
                data: action.data,
            }
        default: return state
    }
}
export default Fetch_API;