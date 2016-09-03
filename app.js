var Square = () => (
  <div className="square">
    <div className="colorText">Hello</div>
  </div>  
);

class TableRow extends React.Component {
  constructor(props) {
    super (props);
    this.state = {};
  }
  
  render() {
    return (
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
  }
}

var App = () => (
    <table>
    <tbody>
      <TableRow/>
    </tbody>
   </table>
);

ReactDOM.render(<App />, document.getElementById('app'));
