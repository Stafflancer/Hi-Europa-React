import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

const ModifyContact = (props) => {
    return (
        <div className="modify-contact-popup">
            <h3 className="title">Contact sur place</h3>
            <div className="popup-content">
                <div className="row gender">
                    <div className="col-6 d-flex">
                        <input
                            type="radio"
                            value="0"
                            name="gender"
                            id="female-m"
                            defaultChecked
                            className="custom-radio"
                        />
                        <label htmlFor="female-m">Madame</label>
                    </div>
                    <div className="col-6 d-flex">
                        <input
                            type="radio"
                            value="1"
                            name="gender"
                            id="male-m"
                            className="custom-radio"
                        />
                        <label htmlFor="male-m">Monsieur</label>
                    </div>
                </div>
                <div className="input-wrap">
                    <label>Prénom</label>
                    <input type="text" name="firstName" className="custom-input" value="Ming" />
                </div>
                <div className="input-wrap">
                    <label>Nom</label>
                    <input type="text" name="lastName" className="custom-input" value="Bao"/>
                </div>
                <div className="input-wrap">
                    <label>Numéro de téléphone</label>
                    <input
                        type="tel"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                        className="custom-input"
                        value="06 82 82 82 82"
                    ></input>
                </div>
                <div className="bottom-group-button">
                    <button className="api-custom-button_white">Annuler</button>
                    <button className="api-custom-button_red">Modifier</button>
                </div>
            </div>
        </div>
    );
};

export default ModifyContact;
