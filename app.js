//Init GitHub
const github = new Github();
//search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText)
      .then(data => console.log(data))
    if (data.profileData.message === 'Not Found') {
      //Show alert

    } else {
      //Show the profile

    }
  } else {
    //Clear profile

  }
})