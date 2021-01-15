import React, {Component} from 'react';

export default class ActiveUser extends Component {
    render() {
        if (!this.props.user) {
            return (<h2>Такого пользователя нет!</h2>);
        }

        return (
            <div className="thumbnail">
                <h2>Выбранный пользователь</h2>
                <div className="thumbnail-caption">
                    <h3>{this.props.user.name}</h3>
                    <table className="user-info table table-responsive">
                        <tbody>
                        <tr>
                            <td>Имя:</td>
                            <td>{this.props.user.name}</td>
                        </tr>
                        <tr>
                            <td>Почта:</td>
                            <td>{this.props.user.email}</td>
                        </tr>
                        <tr>
                            <td>Телефон:</td>
                            <td>
                               <span>{this.props.user.phone}</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br></br>
                </div>
            </div>
        );
    }
}
