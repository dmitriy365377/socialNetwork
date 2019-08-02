import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { followActionCreator } from '../../redux/users-reducer';
import { unfollowActionCreator } from '../../redux/users-reducer';
import { setUsers } from '../../redux/users-reducer';
import { setCurrentPageAC } from '../../redux/users-reducer';
import { setUsersTotalCountAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)