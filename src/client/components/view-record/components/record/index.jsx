import React from 'react';
import PropTypes from 'prop-types';

function recordDisplay(props = {}) {
    const { tableName, record, history } = props;
    return (
        <div className="jumbotron container view-record"  data-test="recordDisplayComponent">
            <h1 data-test="recordDisplayHeading">View {tableName}</h1>
            <hr />
            {renderBody(record)}
            <button className="btn btn-primary"
                data-test="goBackButton"
                onClick={() => history.goBack()}>
                Go Back
            </button>
        </div>
    )
}

function renderBody(record) {
    const keys = Object.keys(record);

    if (!keys.length) {
        return (
            <p>Record was not found!</p>
        );
    }

    return (
        <table className="table table-bordered view-record-table" data-test="recordDisplayTable">
            <tbody>
                {
                    keys.map((key, index) => {
                        const value = record[key];
                        return (
                            <tr key={`view-row-${index}`} data-test={`${key}Row`}>
                                <td data-test={`${key}CellLabel`}>{key}</td>
                                <td data-test={`${key}CellValue`}>{value}</td>
                            </tr>
                        )

                    })
                }
            </tbody>

        </table>
    )
}

recordDisplay.propTypes = {
    record: PropTypes.object.isRequired,
    tableName: PropTypes.string.isRequired
}

export default recordDisplay;