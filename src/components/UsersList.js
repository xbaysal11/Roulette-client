import React, { Component } from "react";
import "./UserList.sass";

class UserList extends Component {
  render() {
    return (
      <div className="userlist">
        <div className="roomTitle">
          <h3>Users in Room</h3>
        </div>
        <div>
          <p className="amount">total: 2</p>
          <div>
            <h5>1. ADMIN Adminov</h5>
          </div>
          <div>
            <h5>2. USER Userov</h5>
          </div>
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
