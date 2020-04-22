class UI {
  constructor() {
    this.profileData = document.getElementById('profile');
  }

  showProfile(user) {
    this.profileData.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="asd" class="img-fluid mb-2">
            <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item" id="company">Company: ${user.company}</li>
              <li class="list-group-item" id="blog">Website/Blog: ${user.blog}</li>
              <li class="list-group-item" id="location">Location: ${user.location}</li>
              <li class="list-group-item" id="created_at">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
    this.displayHideListItem(user);
  }

  //Show alert
  showAlert(message, className) {
    //Clear any remaining alerts
    this.clearAlert();
    //Create div 
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.searchContainer');
    //Get search box
    const search = document.querySelector('.search');

    container.insertBefore(div, search);

    //Time out after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //Clear div
  clearProfile() {
    this.profileData.innerHTML = '';
  }

  displayHideListItem(user) {
    if (user.company === null) {
      document.getElementById('company').style.display = 'none';
    }
    if (user.blog === null || user.blog === '') {
      document.getElementById('blog').style.display = 'none';
    }
    if (user.location === null) {
      document.getElementById('location').style.display = 'none';
    }
    if (user.created_at === 'undefined') {
      document.getElementById('created_at').style.display = 'none';
    }
  }
}