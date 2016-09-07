const colors = ['black', 'yellow', 'cyan', 'green', 'magenta', 'red', 'yellow'];
const title = 'C o l o r s';
const size = 5;

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLight = this.toggleLight.bind(this);
  }

  toggleLight() {
    this.props.toggleLights(this.props.x, this.props.y);
  }

  render() {
    /* Inline dynamic style for Square and Text */
    const squareStyle = {
      background: colors[this.props.index],
    }
    const textStyle = {
      color: (colors[this.props.index] === 'yellow' ||
        colors[this.props.index] === 'cyan') ? 'black' : 'white',
    }

    return (
      <div className="square" style={squareStyle} onClick={this.toggleLight}>
        <div className="colorText" style={textStyle}>{colors[this.props.index]}</div>
      </div>
    );
  }
}

const TableRow = (props) => (
  <tr>
    <td>
      {props.sequence.map((index, y) =>
        <Square index={index} x={props.x} y={y} toggleLights={props.toggleLights}/>)}
    </td>
  </tr>
);

const makeEmptyMatrix = (n) => {
  return _.range(n).map(() => {
    return _.range(n).map(() => 0);
  });

};

const generateRandomIndices = (board) => {
  let randomRow = Math.floor(Math.random() * size);
  let randomCol = Math.floor(Math.random() * size);
  if (board[randomRow][randomCol]) {
    generateRandomIndices(board);
  } else {
    board[randomRow][randomCol] = 1;
  }
};

const grid = makeEmptyMatrix(size);
const randomInteger = Math.floor(Math.random() * Math.pow(size, 2));
for (let i = 0; i  < randomInteger; i++) {
  generateRandomIndices(grid);
}

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {grid}
    this.toggleLights = this.toggleLights.bind(this);
  }

  toggleLights(x, y) {
    grid[x][y] = grid[x][y] ? 0 : 1;
    // console.log(grid[x][y]);
    for (let i = -1; i <= 1; i += 2) {
      if (y + i < size && y + i >= 0) {
        grid[x][y + i] = grid[x][y + i] ? 0 : 1;
      }
      if (x + i < size && x + i >= 0) {
        grid[x + i][y] =  grid[x + i][y] ? 0 : 1;
      }
    }
    this.setState({grid});
  }

  render() {
    return (
      <table>
        <tbody>
        {this.state.grid.map((sequence, index) =>
          <TableRow sequence={sequence} x={index} toggleLights={this.toggleLights}/>)}
        </tbody>
      </table>
    );
  }
}

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
