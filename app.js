//Destructuring 
const {
  searchUser,
  github,
  ui
} = variablesObj();

keyUpFind();

function variablesObj() {
  const github = new Github;
  //Init UI
  const ui = new UI;
  //search input
  const searchUser = document.getElementById('searchUser');
  return {
    searchUser,
    github,
    ui
  };
}

function keyUpFind() {
  searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    findUser(userText);
  });
}

function findUser(userText) {
  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profileData.message === 'Not Found') {
          //Show alert
        } else {
          const user = data.profileData;
          //Show the profile
          ui.showProfile(user);
        }
      });
  } else {
    //Clear profile
    ui.clearProfile();
  }
}