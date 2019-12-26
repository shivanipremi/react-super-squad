import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById, deleteHeroes } from './actions'

class CharacterList extends Component {
    render() {
        console.log("character component props heroReducer-->>>", this.props)
        return (
            <div>
                <h4>Heroes :</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map((character) => {
                            return (
                                <li key={character.id} className="list-group-item">
                                    <div className="list-item">{character.name}</div>
                                    <div className="list-item right-button" onClick={() => this.props.removeCharacterById(character.id)}>-</div>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    this.props.heroes && this.props.heroes.length ? <div className="right-button delete" onClick={() => this.props.deleteHeroes()}>Clear All</div> : <div></div>
                }

            </div>
        )
    }

}
function mapStateToProps(state) {
    console.log("this.sate mapStateToProps", state);

    return { heroes: state.heroReducer };
}


export default connect(mapStateToProps, { removeCharacterById, deleteHeroes })(CharacterList);