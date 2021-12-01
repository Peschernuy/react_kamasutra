import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../redux/profileReducer";
import { withRouter} from "react-router-dom";

import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUseId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);


    }

    render() {


        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.messagesPage.profile,
    status: state.messagesPage.status,
    authorizedUseId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
    // withAuthRedirect
) (ProfileContainer);






