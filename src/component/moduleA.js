import React, { Component } from 'react';
import { Pagination } from 'antd';
import './index.scss';
export default class Demo extends Component {
    render () {
        return <div>
            <span>hello react antd</span>
            <Pagination />
        </div>;
    }
}
