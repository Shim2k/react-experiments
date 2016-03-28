var Post = React.createClass({
  render: function() {
    return (
      <div className="post">
        <div className="title">{this.props.post.title}</div>
        <div className="content">{this.props.post.content}</div>
      </div>
    )
  }
});

var PostList = React.createClass({
  loadPosts: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []}
  },
  componentDidMount: function() {
    this.loadPosts();
    setInterval(this.loadPosts, 10000);
  },
  render: function() {
    var postList = this.state.data.map(function(post) {
      return (
        <Post post={post} key={post.id} />
      );
    });
    return (
      <div className="postList">
        {postList}
      </div>
    );
  }
});

ReactDOM.render(
  <PostList url="/api/posts" />,
  document.getElementById('posts')
);
