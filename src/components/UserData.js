import React, {Component} from 'react';

export default class UserData extends Component {
    selectUser = () => {
        this.props.selectUser(this.props.user);
    };

    render() {
        return (
            <tr onClick={this.selectUser}>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.phone}</td>
            </tr>
        );
    }
}
