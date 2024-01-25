import {page, render} from './lib.js';
import {homePage} from './views/home.js';
import {loginPage} from './views/login.js';
import {registerPage} from './views/register.js';
import {createPage} from './views/create.js';
import {detailsPage} from './views/details.js';
import {getUserData} from './util.js';
import {logout} from './api/api.js';
import {editPage} from './views/edit.js';
import {profilePage} from './views/profile.js';


const root = document.getElementById('content');

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/profile', profilePage)
updateUserNav()
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}

export function updateUserNav() {
    const userData = getUserData();
    if (userData) {
        document.getElementById('profile-btn').style.display = 'inline-block';
        document.getElementById('create-btn').style.display = 'inline-block';
        document.getElementById('logoutBtn').style.display = 'inline-block';
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('register-btn').style.display = 'none';

    } else {
        document.getElementById('profile-btn').style.display = 'none';
        document.getElementById('create-btn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'none';
        document.getElementById('login-btn').style.display = 'inline-block';
        document.getElementById('register-btn').style.display = 'inline-block';
    }
}

document.getElementById('logoutBtn').addEventListener('click', onLogout);

function onLogout() {
    page.redirect('/')
    logout()
    updateUserNav()

}

