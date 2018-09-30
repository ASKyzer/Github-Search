class Github {
  constructor() {
    this.client_id = '1c79fed750e8cd0c0f1f'
    this.client_secret = 'd584cd2b28755d70ffc29198b70edaefbc0c604f'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  // Get profiles and repos using async await and fetch API
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    
    // Turn the reponses into json objects
    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    // Return the profile and repos
    return {
      profile,
      repos
    }
  }
}
