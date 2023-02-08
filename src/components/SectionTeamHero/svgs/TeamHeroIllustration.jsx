import React from 'react';
import PropTypes from 'prop-types';

export default function TeamHeroIllustration(props) {
  return (
    <svg
      width="591"
      height="150"
      viewBox="0 0 591 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.7465 1C-3.75362 29 -2.46624 63.5 17.2463 91C57.7464 147.5 132.246 148.5 132.246 148.5C202.246 154 313.246 89 313.246 89C313.246 89 401.766 41.9515 463.746 39C505.746 37 558.246 54.5 586.246 107.5M586.246 107.5C587.517 103.79 589.5 98 589.5 98M586.246 107.5C581.854 106.524 575 105 575 105"
        stroke="#0048C1"
        strokeWidth="2"
      />
    </svg>
  );
}

TeamHeroIllustration.propTypes = {
  className: PropTypes.string,
};
