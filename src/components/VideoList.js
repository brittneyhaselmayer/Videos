import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
	render() {
		const vid = this.props.videos.map((video) => (
			<VideoItem
				video={video}
				key={video.key}
				onVideoSelect={this.props.onVideoSelect}
			/>
		));

		return <div className="ui relaxed divided list">{vid}</div>;
	}
}

export default VideoList;
