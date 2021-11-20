const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

    // userId: 20894,
    // email: 'peschernuy@gmail.com',
    // login: 'Peschernuy'

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                 isAuth: true
            }


        default:
            return state;
    }

}

export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data: {userId,email,login}})
export default authReducer;