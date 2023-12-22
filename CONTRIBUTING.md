# WebGPU Academy Contributors Guide

Welcome to the WebGPU Academy, a collaborative effort to provide an open learning resource about the creative possibilities of WebGPU.
This guide will help you understand how to contribute effectively to our project.

## Getting Started

Before you begin contributing, make sure you have a GitHub account.
If you're new to GitHub, you might find it helpful to read through their [Hello World guide](https://guides.github.com/activities/hello-world/).

Once you have an account, you can fork the repository to your own GitHub account.
Forking allows you to freely experiment with changes without affecting the original project.
To fork the repository, navigate to the main page of the repository and click the 'Fork' button at the top right of the page .

After forking, clone the repository to your local machine to make changes. Here's how to do it:

```bash
git clone https://github.com/YOUR-USERNAME/webgpu-academy.git
cd webgpu-academy
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Making Changes

When making changes, try to keep commits focused on a single task.
This makes it easier for others to understand what has been done.
Also, ensure that your commit messages are clear and descriptive

If you're writing a new article, take one step at a time.
Explain any new math in the simplest terms possible, ideally with diagrams where possible.
Also, it's probably best to ask to make sure someone else isn't already working on a similar article.

## Submitting Changes

Once you're happy with your changes, push them to your forked repository and then submit a pull request (PR).
A PR is a way to propose changes from your fork and request that they be reviewed and potentially merged into the main project.

Here's how to create a PR:

1. Navigate to your forked repository on GitHub.
2. Click the 'New Pull Request' button.
3. Select the branch containing your changes.
4. Review your changes and click 'Create Pull Request'.

Remember to follow the project's style guide and linting rules.
You can usually find these in the project's README or `.eslintrc.js` file.

## Building the Project

To build the project locally, you can use the following commands:

```bash
npm ci
npm run build
npm start
```

You can also run `npm run watch` to continuously build while making changes.

## Keeping Your Fork Up to Date

As the original repository evolves, your fork may become outdated.
To update your fork, you can use the following steps:

1. Fetch the upstream repository: `git fetch origin`.
2. Switch to your fork's master branch: `git checkout master`.
3. Merge the changes from the upstream repository: `git merge origin/master`.
4. Optionally, delete the old remote: `git remote rm origin`.
5. And add the updated repository as a new remote: `git remote add origin YOUR-FORK-URL`.

## Conclusion

Thank you for considering contributing to the WebGPU Academy.
We appreciate your efforts to improve this open learning resource.
If you have any questions or need further assistance, feel free to reach out. Happy coding!
