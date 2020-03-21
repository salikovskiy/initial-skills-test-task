# Test task for wwwest.wwwest.solutions

## [Check it live here](https://react-test-task-60bb0.firebaseapp.com/)

## Deviation from the technical task

Since the authorization was done with firebase, the login and password had to be changed because it only accepts email and six-digit passwords

```
email: admin@email.com
password: 123456
```
And added ``Sign Out`` button for better user experience

## Implemented
- 4 routes:
  - / - home
  - /profile
  - /news
  - /login
  - If the user clicks on the "profile" page and he is not "authorized" - throw on the / login page
- Authorization with Firebase
  - If the correct data is entered, then redirect to the / profile page
  - If other data is entered, the following messages are displayed: 'The username or password you entered is incorrect'
- Data transmission via redux 
- Showing news through News RestAPI 


## Built With

- [React JS](https://reactjs.org/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Firebase](https://firebase.google.com/)
- [Bootstrap](https://getbootstrap.com/)

<img src="https://i.imgur.com/f6AQsuQ.jpg">
