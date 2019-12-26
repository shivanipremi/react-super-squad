import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
    strength() {
        let totalStrength = 0;
        this.props.heroReducer.forEach(element => {
            totalStrength += element.strength
        });
        return totalStrength;
    }
    intelligence() {
        let totalIntelligence = 0;
        this.props.heroReducer.forEach(element => {
            totalIntelligence += element.intelligence
        });
        return totalIntelligence;
    }
    speed() {
        let totalSpeed = 0;
        this.props.heroReducer.forEach(element => {
            totalSpeed += element.speed
        });
        return totalSpeed;
    }

    //     <div>
    //     <h4>Characters :</h4>
    //     <ul className="list-group">
    //         {
    //             this.props.charactersReducer.map((character) => {
    //                 return (
    //                     <li key={character.id} className="list-group-item">
    //                         <div className="list-item">{character.name}</div>
    //                         <div className="list-item right-button" onClick={() => this.props.addcharacterById(character.id)}>+</div>
    //                     </li>
    //                 )
    //             })
    //         }
    //     </ul>
    // </div>


    render() {
        console.log("SquadStats-->", this.props)
        return (
            <div>
                <h4>Stats :</h4>
                <ul className="list-group">
                    <li className="list-group-item"> <div lassName="list-item">Overall Strength : {this.strength()}</div></li>
                    <li className="list-group-item"> <div lassName="list-item">Overall Intelligence : {this.intelligence()}</div></li>
                    <li className="list-group-item"> <div lassName="list-item">Overall Speed : {this.speed()}</div></li>
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

export default connect(mapStateToProps, null)(SquadStats);

