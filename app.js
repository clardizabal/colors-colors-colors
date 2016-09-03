var colors = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  }


  render() {
    var divStyle = {
      background: this.state.color
    }

    return (
      <div className="square" style={divStyle}>
        <div className="colorText">{this.state.color}</div>
      </div>
    );
  }
}

var TableRow = () => (
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

var App = () => (
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
