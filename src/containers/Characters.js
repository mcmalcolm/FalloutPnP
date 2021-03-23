import React, { Component } from "react";
import { connect } from "react-redux";

import Character from "../components/Character/Character";
import AddCharacter from "../components/AddCharacter/AddCharacter";
import * as actionTypes from "../store/actions";

class Characters extends Component {
  render() {
    return (
      <div>
        <AddCharacter characterAdded={this.props.onAddedCharacter} />
        {this.props.char.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            age={character.age}
            color={character.color}
            hasClicked={() => this.props.onRemovedCharacter(character.id)}
            hasSelected={() => this.props.onSelectedCharacter(character.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    char: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedCharacter: () => dispatch({ type: actionTypes.ADD_CHARACTER }),
    onRemovedCharacter: (id) =>
      dispatch({ type: actionTypes.REMOVE_CHARACTER, characterId: id }),
    onSelectedCharacter: (id) =>
      dispatch({ type: actionTypes.SELECT_CHARACTER, characterId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
