// Instantiate Github
const github = new Github()
// Instantiate UI
const ui = new UI()

// Search input
const searchUser = document.getElementById('search-user')

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get userText value
  const userText = e.target.value;
  // if the value is not empty...
  if (userText !== '') {
    // Make the http call
      github.getUser(userText)
        .then(data => {
          console.log(data)
          if (data.profile.message === 'Not Found') {
            // Show alert
            ui.showAlert('User not found', 'alert alert-danger')
            // Clear profile
            ui.clearProfile()
          } else {
            // Show profile
            ui.showProfile(data.profile)
            // Show repos
            ui.showRepos(data.repos)
          }
        }).catch(err => console.log(err))
  } else {
    // Clear profile
    ui.clearProfile()
  }
})
