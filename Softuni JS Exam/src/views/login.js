import {login} from "../api/api.js";
import {updateUserNav} from "../app.js";
import {html} from "../lib.js";

const loginTemplate = (onSubmit) => html`
    <section id="loginaPage">
        <form @submit="${onSubmit}" class="loginForm">
            <h2>Login</h2>
            <div>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
            <div>
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>

            <button class="btn" type="submit">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </form>
    </section>
`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        if (email == '' || password == '') {
            return alert('Fill both fields');
        }
        await login(email, password);
        updateUserNav()
        ctx.page.redirect('/');
    }
}