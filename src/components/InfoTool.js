function InfoTool(props) {

    return (
        <div className={`popup_type_info  ${props.isOpen}`}>

            <div className="popup__body_white">
                <button className="popup__close-button" type="button" onClick={props.onClose}></button>
                <div className="popup__info">
                    <h2 className="popup__link ">{props.text}</h2>
                </div>
            </div>
        </div>
    );
}
export default InfoTool;