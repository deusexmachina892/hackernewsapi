import React, { Fragment } from 'react';


const createMarkup = (text) => {
    return {__html: text};
}
const Comment = ({ comment }) => {
  const { by, text, time } = comment;
  return(<Fragment>
      <div className="comment">
      <div>
        <span className="author">{by}:</span>&nbsp;
        <span className="text" dangerouslySetInnerHTML={createMarkup(text)}/>
      </div>
      <div className="date"> {new Date(time*1000).toDateString()}</div>
      </div>
  </Fragment>)
}

export default Comment;