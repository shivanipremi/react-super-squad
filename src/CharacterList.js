import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addcharacterById } from './actions'

class CharacterList extends Component {
    render() {
        console.log("character component props characters-->", this.props)
        return (
            <div>
                <h4>Characters :</h4>
                <ul className="list-group">
                    {
                        this.props.charactersReducer.map((character) => {
                            return (
                                <li key={character.id} className="list-group-item">
                                    <div className="list-item">{character.name}</div>
                                    <div className="list-item right-button" onClick={() => this.props.addcharacterById(character.id)}>+</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}
function mapStateToProps(state) {
    console.log("this.sate mapStateToProps", state);
    return { ...state };
}

//  function mapDispatchToProps(dispatch){

//  }

export default connect(mapStateToProps, { addcharacterById })(CharacterList);