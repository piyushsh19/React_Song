//Action Creator

export const selectSong = song => {
    // action return
    return{
        type: 'SONG_SELECTED',
        payload: song
    };
};