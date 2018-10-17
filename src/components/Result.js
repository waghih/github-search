import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

class Result extends Component {
  renderEmptyResult = () => (
    <h4 className="text-danger text-center pt-4">
      <i className="fa fa-meh-o  mr-2" />
      Oops! No results matched your query
    </h4>
  );

  renderSearchResults() {
    const { data: { items, total_count: totalCount } } = this.props;
    return (
      <div className="result-container">
        <h4 className="my-4">{totalCount} repository results</h4>
        <div className="list-group">
          {
            items.map(item => (
              <div key={item.id} className="list-group-item">
                <div className="row">
                  <div className="col-12 col-md-8">
                    <h5 className="mb-1 text-primary">{item.full_name}</h5>
                    <p>{item.description}</p>
                    <small className="text-secondary">
                      Updated on {moment(item.updated_at).format('ddd MMM DD YYYY')}
                    </small>
                  </div>
                  <div className="col-6 col-md-2">
                    <small className="d-flex align-items-center">
                      <i className="fa fa-circle mr-2" />
                      {item.language}
                    </small>
                  </div>
                  <div className="col-6 col-md-2">
                    <small className="d-flex align-items-center">
                      <i className="fa fa-star mr-2" />
                      {item.stargazers_count}
                    </small>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

  render() {
    const {
      data: { items },
    } = this.props;

    if (isEmpty(items)) {
      return this.renderEmptyResult();
    }
    return this.renderSearchResults();
  }
}

Result.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Result;
