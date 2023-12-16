import React from "react";

const Form = () => {
    return<form>
    <input
        className="new-todo"
        placeholder="Qu'avez vous à faire ?"
        autoFocus
    />
    <input className="hidden" type="submit" value="Ajouter" />
  </form>
}

export default Form;