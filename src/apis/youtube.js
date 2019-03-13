import axios from 'axios';

const KEY = 'AIzaSyBWRy_OcOmZf6wOn9tFozp2RARmE6uceoM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }
});
