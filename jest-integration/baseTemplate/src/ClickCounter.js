import Preact, { h, Component } from 'preact';

export default class ClickCounter extends Component {
  
  constructor() {
    super();
    this.state = { count: 0 };
    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  
  render() {
    return (
        <button className={'foo bar' + (this.props.className || '')} onClick={this.onClick}>Clicked {this.state.count} times</button>
    );
  }
}

