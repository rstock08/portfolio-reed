## Application Description

Created a new Portfolio website for hosting via github static pages. The page is meant as a way to demonstrate my ability to create React applications using TypeScript / React / Material UI / Jest / Enzyme / gh-pages and several other libraries. It is also meant as a point of contact and an interactable resume of sorts!

Currently hosted at... `http://rstock08.github.io/Hi-I'm-Reed`

## Deploying

Hosting this static site on GitHub pages.
1. run `npm pre-deploy`
2. run `npm deploy`

NOTE: The application will be deployed to the package.json's homepage entry, currently set to `http://rstock08.github.io/Hi-I'm-Reed`


## Maitanance

Updating Package.json:
run `npm update`

NOTE: This will not update major releases, this will require a more manual process.

To view outdated npm packages:
1. run `npm outdated` 
2. You should see a list of NPM packages that are out of date, if there are any.
3. run `npm install -g npm-check-updates`
4. run `ncu -u` 
NOTE: Powershell may throw an execution policy warning, to avoid run via cmd.
ALSO NOTE: You may need to adjust upstream dependency conflicts or run with the --force flag.

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
