import { combineReducers } from 'redux';

//static data

const songReducer = () => {
    return [
        {title: 'Let Me Love You' ,duration:'4:05'},
        {title: 'Let go' ,duration:'4:00'},
        {title: 'Dura' ,duration:'3:45'},
        {title: 'Faded' ,duration:'5:05'}
    ];
};

const selectedSongReducer = (selectedSong = null, action ) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});