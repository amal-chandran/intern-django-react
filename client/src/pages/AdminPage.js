import React, { Component } from "react";
import { connect } from "react-redux";
import MainLayout from "./../mainc/MainLayout";
import { load_posts } from "./../redux/actions/BlogPostAction";
import { Link } from "react-router-dom";

export class AdminPage extends Component {
  componentWillMount() {
    this.props.load_posts();
  }

  render() {
    return (
      <MainLayout>
        <h2>My Posts</h2>
        {this.props.loading ? (
          <div className="alert alert-dark">Loading....</div>
        ) : (
          this.props.postList.map((post, key) => (
            <Link key={key} to={"/admin/post/" + post.id}>
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
  postList: state.blogPost.postList,
  loading: state.blogPost.loadingList
});

const mapDispatchToProps = { load_posts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
