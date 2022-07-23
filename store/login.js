export const state = () => ({
    activeAuthTab: 'signin',
    userData: {
        email: '',
        username: '',
        password: ''
    },
    signInData: {
        username: '',
        password: '',
    },
    resetData: {
        email: '',
        password: '',
    },
    errorStaleToken: false,
    succesMessage: false,
    resetSuccesEmail: false,
    resendActivateSucces: false,
    resetSuccesPassword: false,
    errorsEmail: [
        {
            type: 'email_blank',
            error: false,
            message: 'Данное поле не может быть пустым'
        },
        {
            type: 'email_exist',
            error: false,
            message: 'Пользователь с такой электронной почтой уже существует'
        },
        {
            type: 'email_invalid',
            error: false,
            message: 'Введен некорректный формат электронной почты'
        },
    ],
    errorsUsername: [
        {
            type: 'username_blank',
            error: false,
            message: 'Данное поле не может быть пустым'
        },
        {
            type: 'username_invalid',
            error: false,
            message: 'Имя пользователя может содержать только латинские буквы и цифры, а также символы: точка(.), нижнее подчеркивание( _ )'
        },
        {
            type: 'username_exist',
            error: false,
            message: 'Пользователь с таким именем уже существует'
        },
    ],
    errorsPassword: [
        {
            type: 'password_create',
            error: false,
            message: 'Пароль должен быть не короче 8 символов, содержать хотя бы одну букву и цифру'
        },
    ],

    errorsPasswordReset: [
        {
            type: 'password_reset',
            error: false,
            message: 'Пароль должен быть не короче 8 символов, содержать хотя бы одну букву и цифру'
        },
        {
            type: 'notexist',
            error: false,
            message: 'Такого пользователя не существует'
        },
        {
            type: 'token',
            error: false,
            message: 'Текущая ссылка уже неактивна'
        },
    ],

    errorsSignin: [
        {
            type: 'signin_fail',
            error: false,
            message: 'Введены неверные логин или пароль'
        },
        {
            type: 'notactive',
            error: false,
            message: 'Ваш аккаунт не прошел активацию'
        },
    ],

    errorResetEmail: [
        {
            type: 'email_invalid',
            error: false,
            message: 'Введен некорректный формат электронной почты'
        },
        {
            type: 'email_notexist',
            error: false,
            message: 'Данная электронная почта не зарегистрирована'
        },
        {
            type: 'notactive',
            error: false,
            message: 'Ваш аккаунт не прошел активацию'
        },
    ],


})

export const mutations = {
    canSubmitClass(state, value) {
        state.canSubmit = value
    },
    changeAuthTab(state, tab) {
        state.activeAuthTab = tab
    },
    updateEmail(state, value) {
        state.userData.email = value
    },
    updateUsername(state, value) {
        state.userData.username = value
    },
    updatePassword(state, value) {
        state.userData.password = value
    },
    enterUsername(state, value) {
        state.signInData.username = value
    },
    enterPassword(state, value) {
        state.signInData.password = value
    },
    putNewPassword(state, value) {
        state.resetData.password = value
    },
    putEmail(state, value) {
        state.resetData.email = value
    },
    makeSucces(state, value) {
        state.succesMessage = value
    },
    resetSuccesEmail(state, value) {
        state.resetSuccesEmail = value
    },
    resetSuccesPassword(state, value) {
        state.resetSuccesPassword = value
    },
    resendActivateSucces(state, value) {
        state.resendActivateSucces = value
    },
    catchErrorStaleToken(state, value) {
        state.errorStaleToken = value
    },
    catchEmailBlank(state, value) {
        state.errorsEmail.find(el => el.type === 'email_blank').error = value
    },
    catchEmailExist(state, value) {
        state.errorsEmail.find(el => el.type === 'email_exist').error = value
    },
    catchEmailInvalid(state, value) {
        state.errorsEmail.find(el => el.type === 'email_invalid').error = value
    },
    catchUsernameBlank(state, value) {
        state.errorsUsername.find(el => el.type === 'username_blank').error = value
    },
    catchUsernameInvalid(state, value) {
        state.errorsUsername.find(el => el.type === 'username_invalid').error = value
    },
    catchUsernameExist(state, value) {
        state.errorsUsername.find(el => el.type === 'username_exist').error = value
    },
    catchPasswordCreate(state, value) {
        state.errorsPassword.find(el => el.type === 'password_create').error = value
    },
    catchPasswordReset(state, value) {
        state.errorsPasswordReset.find(el => el.type === 'password_reset').error = value
    },
    catchPasswordResetNotExist(state, value) {
        state.errorsPasswordReset.find(el => el.type === 'notexist').error = value
    },
    catchPasswordResetToken(state, value) {
        state.errorsPasswordReset.find(el => el.type === 'token').error = value
    },
    catchSigninError(state, value) {
        state.errorsSignin.find(el => el.type === 'signin_fail').error = value
    },
    catchSigninNotActiveError(state, value) {
        state.errorsSignin.find(el => el.type === 'notactive').error = value
    },
    catchResetEmailInvalidError(state, value) {
        state.errorResetEmail.find(el => el.type === 'email_invalid').error = value
    },
    catchResetEmailNotexistError(state, value) {
        state.errorResetEmail.find(el => el.type === 'email_notexist').error = value
    },
    catchResetEmailNotActive(state, value) {
        state.errorResetEmail.find(el => el.type === 'notactive').error = value
    }
}

export const actions = {
    clearErrorEmail({ commit }, value) {
        commit('catchEmailBlank', value)
        commit('catchEmailExist', value)
        commit('catchEmailInvalid', value)
    },
    clearErrorUsername({ commit }, value) {
        commit("catchUsernameInvalid", value)
        commit("catchUsernameBlank", value)
        commit("catchUsernameExist", value)
    },
    clearErrorPassword({ commit }, value) {
        commit("catchPasswordCreate", value)
    },
    clearErrorSignin({ commit }, value) {
        commit("catchSigninError", value)
        commit("catchSigninNotActiveError", value)
    },
    clearErrorResetEmail({ commit }, value) {
        commit("catchResetEmailInvalidError", value)
        commit("catchResetEmailNotexistError", value)
        commit("catchResetEmailNotActive", value)
    },
    clearErrorResetPassword({ commit }, value) {
        commit("catchPasswordReset", value)
        commit("catchPasswordResetNotExist", value)
        commit("catchPasswordResetToken", value)
    },
    

}

export const getters = {
    catchErrorEmail: state => {
        return state.errorsEmail.find((el) => el.error === true);
    },
    catchErrorUsername: state => {
        return state.errorsUsername.find((el) => el.error === true);
    },
    catchErrorPassword: state => {
        return state.errorsPassword.find((el) => el.error === true);
    },
    catchErrorPasswordReset: state => {
        return state.errorsPasswordReset.find((el) => el.error === true);
    },
    catchErrorSignin: state => {
        return state.errorsSignin.find((el) => el.error === true);
    },
    catchErrorResetEmail: state => {
        return state.errorResetEmail.find((el) => el.error === true);
    },
    

}