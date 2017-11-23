import React, { Component } from 'react';

class SkyscrapperCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }

    render() {
        return (
            <button className="flex-item">
                {this.props.value}
            </button>
        );
    }
}

export default SkyscrapperCell;