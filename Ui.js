export class Ui {
    constructor() {
        this.profile = document.querySelector('.profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}" alt="avatar">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div class="repos"></div>`;
    }

    showRepos(reps){
      const tblbody = document.querySelector('tbody');
      const tableBody = document.querySelector('table');
      tblbody.innerHTML = '';
        reps.forEach(reps => {
          const row = document.createElement('tr');
          const td1 = document.createElement('td')
          const td2 = document.createElement('td');
          const td3 = document.createElement('td');
  
          td1.textContent = reps.name;
          td2.textContent = reps.html_url;
          td3.textContent = reps.description;
  
          row.appendChild(td1);
          row.appendChild(td2);
          row.appendChild(td3);
          tblbody.appendChild(row);
        })
        tableBody.appendChild(tblbody);
        tableBody.style.display = 'table';
    }
}
