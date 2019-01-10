import React, { PureComponent, Fragment } from 'react';

import FeedView from './FeedView';
class FeedContainer extends PureComponent{
    render(){
        return(
            <Fragment>
               <FeedView />
            </Fragment>
        )
    }
}

export default FeedContainer;