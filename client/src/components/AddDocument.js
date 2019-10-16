import React from "react";
import DocumentService from "./DocumentService";

class AddDocument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      document_title: "",
      desc: "",
      due_date: ""
    };
  }

  addDoc = () => {
    DocumentService.postApi("create-document", {
      document_title: this.state.document_title,
      desc: this.state.desc,
      due_date: this.state.due_date
    })
      .then(json => {
        if (json.data.statusCode === 200) {
          this.props.history.push("/index");
        } else {
          alert("something went wrong!!");
          this.props.history.push("/index");
        }
      })
      .catch(error => {
        console.log("error-----------", error);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Add Tasks:</h2>
        <div className="row justify-content-md-center">
          <div className="col-md-6 col-md-offset-3">
            <form>
              <div className="form-group">
                <label>Title:</label>
                <input
                  name="document_title"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.document_title}
                ></input>
              </div>

              <div className="form-group">
                <label>Description:</label>
                <input
                  name="desc"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.desc}
                ></input>
              </div>

              <div className="form-group">
                <label>Due Date</label>
                <input
                  name="due_date"
                  type="Date"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.due_date}
                ></input>
              </div>
              <button
                type="button"
                onClick={this.addDoc}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddDocument;
