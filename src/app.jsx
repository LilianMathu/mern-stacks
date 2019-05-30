class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for filter of issues</div>
    )
  }
}
class IssueRows extends React.Component {
  render() {
    const issue = this.props.issue;
    return (<tr>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.completionDate ?
        issue.completionDate.toDateString() : ''}</td>
      <td>{issue.title}</td>
    </tr>
    )
  }
}

class IssueTables extends React.Component {
  render() {
    const issueRows = this.props.issues.map(issue => <IssueRows key={issue.id} issue={issue} />)
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date </th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    )
  }
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.issueAdd;
    this.props.createIssue({
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      created: new Date(),
    });
    //clear the form from the next input
    form.owner.value = ""; form.title.value = "";
  }

  render() {
    return (
      <div>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="owner" placeholder="Owner" />
          <input type="text" name="title" placeholder="Title" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

const issues = [
  {
    id: 1, status: 'Open', owner: 'Ravan',
    created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    id: 2, status: 'Assigned', owner: 'Eddie',
    created: new Date('2016-08-16'), effort: 14,
    completionDate: new Date('2016-08-30'),
    title: 'Missing bottom border on panel',
  },
];
class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };    //state initialization
    //this.createTestIssue = this.createTestIssue.bind(this);
    //setTimeout(this.createTestIssue, 2000);
    this.createIssue = this.createIssue.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {          //uses the global issues list to set the state
    setTimeout(() => {
      this.setState({ issues: issues });
    }, 500);
  }



  createIssue(newIssue) {
    const newIssues = this.state.issues.slice(); //make a copy of the issues array in the state by calling slice()
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);           // push the new issue to be created into the array
    this.setState({ issues: newIssues })   //call this.setState with new array modifies state of the component
  }
  /*createTestIssue() {
    this.createIssue({
      status: "new", owner: "pieta", created: new Date(), title: "completion date should be optional",
    })
  }
*/
  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTables issues={this.state.issues} />
      {/*  <button onClick={this.createTestIssue}>Add</button> */}
        <hr />
        <IssueAdd createIssue = { this.createIssue } />
      </div>
    );
  }
}

ReactDOM.render(<IssueList />, document.getElementById('contents'));
