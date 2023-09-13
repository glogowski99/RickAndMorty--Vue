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
            try {
                const response = await instance.get('/character');
                commit('setCharacters', response.data.results);
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        },
    },
    getters: {
        charactersFromEarth(state) {
            return state.characters.filter(character => character.origin.name === 'Earth');
        },
    },
})
