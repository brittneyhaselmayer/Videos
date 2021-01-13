import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
	state = { videos: [] };

	getData = async (value) => {
		const response = await youtube.get('/search', {
			params: {
				q: value,
			},
		});
		this.setState({ videos: response.data.items });
	};

	render() {
		return (
			<div>
				<SearchBar getData={this.getData}></SearchBar>

				<VideoList videos={this.state.videos}></VideoList>
			</div>
		);
	}
}

export default App;
