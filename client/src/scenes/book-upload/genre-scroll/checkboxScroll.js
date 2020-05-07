import React from 'react';

const renderCheckBox = (name, valueId, handleCheckbox) => (
    <div className="row">
        <input type="checkbox" name={`${name}`} value={valueId} onChange={handleCheckbox} />
        <label for={name}>{name}</label>
    </div>
)

function checkBoxScroll(name, checkBoxJSONs, handleCheckbox) {
    return (
        <article>
            <h2>{name}</h2>
            <div className="check-box scroll">
                {
                    checkBoxJSONs.map((checkboxJSON, index) => {
                        const { name, value } = checkboxJSON;
                        if (name === "Spotlight") {
                            return null;
                        }
                        return (
                            <span key={`checkbox-${index}`}>
                                {renderCheckBox(name, value, handleCheckbox)}
                            </span>
                        );
                    })
                }
            </div>

        </article>
    )

}
export default checkBoxScroll;