import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList () {
        // this.props = { songs: [...] }
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={()=> this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    };
}

const mapStateToProps = (state) => { // this function will be given the whole state inside an redux as an argument 
    return { songs: state.songs }; // this object will show up as props in the SongList component
};

export default connect(mapStateToProps, { selectSong })(SongList);