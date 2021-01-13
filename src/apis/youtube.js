import axios from 'axios';

const KEY = 'AIzaSyBLkZN9K_3Nqgdh6JTL9gm_qbKQ6CXNWHA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
