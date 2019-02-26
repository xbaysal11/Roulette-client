import React, { Component } from "react";
import PT from "prop-types";
import { connect } from "react-redux";
import CN from "classnames";
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
User.propTypes = {
    first_name: PT.string.isRequired,
    last_name: PT.string.isRequired,
    idx: PT.number.isRequired,
    is_admin: PT.bool.isRequired
};

class UserList extends Component {
    static propTypes = {
        users: PT.array.isRequired
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

export default connect(state => ({ users: state.users }))(UserList);
