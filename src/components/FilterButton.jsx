import React from "react";

const FilterButton = props =>  {

    const {
        label,
        onClick,
        selected
    } = props;

    return<li>
        <button className={ selected ? 'selected' : '' } onClick={ onClick }>
          { label }
        </button>
        </li>
}

export default FilterButton;