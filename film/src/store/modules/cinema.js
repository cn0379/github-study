const state = {
    cinemaName: '',
    cinemaAddress: '',
    movieTitle: '',
    cinemaPoint:"",
    movieInfo: {
        startTime: '',
        endTime: '',
        type: '',
        room: '',
        price: '',
    },
    boughtSeat: [
        [4, 5],
        [4, 6]
    ],
    selectedSeat: [],
    movieList:[]
}

// getters
const getters = {

}


// mutations
const mutations = {
    setTitle(state, title) {
        state.movieTitle = title;
    },
    setMovieInfo(state, movieInfo) {
        state.movieInfo = movieInfo;
    },
    setSelectedSeat(state, v) {
        state.selectedSeat = v;
    },
    setInfo(state, {address,title,point}){
        state.cinemaName = title;
        state.cinemaAddress = address
        state.cinemaPoint = point
    },
    setMovieList(state,val){
        state.movieList = val
    }
}

// actions
const actions = {

}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}