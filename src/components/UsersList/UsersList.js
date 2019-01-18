import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UserList.sass";

class UserList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  render() {
    const { users } = this.props;
    return (
      <div className="userlist">
        <div className="roomTitle">
          <h3>Users in Room</h3>
        </div>
        <div>
          <p className="amount">total: {users.length}</p>
          {users.map((u, idx) => (
            <div>
              <h5>
                {idx + 1}. {u.firstName} {u.lastName}
              </h5>
            </div>
          ))}
          <div className="input">
            <h3>Invite Your Friends!!!</h3>
            <input
              type="text"
              // placeholder=""
              text="ww.random.kg"
              // onChange={this.changeLastName}
            />
            <button>Copy!</button>
          </div>
        </div>
      </div>
    );
  }
}
export default UserList;
