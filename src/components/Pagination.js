import 'rc-pagination/assets/index.css';
import React, { Component } from 'react';
import ReactPagination from 'rc-pagination';
import PropTypes from 'prop-types';

class Pagination extends Component {
  render() {
    const { onChange, totalResults } = this.props;
    const total = totalResults >= 1000 ? 1000 : totalResults;
    return (
      <ReactPagination
        onChange={onChange}
        total={total}
        className="d-flex justify-content-center p-5"
      />
    );
  }
}

Pagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  totalResults: PropTypes.number,
};

Pagination.defaultProps = {
  totalResults: 0,
};

export default Pagination;
