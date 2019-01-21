import React, { Component } from "react";
import "./UserList.sass";
import client1 from "../img/client-1.jpg";
import client2 from "../img/client-2.jpg";
import client3 from "../img/client-3.jpg";

class UserList extends Component {
  render() {
    return (
      <div className="userlist">
        <div className="roomTitle">
          <h3>Users in Room</h3>
        </div>
        <div className="list">
          <p className="amount">total: 2</p>
          <div>
            <img src={client1} />
            <h5>1. ADMIN Adminov</h5>
          </div>
          <div>
            <img src={client2} />
            <h5>2. USER Userov</h5>
          </div>
          <div>
            <img src={client3} />
            <h5>3. PLAYER Playerov</h5>
          </div>
          <div className="input">
            <h4 className="invite">Invite Your Friends!!!</h4>
            <input
              type="text"
              placeholder="Link"
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
