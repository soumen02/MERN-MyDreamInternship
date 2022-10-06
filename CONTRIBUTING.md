# Setup
  1. Fork the project with your own branch.
  2. Run ```npm install``` in the back-end and front-end directories.
  3. Set up a mongodb account and follow the back-end instructions to set up your database.
  4. Run ```npm flow``` on the front-end to confirm there are no errors.
  5. Run ```npm run start``` on both the back-end and front-end in separate terminal processes.

# Git workflow
* Assign an issue to each task before starting to code
* Each task is an issue
* Each user story is a parent group of issues
* Each milestone is a set of features
* If available or possible, build and run tests
* Have a peer review your changes before merging

# Rules of contribution
* Always contribute towards an issue
* Ensure before requesting a change, there are no flow or lint errors. Run ```npm run flow``` to confirm this.
* All imports should be formatted in sections by components & imports, direct paths, unimported types & unimported enums, and finals/constants. Each section should be in lexical order.
* Run all tests and make sure they are passing before requesting a review of your changes.
* Have your code reviewed by a peer before merging
* Have specific comments regarding the changes you add
* Commit frequently, push working major progressions
* Use small commits of 100-200 lines of code changes

# Team Values
We value a human-centerd experience, constant & professional communication, fast but tested development, and a user-first approach.

The team will work together using the Agile methodology and sprints.

Discord will be used for polished communication while messenger will be used for development communication. Polished communication is defined as any finalized communication such as finishing a feature, milestone, assignment, task, or speaking with a Grader/the Professor.

Members who need help can ping another. 24 hours should be given for code reviews before another ping on the same person. For live help, messenger can be used for urgent requests.

Conflicts will be resolved through democracy. In the case of a tie in a vote, the Product Owner for the week will make the final call.

If a member fails to meet their work quota, they'll be warned by the team and requested to improve. After ignoring this initial warning, the Graders/Professor will be contacted to speak with them. If no improvement is gained, they will be kicked off the team.

Team members should respond to messages in 24 hours on Github issues or Messenger. For Discord, it will be 48 hours. Urgent discord needs will be pinged in the Messenger chat.

# Team Process
We use Agile to run through sprints and curate new objectives based on what is deemed to best need for our users. As our users evolve, so will our requirements and the development lifecycle for our product.

# Sprint Cadence
* Every sprint will take approximately 1 week.
* Every member is expected to work 1 to 4 hours a week.
* We expect the first few sprints to be slower but will pick up pace fast once we get used to all the tools like ReactJS.
* We aim to achieve an MVP within 4 sprints.

# Daily Standups
* Standups will occur at 9:15 pm every two days, and will be occur more frequent if needed.
* Meetings will be conducted through Zoom.
* All members are expected to attend punctually, and may be excused only by early notice (12h in advanced).
* Members will not cover for unexcused absence.
* Up to 3 late arrivals are acceptable (max 30 minutes late).
* Up to 2 unexcused absences are acceptable.
* If a member makes little to no progress after a week (roughly 3 standups), they will be reported to management.
* Members are expected to be polite when disagreeing with someone’s idea

# Coding Standards
* Linter: ESLint
* Typechecker: Flow
* Write self documenting code. Use descriptive variable and function names. Avoid unnecessary name shortening.
* Don't leave dead/commented out code behind. If you see such code, delete it.
* When writing TODOs, write in the format: ```TODO: [<github_username>] [date] Comment```
* Write automated tests to cover critical integration points and functionality
