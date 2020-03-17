import { Component } from 'react';
import ApiService from 'client/services/Api';
import recordDisplay from './components/record';

import './view-record.css';
class ViewRecord extends Component {
    state = {
        record: {}
    }
    componentDidMount() {
        const { tableName, id } = this.props.match.params;
        new ApiService().execute("GET", `${tableName}/${id}`)
            .then(res => {
                this.setState({ record: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const { record } = this.state;
        const { tableName } = this.props.match.params;
        const displayProps = {
            record,
            tableName,
            history: this.props.history
        }
        return recordDisplay(displayProps);
    }

}



export default ViewRecord;