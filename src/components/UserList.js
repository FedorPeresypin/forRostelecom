import React, {Component} from 'react';
import UserData from './UserData';

export default class UserList extends Component {
    render() {
        if (!this.props.list) {
            return (<span>Загрузка...</span>)
        }

        return (
            <table className="user-list table table-striped">
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Почта</th>
                    <th>Номера телефона</th>
                </tr>
                </thead>
                <tbody>
                {this.props.list.map(item => {
                    return (
                        <UserData key={item.id} user={item} selectUser={this.props.selectUser}/>
                    )
                })}
                </tbody>
            </table>
        );
    }
}
