import React, { Component } from 'react'
import { Button } from 'antd'
import { RouteComponentProps } from 'react-router-dom'

export default class Login extends Component<RouteComponentProps> {
    render() {
        return (
            <div>
                <Button onClick={()=>this.props.history.push("/")}>Router测试-主界面</Button>
            </div>
        )
    }
}
