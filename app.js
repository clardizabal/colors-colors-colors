const colors = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      /* Generate a randome color from list of colors */
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    /* Find index of current color in sequence */
    let index = colors.indexOf(this.state.color);
    /* Get index of next color in seqequence and change state */
    index = index < colors.length - 1 ? index + 1 : 0;
    this.setState({color: colors[index]});
  }

  render() {
    /* Inline styling for Square and Text */
    const squareStyle = {
      background: this.state.color,
    }
    const textStyle = {
      color: (this.state.color === 'yellow' ||
        this.state.color === 'cyan') ? 'black' : 'white',
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

const Header = () => (
  <div id='header'>
    <div id='title'>C o l o r s</div>
  </div>
)

const App = () => (
  <div>
    <Header/>
    <div className='grid'>
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
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
