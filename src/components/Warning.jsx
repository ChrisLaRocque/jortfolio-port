import React, { useState } from 'react';

function Warning() {
  const [styleObj, setStyleObj] = useState({});
  function close() {
    setStyleObj({ display: 'none' });
  }
  return (
    <article id="in-progress" className="message is-warning" style={styleObj}>
      <div className="message-header">
        <p>In progress...</p>
        <button className="delete" aria-label="delete" type="button" onClick={close} />
      </div>
      <div className="message-body">
        My bad y'all, life is crazy and/or I'm trying to remember all the deets of
        this specific project.
      </div>
    </article>
  );
}
export default Warning;
