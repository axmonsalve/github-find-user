//Init GitHub
const github = new Github;
//Init UI
const ui = new UI;
//search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profileData.message === 'Not Found') {
          //Show alert

        } else {
          //Show the profile
          ui.showProfile(data.profileData);
        }
      })
  } else {
    //Clear profile
  }
});