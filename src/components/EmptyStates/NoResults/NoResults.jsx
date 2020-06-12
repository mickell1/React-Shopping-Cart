import React from "react";
import noresults from '../../../images/no-results.png';

import './NoResults.scss';

const NoResults = () => {
  return (
    <div className="products">
      <div className="no-results">
        <img
          src={noresults}
          alt="No results"
        />
        <h2>Sorry, no products matched your search!</h2>
        <p>Enter a different keyword and try.</p>
      </div>
    </div>
  );
};

export default NoResults;
