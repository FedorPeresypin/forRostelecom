import React, {Component} from 'react';

export default class SearchBar extends Component {
    changeValue = (e) => {
        this.props.changeValue(e.target.value);
    };

    render() {
        return (
            <div className="form-group">
                <input value={this.props.searchValue} onChange={this.changeValue}
                       type="text" className="form-control"
                       placeholder="Введите имя пользователя..."/>
            </div>
        );
    }
}
