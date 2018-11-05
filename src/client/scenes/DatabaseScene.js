import React, { Component } from "react";

import { connect } from "react-redux";

import DataTable from "./../components/tables/DataTable";
import Modal from "./../services/modal";
import RecordDelete from "./../services/RecordDelete";
const TABLE_NAMES = require("./../../server/data/TableNames");
class DatabaseScene extends Component {
  state = { rows: dummyData, previousIndex: this.props.index }
  
  componentDidMount(){
    this.setState({previousIndex: -1});
  }
  componentDidUpdate() {
    if(this.props.index >= TABLE_NAMES.length) 
      return;
    this.fetchData();
  }
  fetchData(){
    if (this.props.isConnected && this.state.previousIndex != this.props.index) {
      var tableName = "Book";
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
      <div style={{ padding: "30px 20px", backgroundColor: "grey" }}>
        <h1>{heading}</h1>
        {DataTable(this.state.rows)}
        {Modal("deleteModal", RecordDelete(this.props.activeRecord, this.props.index))}
      </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    allBooks: state.allBooks,
    isConnected: state.isConnected,
    activeRecord: state.activeRecord
  }
}
const dummyData = [
  { title: "Jack and the Beanstalk", firstName: "Christopher", lastName: "Bee" },
  { title: "Spyro the Dragon", firstName: "Leo", lastName: "Lion" },
  { title: "Clark the Shark", firstName: "Raj", lastName: "Patel" }
]
export default connect(mapStateToProps)(DatabaseScene);