import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	componentDidMount() {
		this.getData('dogs');
	}

	getData = async (value) => {
		const response = await youtube.get('/search', {
			params: {
				q: value,
			},
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		this.setState({
			selectedVideo: video,
		});
	};

	render() {
		return (
			<div>
				<SearchBar getData={this.getData}></SearchBar>
				<div className="ui grid">
					<div className="ui row">
						<div className="ten wide column">
							<VideoDetail video={this.state.selectedVideo}></VideoDetail>
						</div>
						<div className="six wide column">
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							></VideoList>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
