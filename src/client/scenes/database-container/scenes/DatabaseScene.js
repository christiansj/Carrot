import React, { Component } from "react";
import { connect } from "react-redux";
/**component imports */
import DataTable from "client/components/tables/DataTable";
import Modal from "client/services/modal";
import RecordDelete from "client/services/RecordDelete";

const TABLE_NAMES = require("server/data/TableNames");

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
  state = { rows: dummyData, previousIndex: this.props.index }
  /**
   * Reset proviousIndex upon intial render
   */
  componentDidMount(){
    this.setState({previousIndex: -1});
  }
  /**
   * Only fetch data when data table is rendered
   */
  componentDidUpdate() {
    if(this.props.index >= TABLE_NAMES.length) 
      return;
    this.fetchData();
  }
  /**
   * Retrieve all records from specified table.
   * 
   * User clicks on "All Books", "All Authors", etc.
   * to determine what data to fetch
   */
  fetchData(){
    if (this.props.isConnected && this.state.previousIndex != this.props.index) {
      var tableName = "Book"; //default val
      
      if(this.props.index < TABLE_NAMES.length) 
        tableName = TABLE_NAMES[this.props.index];
      
      fetch("getAll/" + tableName + "/")
        .then(data => data.json())
        .then((rows) => { this.setState({ rows, previousIndex: this.props.index }) })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    var heading = TABLE_NAMES[this.props.index];
    heading = heading[0].toUpperCase() + heading.slice(1);
    return (
      <div style={{ padding: "30px 0px", backgroundColor: "snow", margin: "0px" }}>
        <h1>{heading + " Table"}</h1>
        {DataTable(this.state.rows)}
        {Modal("deleteModal", RecordDelete(this.props.activeRecord, this.props.index))}
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

export default connect(mapStateToProps)(DatabaseScene);