import React, { Component } from 'react';
import ApiService from 'client/services/Api';

class ViewRecord extends Component {
    state = {
        record: {}
    }
    componentDidMount() {
        const { tableName, id } = this.props.match.params;
        new ApiService().execute("GET", `${tableName}/${id}`)
            .then(res => {
                console.log(res.data)
                this.setState({ record: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const { record } = this.state;
        const { tableName } = this.props.match.params;

        return (
            <div className="jumbotron container" style={{textAlign: "left"}}>
                <h1>View {tableName}</h1>
                <hr/>
                {renderBody(record)}
                <button className="btn btn-primary"
                onClick={() => this.props.history.goBack()}>
                    Go Back
                </button>
            </div>
        )
    }

}

function renderBody(record) {
    const keys = Object.keys(record);
    
    if (!keys.length) {
        
        return (
            <p>Record was not found!</p>
        );
    }

    return (
        <table className="table table-bordered view-record-table">
            <tbody>
                {
                    keys.map((key, index) => {
                        const value = record[key];
                        return (
                            <tr key={`view-row-${index}`}>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                        )

                    })
                }
            </tbody>

        </table>
    )
}

export default ViewRecord;