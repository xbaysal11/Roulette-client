import React, { Component } from "react";
import CN from "classnames";
import PropTypes from "prop-types";
import "./UserList.scss";
import client1 from "../../img/client-1.jpg";

const User = ({ first_name, last_name, idx, is_admin }) => (
    <div className={CN("user_list_item", { admin: is_admin })}>
        <img src={client1} alt="" />
        <h5>
            {idx + 1}. {first_name} {last_name}
        </h5>
    </div>
);

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
                <p className="amount">total: {users.length}</p>
                <div className="users_list">
                    {users.map((u, idx) => (
                        <User {...u} key={u.id} idx={idx} />
                    ))}
                </div>
                <form className="link">
                    <h4 className="invite">Invite Your Friends!!!</h4>
                    <input
                        type="text"
                        placeholder="Link"
                        text="ww.random.kg"
                        // onChange={this.changelast_name}
                    />
                    <button>Copy!</button>
                </form>
            </div>
        );
    }
}
export default UserList;
