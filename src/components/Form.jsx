import React, { useState } from "react"

const Form = () => {

  const [value, setValue] = useState('')

  const handleClick = evt => {
    setValue(evt.target.value)
  }

    return<form>
    <input
        className="new-todo"
        placeholder="Qu'avez vous à faire ?"
        onChange={ handleClick() }
        value={ value }
        autoFocus
    />
    <input className="hidden" type="submit" value="Ajouter"/>
  </form>
}

export default Form