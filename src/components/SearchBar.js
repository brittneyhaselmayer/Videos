import React from 'react';

class SearchBar extends React.Component {
	state = { input: '' };

	onInputChange = (e) => {
		this.setState({ input: e.target.value });
	};
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.getData(this.state.input);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input
							type="text"
							value={this.state.input}
							onChange={this.onInputChange}
						></input>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
