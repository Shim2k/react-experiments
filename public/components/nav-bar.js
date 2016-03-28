var NavBarItems = React.createClass({
  render: function() {
    var items = this.props.items.map((item) => {
      return (
        <div className="nav-bar-item">
          <a href={item.url}>{item.label}</a>
        </div>
      );
    });
    return (
        <div className="nav-bar">{items}</div>
    );
  }
});

var NavBarBox = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.items,
    }
  },
  render: function() {
    return (
        <NavBarItems items={this.state.data} key={this.state.data.id} />
    );
  }
});

ReactDOM.render(
  <NavBarBox items={[{label: 'Home', url: '/'}, {label: 'Posts', url: '/posts'}, {label: 'About', url: '/about'}]} />,
  document.getElementById('navbar')
);
