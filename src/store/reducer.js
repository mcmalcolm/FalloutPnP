import * as actionTypes from "./actions";
import character from "../components/Character/Character";

//Creating an array to store created characters
const initialState = {
  characters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CHARACTER:
      const newCharacter = {
        id: Math.random(),
        name: "Max",
        age: Math.floor(Math.random() * 40),
        hasClicked: "",
      };
      return {
        ...state,
        characters: state.characters.concat(newCharacter),
      };

    case actionTypes.REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (character) => character.id !== action.characterId
        ),
      };

    case actionTypes.SELECT_CHARACTER:
      return {
        ...state,
      };
  }
  return state;
};

export default reducer;
