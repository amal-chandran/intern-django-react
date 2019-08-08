const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "LOAD_ALL":
        return { ...state, ...payload }

    default:
        return state
    }
}
