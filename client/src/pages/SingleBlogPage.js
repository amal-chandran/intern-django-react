import React, { Component } from "react";
import { connect } from "react-redux";
import MainLayout from "./../mainc/MainLayout";
import { load_post, delete_post } from "./../redux/actions/BlogPostAction";
import { load_post as load_post_all } from "./../redux/actions/BlogPostAllAction";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";

export class SingleBlogPage extends Component {
  componentWillMount() {
    if (this.props.admin) {
      this.props.load_post(this.props.match.params["id"]);
    } else {
      this.props.load_post_all(this.props.match.params["id"]);
    }
  }
  render() {
    let { postData, postDataAll, userAuth } = this.props;
    if (!this.props.admin) postData = postDataAll;

    if (postData && postData.id)
      return (
        <MainLayout>
          <h2>{postData.title}</h2>
          {this.props.admin || postData.owner === userAuth.id ? (
            <div>
              <Link
                to={"/admin/post/" + postData.id + "/edit"}
                className="btn btn-primary"
              >
                Edit
              </Link>
              <button
                onClick={() => this.props.delete_post(postData.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          ) : (
            ""
          )}
          <time className="text-black-50" time={postData.created_at}>
            <TimeAgo date={postData.created_at} />
          </time>
          <div className="mt-4">{postData.body}</div>
        </MainLayout>
      );
    else
      return (
        <MainLayout>
          {this.props.loading ? (
            <div className="alert alert-dark">Loading....</div>
          ) : (
            <h4>No Post Found</h4>
          )}
        </MainLayout>
      );
  }
}

const mapStateToProps = state => ({
  postData: state.blogPost.postData,
  postDataAll: state.blogPostAll.postData,
  userAuth: state.auth.user,
  loading: state.blogPostAll.loadingSingle || state.blogPost.loadingSingle
});

const mapDispatchToProps = { load_post_all, load_post, delete_post };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBlogPage);
