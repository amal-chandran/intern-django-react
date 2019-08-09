import React, { Component } from "react";
import { connect } from "react-redux";
import MainLayout from "./../mainc/MainLayout";
import { load_posts } from "./../redux/actions/BlogPostAllAction";
import { Link } from "react-router-dom";

export class BlogMainPage extends Component {
  componentWillMount() {
    this.props.load_posts();
  }

  render() {
    return (
      <MainLayout>
        <h2>All Posts</h2>
        {this.props.loading ? (
          <div className="alert alert-dark">Loading....</div>
        ) : (
          this.props.postList.map((post, key) => (
            <Link key={key} to={"/post/" + post.id}>
              <div className="card mb-2">
                <div className="card-body">
                  <h5>{post["title"]}</h5>
                  <div>{post["body"].slice(0, 100)}</div>
                </div>
              </div>
            </Link>
          ))
        )}
      </MainLayout>
    );
  }
}

const mapStateToProps = state => ({
  postList: state.blogPostAll.postList,
  loading: state.blogPostAll.loadingList
});

const mapDispatchToProps = { load_posts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogMainPage);
