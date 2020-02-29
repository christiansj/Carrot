import React, { Component } from "react";
import { connect } from "react-redux";
/**component imports */
import DataTable from "client/components/tables/DataTable";
import Modal from "client/services/modal";
import RecordDelete from "client/services/RecordDelete";
import ApiService from 'client/services/Api';
import {withRouter} from 'react-router-dom';

const dummyData = [
  { title: "Jack and the Beanstalk", firstName: "Christopher", lastName: "Bee" },
  { title: "Spyro the Dragon", firstName: "Leo", lastName: "Lion" },
  { title: "Clark the Shark", firstName: "Raj", lastName: "Patel" }
]

//TODO: increase padding for right-hand side
/**
 * @prop {Integer} index  user changes this with container nav
 */
class DatabaseScene extends Component {
  state = { rows: dummyData, oldTableName: '' }

  componentDidMount(){
    this.fetchData();
  }
  
  /**
   * Only fetch data when data table is rendered
   */
  componentDidUpdate() {
    const {index, isConnected} = this.props;
    
    if (!this.props.match || this.state.oldTableName === index
      && isConnected) {
      return;
    }
    
    this.fetchData();
  }
  /**
   * Retrieve all records from specified table.
   * 
   * User clicks on "All Books", "All Authors", etc.
   * to determine what data to fetch
   */
  fetchData() {
      const {oldTableName} = this.state;
      if(!this.props.match || oldTableName === this.props.match.params.tableName){
        return;
      }
      const {tableName} = this.props.match.params;
      new ApiService().execute("GET", `${this.props.match.params.tableName}/table`)
        .then(data => data.data)
        .then((rows) => { this.setState({ rows, oldTableName:  tableName}) })
        .catch((err) => {
          console.log(err);
        });
    
  }

  render() {
    const { index, activeRecord } = this.props;
    var heading = "";
    if(this.props.match !== undefined){
      heading = this.props.match.params.tableName;
    }
    
    return (
      <div style={{ padding: "30px 0px", backgroundColor: "snow", margin: "0px" }}>
        <h1>{heading + " Table"}</h1>
        <br />
        <hr />
        <br />
        {DataTable(this.state.rows, "table-striped table-light", true)}
        {Modal("deleteModal", "Delete", RecordDelete(activeRecord, index))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isConnected: state.isConnected,
    activeRecord: state.activeRecord,
    onlineUser: state.onlineUser
  }
}

export default connect(mapStateToProps)(withRouter(DatabaseScene));