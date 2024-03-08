import React from "react";
function FilterCheckbox() {
    const [filterActive, setFilterActive] = React.useState();
    function handleFilterActive(){
        setFilterActive(!filterActive);
    }
    return (
        <article className="filter">
            <button className={`hover-animation ${!filterActive ? "filter__button": "filter__button filter__button_active" }`} title="filter" type="button" onClick={handleFilterActive}>
                <span className="filter__slider"></span>
            </button>
            <p className="filter__text">Короткометражки</p>
        </article>
    );
}
export default FilterCheckbox;