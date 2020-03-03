import React, { Component } from "react";
import { connect } from "react-redux";
/**component imports */
import DataTable from "client/components/tables/DataTable";
import deleteModal from "./../components/modals/delete";

import ApiService from 'client/services/Api';
import { withRouter } from 'react-router-dom';


//TODO: increase padding for right-hand side
/**
 * @prop {Integer} index  user changes this with container nav
 */
class DatabaseScene extends Component {
  state = { rows: [], oldTableName: '' }

  componentDidMount() {
    this.fetchData();
  }

  /**
   * Only fetch data when data table is rendered
   */
  componentDidUpdate() {
    const { index, isConnected } = this.props;

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
    const { oldTableName } = this.state;

    if (!this.props.match || oldTableName === this.props.match.params.tableName) {
      return;
    }
    const { tableName } = this.props.match.params;
    new ApiService().execute("GET", `${tableName}/table`)
      .then(data => data.data)
      .then((rows) => { this.setState({ rows, oldTableName: tableName }) })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { activeRecord } = this.props;
    var tableName = "";
    if (this.props.match !== undefined) {
      tableName = this.props.match.params.tableName;
    }

    const deleteModalConfig = {
      record: activeRecord,
      tableName
    };
    if(!this.state.rows.length){
      return(
        <h3>Loading...</h3>
      )
    }
    return (
      <div style={{ padding: "30px 0px", backgroundColor: "snow", margin: "0px" }}>
        <h1>{tableName + " Table"}</h1>
        
        <hr />
        <br />
        {DataTable(tableName, this.state.rows, "table-striped table-light", true)}
        {deleteModal(deleteModalConfig)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isConnected: state.isConnected,
    activeRecord: state.activeRecord
  }
}

export default connect(mapStateToProps)(withRouter(DatabaseScene));