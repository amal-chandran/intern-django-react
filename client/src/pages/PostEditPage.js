import React, { Component } from "react";
import { connect } from "react-redux";
import MainLayout from "./../mainc/MainLayout";
import { Formik, Form, Field } from "formik";
import { FormGroup, Label } from "reactstrap";
import {
  create_post,
  update_post,
  load_post
} from "./../redux/actions/BlogPostAction";

export class PostEditPage extends Component {
  componentWillMount() {
    if (this.props.match.params.id !== undefined) {
      this.props.load_post(this.props.match.params.id);
    }
  }
  render() {
    const { postData, match } = this.props;

    let formAction = "create";
    let initialValues = { title: "", body: "" };

    if (match.params.id !== undefined && postData) {
      initialValues.title = postData.title;
      initialValues.body = postData.body;
      formAction = "update";
    }
    return (
      <MainLayout>
        <Formik
          enableReinitialize={true}
          onSubmit={(values, actions) => {
            if (formAction === "create") this.props.create_post(values);
            else this.props.update_post(match.params.id, values);

            actions.setSubmitting(false);
          }}
          initialValues={initialValues}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormGroup>
                <Label for="title-form">Title</Label>
                <Field
                  className="form-control"
                  type="text"
                  id="title-form"
                  name="title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="body-form">Post Body</Label>
                <Field
                  component="textarea"
                  className="form-control"
                  id="body-form"
                  name="body"
                />
              </FormGroup>

              <button
                className="btn w-100 btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </MainLayout>
    );
  }
}

const mapStateToProps = state => ({ postData: state.blogPost.postData });

const mapDispatchToProps = { create_post, update_post, load_post };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEditPage);
