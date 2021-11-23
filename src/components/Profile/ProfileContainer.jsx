import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 20894;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='./login' />
        return (

            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.messagesPage.profile,
    isAuth: state.auth.isAuth
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);