
export const consoleMessages = {
    //requester
    INTERNET_CONNECTION_LOST: `INTERNET_CONNECTION_LOST`,

    //authService
    GET_AUTH_TOKEN_FAIL: `GET_AUTH_TOKEN_FAIL`,
    GET_CSRF_TOKEN_FAIL: `GET_CSRF_TOKEN_FAIL`,
    FETCH_DEVICE_LOCATION_IP_FAIL: `FETCH_DEVICE_LOCATION_IP_FAIL`,
    GET_DEVICE_LOCATION_IP_FAIL: `GET_DEVICE_LOCATION_IP_FAIL`,


    //userService
    USER_PROFILE_EDIT_FAIL: `USER_PROFILE_EDIT_FAIL`,

    //email service, useEmail
    EMAIL_SEND_FAIL: `EMAIL_SEND_FAIL`,


    //Purchase Context
    ORG_PURCHASE_DATA_LOAD_FAIL: `ORG_PURCHASE_DATA_LOAD_FAIL`,

}

export const toastMessages = {
    SOMETHING_WENT_WRONG: `Something went wrong!`,

    //requester
    INTERNET_CONNECTION_LOST: `Network lost!`,

    //employee
    EMPLOYEES_ADD_OK: 'Employee(s) added!',
    EMPLOYEES_ADD_FAIL: 'Employee(s) add failed!',

    //forms
    MISSING_REQUIRED_FORM_DATA: 'Please, fill all required data!',

    //auth
    USER_REGISTER_FAIL: 'Registration failed!',
    USER_REGISTER_OK: 'Registration successful!',
    USER_EMAIL_VERIFIED: 'Email verified!',
    WRONG_LOGIN_CREDENTIALS: 'Wrong email or password!',
    LOGIN_OK: 'Login successful!',
    LOGIN_FAIL: 'Login failed, try again later!',
    PASSWORD_SET_OK: 'Password successfully set!',
    PASSWORD_SET_FAIL: 'Password set failed, try again later!',
    EMAIL_VERIFICATION_SEND_OK: 'Verification email send!',
    EMAIL_VERIFICATION_SEND_FAIL: 'Verifying email failed!',
    LOGOUT_OK: 'Logged out, good bye!',



    //userService
    USER_PROFILE_EDIT_OK: `Edit profile successful!`,
    USER_PROFILE_EDIT_FAIL: `Edit profile failed!`,

    //useEmail
    EMAIL_SEND_OK: `Email send successfully!`,
    EMAIL_SEND_FAIL: `Email send failed!`,

    //product service
    PRODUCT_ADD_OK: 'Product add successful!',
    PRODUCT_ADD_FAIL: 'Product add fail!',

    //Purchase Context, purchase
    ORG_PURCHASE_DATA_LOAD_FAIL: `Purchases load failed!`,
    PURCHASE_BUY_OK: 'Purchase bought!',
    PURCHASE_BUY_FAIL: 'Buy purchase failed!',
    PURCHASE_UN_BUY_OK: 'Purchase canceled!',
    PURCHASE_UN_BUY_FAIL: 'Could not cancel purchase!',


}
