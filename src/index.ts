import { AuthService } from "./client"
import type { Body_login_user_for_access_token_auth_user_token_post } from './client/models/Body_login_user_for_access_token_auth_user_token_post';

function get_form_values(): Body_login_user_for_access_token_auth_user_token_post {
    const email: string = (document.getElementById("email") as HTMLInputElement).value
    const password: string = (document.getElementById("password") as HTMLInputElement).value

    return {
        username: email,
        password: password,
    }
}

function set_cookie(name: string, value: string, expires_minutes: number = 1440) {
    let expires = ""
    if (expires_minutes) {
        const date = new Date()
        date.setTime(date.getTime() + (expires_minutes * 60 * 1000))
        expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

// on submit, call the login function
let form = document.getElementById("login-form")
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const form_values = get_form_values()
        AuthService.loginUserForAccessTokenAuthUserTokenPost(
            form_values,
        ).then((token) => {
            console.log("token", token)
            set_cookie("token", token.access_token)
        }
        ).catch((err) => {
            console.log("error", err)
        }
        )
    })
}
