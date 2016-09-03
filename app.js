const colors = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      /* Generate a randome color from list of colors */
      color: colors[Math.floor(Math.random() * colors.length)],
      textColor: 'white',
    };

    this.changeColor = this.changeColor.bind(this);
  }


  changeColor() {
    let index = colors.indexOf(this.state.color);
    index = index < colors.length - 1 ? index + 1 : 0;
    this.setState({color: colors[index]});
  }

  render() {
    /* Inline styling */
    const squareStyle = {
      background: this.state.color,
    }
    const textStyle = {
      color: this.state.color === 'yellow' ? 'black' : 'white',
    }

    return (
      <div className="square" style={squareStyle} onClick={this.changeColor}>
        <div className="colorText" style={textStyle}>{this.state.color}</div>
      </div>
    );
  }
}

const TableRow = () => (
  <tr>
    <td>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
    </td>
  </tr>
);

const App = () => (
    <table>
      <tbody>
        <TableRow/>
        <TableRow/>
        <TableRow/>
        <TableRow/>
        <TableRow/>
        <TableRow/>
        <TableRow/>
        <TableRow/>
        <TableRow/>
        <TableRow/>
      </tbody>
   </table>
);

ReactDOM.render(<App />, document.getElementById('app'));
