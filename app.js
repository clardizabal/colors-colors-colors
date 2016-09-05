const colors = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];
const title = 'C o l o r s';
const size = 10;

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      /* Assign initial color to square */
      color: colors[props.index]
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
    /* Inline dynamic style for Square and Text */
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

const TableRow = (props) => (
  <tr>
    <td>
      {props.sequence.map(index =>
        <Square index = {index}/>)}
    </td>
  </tr>
);

const Table = () => {
  /* Initialize sequence by creating matrix with indices of color sequence */
  const grid = [];
  let index = 0;
  for (let x = 0; x < size; x++) {
    let row = [];
    for (let y = 0; y < size; y++) {
      row = row.concat(index);
      index = ++index < colors.length ? index : 0;
    }
    grid.push(row);
  }

  return (
    <table>
      <tbody>
      {grid.map(sequence =>
        <TableRow sequence = {sequence}/>)}
      </tbody>
    </table>
  );
};

const Header = () => (
  <div id='header'>
    <div id='title'>{title}</div>
  </div>
);

const Footer = () => (
  <footer>
    <div>
      10 x 10, 50px by 50px squares. Click on a square and watch it transistion into another color. Built with&nbsp;
      <a href="https://facebook.github.io/react/">React.js</a>
    </div>
  </footer>
);

const App = () => (
  <div>
    <Header/>
    <Table/>
    <Footer/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
