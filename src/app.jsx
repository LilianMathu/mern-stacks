class IssueFilter extends React.Component {
  render () {
    return (
      <div>This is a placeholder for issue filter</div>
    )
  }
}

class IssueTables extends React.Component {
  render() {
    return (
      <div>This is a placeholder for table of issues</div>
    )
  }
}

class IssueAdd extends React.Component {
  render () {
    return (
      <div> This is a placeholder for an add issue entry form</div>
    )
  }
}

class IssueList extends React.Component{
  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTables />
        <hr />
        <IssueAdd />
      </div>
    );
  }
}

ReactDOM.render(<IssueList />, document.getElementById('contents'));
