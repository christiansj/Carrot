import React, { Component } from "react";
import { connect } from "react-redux";

import DataTable from "./../../../components/tables/data-table";
import deleteModal from "../components/modals/delete";

import ApiService from './../../../services/Api';
import { withRouter } from 'react-router-dom';

/**
 * @prop {Integer} index  user changes this with container nav
 */
class DatabaseScene extends Component {
  state = { rows: [], oldTableName: '' }

  componentDidMount() {
    this.fetchData();
  }


  componentDidUpdate() {
    const { index, isConnected } = this.props;

    if (!this.props.match || (this.state.oldTableName === index
      && isConnected)) {
      return;
    }

    this.fetchData();
  }
 

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

    const dataTableConfig = {
      tableName,
      data: this.state.rows,
      classStyle: "table-striped table-light",
      isRenderLinks: true
    }

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
        <DataTable {...dataTableConfig}/>
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