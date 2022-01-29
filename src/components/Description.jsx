import React from 'react';

function Description(props) {
  const { homepageFields } = props;
  const { link } = homepageFields;
  return (
    <div>
      <small>
        Description from&nbsp;
        <a
          href={link}
          alt="Link related to description"
          target="_blank"
          rel="noreferrer"
        >
          { link }
        </a>

      </small>
    </div>
  );
}
export default Description;
