class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }

    // Show Profile
    showProfile(user) {
      let company = user.company
      let location = user.locaton
      let name = user.name
      let date = parseInt(user.created_at, 10)

      if (company === null || location === null || name === null) {
        company = "Company not available"
        location = "Location not available"
        name = ''
      }

      this.profile.innerHTML = `
        <div class="card card-body mb-4 p-4">
          <div class="row">
            <div class="col-md-3 avatar-col">
              <img class="img-fluid img mb-1" src="${user.avatar_url}" alt="Profile Avatar">
              <h3>${user.login}</h3>
              <h6>${name}</h6>
              <a href="${user.html_url}" class="btn btn-primary btn-block mb-2" target="blank">View Profile</a>
            </div>
            <div class="col-md-9 info-col">
              <div class="badges">
                <span class="badge badge-primary badge-block">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-info badge-block">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success badge-block">Followers: ${user.followers}</span>
                <span class="badge badge-warning badge-block">Following: ${user.following}</span>
              </div>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${company}</li>
                <li class="list-group-item">Website/Blog: <a href="${user.blog}" target="_blank">Go to user's Website or Blog</a></li>
                <li class="list-group-item">Locaton: ${location}</li>
                <li class="list-group-item">Member Since: ${date}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="title">Latest Repositories</h3>
        <div id="repos"></div>
      `;
    }

  // Show Repositories
  showRepos(repos) {
    let output = ''

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
            <h4><a href="${repo.html_url}">${repo.name}</a></h4>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-info">Forks: ${repo.forks_count}</span>
            </div>
          </div>
       </div>
      `
    })

    // Show in UI
    const reposContainer = document.getElementById('repos')

    reposContainer.innerHTML = output
  }


  // Clear Profile in UI
  clearProfile() {
    this.profile.innerHTML = ""
  }

  // Show Alert Message
  showAlert(message, className) {
    // Clear alert first 
    this.clearAlert()
    // Create div
    const div = document.createElement('div')
    // Add classes to div
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message))
    // Insert
    // Get parent 
    const container = document.querySelector('.search-container')
    // Get sibling to insert before
    const search = document.querySelector('.search')
    // Insert alert to UI
    container.insertBefore(div, search)

    // Timeout after 2 seconds
    setTimeout(() => {
      this.clearAlert()
    }, 2000);
  }

  // Clear Alert Message
  clearAlert() {
    // Get alert class
    const currentAlert = document.querySelector('.alert')
    if(currentAlert) {
      // remove it
      currentAlert.remove()
    }
  }


}