import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Last Christmas', duration: '4:22'},
        { title: 'Barbie girl', duration: '3:17'},
        { title: 'Blue', duration: '4:43'},
        { title: 'Let it go', duration: '3:43'}
    ];
};

const selectedSongReducer = (selectedSong = null, action ) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});