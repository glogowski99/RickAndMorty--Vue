import { createStore } from 'vuex'
import instance from '@/plugins/axios'

export default createStore({
    state: {
        characters: [],
    },
    mutations: {
        setCharacters(state, characters) {
            state.characters = characters;
        },
    },
    actions: {
        async fetchCharacters({ commit }) {
            return await instance.get('/character')
                .then(response => {
                    commit('setCharacters', response.data.results);
                    return response;
                }, error => {
                    console.error('error:', error);
                    return error;
                });
        },
    },
    getters: {
        charactersFromEarth(state) {
            return state.characters.filter(character => character.origin.name === 'Earth');
        },
    },
})
