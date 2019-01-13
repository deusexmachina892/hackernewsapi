import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchTopTenStories } from '../../actions';
import FeedView from './FeedView';

class FeedContainer extends PureComponent{
    componentDidMount(){
        this.props.fetchTopTenStories();
    }
    render(){
        const { stories } = this.props;
        return(
            <Fragment>
               <FeedView stories={stories}/>
            </Fragment>
        )
    }
}

function mapStateToProps({stories}){
    return {stories};
}

export default connect(mapStateToProps,{ fetchTopTenStories })(FeedContainer);