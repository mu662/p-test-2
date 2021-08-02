import React, { Component } from "react";
import { withRouter, Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { actionFetchUsers } from "../redux/actions"

class ListComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actionFetchUsers();
  }

  render() {
    let user = localStorage.getItem("authUser");
    if (!user) return (<Redirect to={'/login'} />)
    const { fetchUser, usersList, fetchUserFail } = this.props;
    var error = fetchUserFail ? JSON.parse(fetchUserFail) : null;
    return (
      <>
        <div className="container">
          <h2>Users List</h2>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              {usersList && usersList.data ?
                usersList.data.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.number}</td>
                    </tr>
                  )
                })
                : null}
            </tbody>
          </table>
        </div>
        {fetchUser ? <p>Loading...</p> : null}
        {fetchUserFail ?
          <div class="alert alert-danger">
            <strong>Failed!</strong> {error.message}
          </div>
          : null}

        <p style={{ textAlign: 'center', fontSize: '30px' }}>
          <Link to={`/register`}>Add More</Link>
        </p>
      </>
    )
  }

}

const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actionFetchUsers: () => dispatch(actionFetchUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ListComponent));
