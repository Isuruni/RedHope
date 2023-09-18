# RedHope

Mobile and a web application to connect blood donors and blood requesters within Sri Lanka

# RedHope Web-App Contribution Guide

If you want to contribute to this repository, follow these steps:

1. Clone the Repository:

   - Clone this repository to your local machine.

2. Switch to the "dev" Branch:

   - Open a terminal and navigate to the directory where you cloned the repository.
   - Check if you are on the "dev" branch using the following command:
     ```bash
     git checkout
     ```
   - If you are not on the "dev" branch, you can check the current branch and list existing branches with the following commands:
     ```bash
     git checkout current-branch
     git branch
     ```
   - To switch to another existing branch, use:
     ```bash
     git checkout desired-branch
     ```

3. Update and Fetch Remote Changes:

   - To get the latest updates from the "dev" branch, run:
     ```bash
     git fetch origin
     ```
     This fetches the latest changes from the remote repository without merging them.

4. Create a New Branch with Your Name:

   - Create a new branch with your name using the following command (replace `<contributor-branch-name>` with your desired branch name):
     ```bash
     git checkout -b <contributor-branch-name> origin/dev
     ```
     This command creates a new branch and sets it to track the "dev" branch, allowing your changes to be based on the latest "dev" branch.

5. Start Making Changes:

   - You can now start making changes to the project files in your newly created branch. Add, modify, or delete files as needed.

6. Commit and Push Changes:

   - After making changes, commit them with a descriptive message and push to the remote repository. Use this workflow:
     ```bash
     # Stage changes
     git add .
     # Commit changes with a descriptive message
     git commit -m "Add/update files related to <feature or fix>"
     # Push the changes to the remote repository
     git push origin <contributor-branch-name>
     ```

7. Create a Pull Request:
   - Once your changes are pushed to your branch, create a pull request (PR) on the project's repository. Project maintainers will review your changes and potentially merge them into the "dev" branch.

That's the general workflow for contributing to the RedHope Web-App repository. Make sure to replace `<contributor-branch-name>` with your actual branch name. If you have any questions or need further guidance, feel free to ask.
