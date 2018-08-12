import axios from 'axios'

export default function ({ store, route, redirect }) {
    if (!store.state.clubs) {
        // console.log('plugin yes')
        axios.get(
            `${store.state.wordpressAPI}/wp/v2/club?_embed`
        ).then(function (response) {
            // handle success
            // console.log(response.data);
            store.commit("setClubs", response.data);
            // console.log(store.state.clubs)
        });
    }
}