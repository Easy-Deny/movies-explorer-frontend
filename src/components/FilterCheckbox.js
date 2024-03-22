import React from "react";
function FilterCheckbox(props) {

    return (
        <article className="filter">
            <button className={`hover-animation ${!props.searchChecked ? "filter__button": "filter__button filter__button_active" }`} title="filter" type="button" onClick={props.toggleShortsFilter}>
                <span className="filter__slider"></span>
            </button>
            <p className="filter__text">Короткометражки</p>
        </article>
    );
}
export default FilterCheckbox;