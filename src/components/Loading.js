import React from 'react';
import PropTypes from 'prop-types';
import times from 'lodash/times';
import ContentLoader from 'react-content-loader';

const Loading = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="result-container mt-5">
        <div className="list-group">
          {
            times(5, () => (
              <div key={Math.random()} className="list-group-item">
                <div className="row">
                  <div className="col-12 col-md-8">
                    <ContentLoader
                      primaryColor="#f3f3f3"
                      secondaryColor="#c6c5c7"
                      height={100}
                    >
                      <rect x="0" y="0" rx="4" ry="4" width="155.61" height="8.51" />
                      <rect x="0" y="36" rx="4" ry="4" width="335.61" height="6.51" />
                      <rect x="0" y="46" rx="4" ry="4" width="335.61" height="6.51" />
                      <rect x="0" y="56" rx="4" ry="4" width="275.61" height="6.51" />
                      <rect x="0" y="86" rx="4" ry="4" width="175.61" height="4.51" />
                    </ContentLoader>
                  </div>
                  <div className="d-none d-md-block col-6 col-md-2">
                    <ContentLoader
                      primaryColor="#f3f3f3"
                      secondaryColor="#c6c5c7"
                    >
                      <rect x="0" y="0" rx="4" ry="4" width="355.61" height="24.51" />
                    </ContentLoader>
                  </div>
                  <div className="d-none d-md-block col-6 col-md-2">
                    <ContentLoader
                      primaryColor="#f3f3f3"
                      secondaryColor="#c6c5c7"
                    >
                      <rect x="0" y="0" rx="4" ry="4" width="355.61" height="24.51" />
                    </ContentLoader>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
  return null;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

Loading.defaultProps = {
  isLoading: false,
};

export default Loading;
