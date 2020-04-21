class Github {
  constructor() {
    this.client_id = 'bea251f08d8ea2188e7e';
    this.client_secret = '532063e4b45e9a6d47369bd4bbd4f43629f369bc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return {
      profileData
    }
  }
}