import React, {Component} from 'react';

export default class ToolBar extends Component {
    render() {
        return (
            <div className="toolbar">
                <button className="btn btn-default" onClick={this.props.sortByName}>
                    <span> Сортировать по имени</span>
                </button>
            </div>
        );
    }
}
