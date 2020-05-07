import React from 'react';

const renderHeadings = (props = {}) => {
    const { keys } = props;
    return (
        <thead data-test="dataTableHeaders">
            <tr>
                {keys.map((keyName, index) => {
                    if (keyName === "dataName") {
                        return null;
                    }

                    return (
                        <th key={keyName + index} data-test="dataTableTH">
                            {keyName}
                        </th>
                    )
                })}
                <th />
            </tr>
        </thead>
    )
}


export default renderHeadings;