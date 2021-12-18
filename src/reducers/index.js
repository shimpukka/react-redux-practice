import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Last Christmas', duration: '4:05'},
        { title: 'Barbie girl', duration: '3:10'},
        { title: 'Blue', duration: '2:10'},
        { title: 'Let it go', duration: '5:45'}
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