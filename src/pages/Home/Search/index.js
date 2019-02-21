import React, { Component } from "react";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };
  render() {
    var { keyword } = this.state;
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="input-group" style={{ marginLeft: 805 }}>
            <form className="form-inline">
              <div className="md-form my-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  aria-label="Search"
                  name="keyword"
                  placeholder="Search"
                  value={keyword}
                  onChange={this.onChange}
                />
              </div>
            </form>

            <button
              type="button"
              className="btn btn-sm btn-primary"
              style={{ paddingBottom: 10 }}
              onClick={this.onSearch}
            >
              <span className="fa fa-search mr-1" />
              Search
            </button>
          </div>
        </div>

        {/* <form className="form-inline">
                                <div className="md-form my-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                </div>
                            </form> */}
      </div>
    );
  }
}

export default index;
