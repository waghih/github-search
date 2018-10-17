import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from 'actions';
import isEmpty from 'lodash/isEmpty';
import Pagination from 'components/Pagination';
import Searchbar from 'components/Searchbar';
import Result from 'components/Result';
import Error from 'components/Error';
import Loading from 'components/Loading';

const PER_PAGE = 10;

class App extends Component {
  state = {
    error: false,
    query: '',
  }

  handleKeyPress = (e) => {
    const { query } = this.state;
    if (e.keyCode === '13' || e.key === 'Enter') {
      if (query === '') {
        this.setState({ error: true });
        return;
      }
      this.search();
    }
  }

  search(page = 1) {
    const { searchRepositories } = this.props;
    const { query } = this.state;
    const params = {
      page,
      per_page: PER_PAGE,
      q: query,
    };
    searchRepositories(params);
  }

  render() {
    const { results, requestError, isLoading } = this.props;
    const { query, error } = this.state;

    return (
      <div className="container-fluid p-3">
        <Searchbar
          placeholder="Hit 'enter' to search..."
          value={query}
          onChange={e => this.setState({ query: e.target.value, error: false })}
          onKeyPress={this.handleKeyPress}
          error={error}
        />
        <Loading isLoading={isLoading} />
        {(requestError !== null) && <Error />}
        {!isEmpty(results) && !isLoading && <Result data={results} />}
        {!isEmpty(results) && !isEmpty(results.items) &&
          <Pagination onChange={page => this.search(page)} totalResults={results.total_count} />
        }
      </div>
    );
  }
}

App.propTypes = {
  searchRepositories: PropTypes.func.isRequired,
  results: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  requestError: PropTypes.any,
};

App.defaultProps = {
  requestError: null,
};

const mapStateToProps = store => ({
  results: Actions.getSearchResults(store),
  isLoading: Actions.getSearchProgress(store),
  requestError: Actions.getSearchRequestError(store),
});

const mapDispatchToProps = {
  searchRepositories: Actions.searchRepositories,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
