# Angular 4 Material 2 Starter
A batteries-included Mobile-First Angular 4+ and Angular Material 2 Seed Project

> Looking for a full-stack solution? Check out [Minimal MEAN](https://github.com/excellalabs/minimal-mean) for full-stack, dockerized, TypeScript development setup.

> Run the following command to pull the Docker image: `docker pull duluca/angular4-material2-starter`

## Features
- Pre-installed Material 2, icons and theme
- Pre-installed Angular Flex Layout
- Pre-wired router, _new_ HttpClient and Forms
- [npm scripts for Docker](https://gist.github.com/duluca/d13e501e870215586271b0f9ce1781ce)
- [npm scripts for AWS](https://gist.github.com/duluca/2b67eb6c2c85f3d75be8c183ab15266e)
- [Minimal Node Web Server](https://hub.docker.com/r/duluca/minimal-node-web-server/) v8.4 for Production Publishing

## For Developers

> To avoid issues that aries from maintaining varying versions of Angular CLI and TypeScript across multiple projects, it is highly recommended that you do **not** globally install `@angular/cli` and `typescript`.

### Running the Code
After cloning the repository, run the following commands:
* `npm install` -- installs the app's dependencies
* `npm start` -- serves the Angular app with live reloading for development purposes

### Building and Testing
* `npm run docker:build` to build the Docker image
* `npm run docker:debug` to test the Docker image

### Push Button Deployments
> Below instruction have not been tested on a Windows environment
* Create `.env` file and set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
  * Sample `.env` file:
  ```Bash
    AWS_ACCESS_KEY_ID=your_own_key_id
    AWS_SECRET_ACCESS_KEY=your_own_secret_key
  ```
* Install AWS CLI
  * Mac: `brew install awscli`
* Log in to AWS CLI with your credentials
  * Run `aws configure`
  * You'll need your Access Key ID and Secret Access Key
  * Default region name: us-east-1
* `npm run aws:release` to configure Docker with aws, publish your latest image build and release it on ECS