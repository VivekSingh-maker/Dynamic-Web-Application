# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Features
1. User Authentication: Sign up and login functionality using email and password.
2. Posts Listing: A page that displays posts fetched from an API.
3. Post Details: A page that shows details of a single post.
4. Logout: Option for users to log out and redirect to the login page.
5. Responsive Design: The layout adapts for various screen sizes using media queries.

## Technologies Used
1. HTML5: For structuring the pages.
2. CSS3: For styling the pages with a modern design.
3. JavaScript: For handling the dynamic content and API calls.
4. JSONPlaceholder: Mock API used to fetch posts data for the project.
5. React: For routing and single page application

## Pages & Functionality
1. Home Page

    Purpose: Serves as the landing page of the application.
   
    Key Features:
        Provides links to the login and sign-up pages.
        Shows the application name/logo.

2. Login Page

    Purpose: Allows users to log in with their credentials.
   
    Key Features:
        Users can log in by entering their email and password.
        On successful login, the user is redirected to the posts page (/posts).
        Basic form validation for required fields.

3. Sign Up Page

    Purpose: Allows new users to sign up for the application.
   
    Key Features:
        Users can sign up by providing a username, email, and password.
        Once signed up, users are redirected to the login page (/login).
        Form validation checks if all fields are filled and if the password matches.

4. Posts Page

    Purpose: Displays a list of posts fetched from the JSONPlaceholder API.
   
    Key Features:
        Shows a paginated list of posts in a grid layout.
        Each post includes a title and a short body text.
        Users must be logged in to access this page. The page is protected, and unauthorized users are redirected to the login page.
        Includes a logout button to allow users to log out and return to the login page.

5. Post Details Page

    Purpose: Displays the detailed view of a single post.
   
    Key Features:
        Fetches and shows the detailed content of a selected post.
        The page layout includes the title, body, and user details for the post.

## Useful Links
### Project Link

GitHub Repo: https://github.com/VivekSingh-maker/Dynamic-Web-Application.git


### Official Documents Link

mdn HTML: https://developer.mozilla.org/en-US/docs/Web/HTML

mdn CSS: https://developer.mozilla.org/en-US/docs/Web/CSS

mdn JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript

react.dev: https://react.dev/


### Download Link

VS Code Download: https://code.visualstudio.com/download

## Contact

Email: vivekpcmsingh@gmail.com

Linkedin: https://www.linkedin.com/in/vivek-singh-a4ab1919
