import React, {Component} from 'react';
import DataTable from "client/components/tables/DataTable";
const dummyUsers= [{username: "Im_banned"}]

// TODO Have MYSQL return the role 'string' instead of the role 'int'
class UserlistScene extends Component{
  state = {rows: dummyUsers}
  componentDidMount(){
    fetch("/getAll/FakeUser/")
    .then(data => data.json())
    .then((rows) =>{ this.setState({rows})})
  
    .catch(err=> {
      console.log(err)
    })
  }
  renderUsernames(){
    return(
      this.state.rows.map((row, index)=> {
        return <p>{row.firstName} {row.reason} {row.bannedUntil}</p>
      })
    )
  }
  render(){
    return(
      <div className>
        <h1>User Work</h1>
        {DataTable(this.state.rows, "table-hover", false)}
      </div>

    )
  }
}
export default UserlistScene;