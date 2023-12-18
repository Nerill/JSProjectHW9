export class GitHub {
    constructor() {
        this.clientId = 'e7b1503f46c2ec79f79b';//null;
        this.clientSecret = '96ea7aeedd66e78acb2d8fa938c48d8e02bbaaff';//null;
    }

    async getUser(userName){
        const data = await fetch(`https://api.github.com/users/${userName}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        return await data.json();
    }

    async getLastRepos(userName){
        const data = await fetch(`https://api.github.com/users/${userName}/repos?sort=updated`);
        return await data.json();                     
    }
}
