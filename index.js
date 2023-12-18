import {GitHub} from './GitHub.js';
import {Ui} from './Ui.js';

(() => {
    const github = new GitHub();
    const ui = new Ui();
    const readyState = document.readyState;
    let timer;

    if (readyState === 'interactive' || readyState === 'complete') {
        const searchUser = document.querySelector('.searchUser');

        searchUser.addEventListener('keyup', inputText);

        function fstFunc() {
            const userName = searchUser.value;
            if (userName.trim() !== '') {
                github.getUser(userName)
                    .then((data) => {
                        ui.showProfile(data);
                    })  
                github.getLastRepos(userName)
                    .then((data) => {
                        ui.showRepos(data.slice(0, 5));
                    })
            }
        }

        function inputText() {
            clearTimeout(timer); 
        
            timer = setTimeout(fstFunc, 500);
        }

    }
})()
