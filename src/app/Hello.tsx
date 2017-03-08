import * as React from 'react';
import { Button } from 'antd';
import './Hello.css';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, undefined> {
  render() {
    return (
      <div className='hello-container'>
        <Button type="primary"> Primario </Button>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      </div>
    );
  }
}
