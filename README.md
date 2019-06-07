# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript. 

A: PropTyped are used to check the type of data props are, they make sure that the data we are receiving is the type of data we expect. They are important as they allow us as developers to make sure that the code we have written can handle the data the props hold. For instance if we expect an array but instead we receive a string, the code we have written to interface with an array would break. PropTypes also allow us to make certain or all of our props required, so that we can make sure that no prop is missintg for critical data. 

- [ ] Describe a life-cycle event in React? 

A: A life-cycle event is an event called by React at certain points in a components manipulation and rendering. They signify points of the cycle of a component updating, rendering and manipulation the DOM. For example, one life-cycle event is componentWillUnmount. React calls this event before a component is detattched from the DOM and garbage collected. We can use such events to respond to actions taken by React, for example removing eventListners before a component is deleted. This is better than us as developers doing this manually at every point a component could be unmounted and deleted.

- [ ] Explain the details of a Higher Order Component? 

A: A Higher Order Component is a component in React that passes in a Component and returns another. They are usually used to add functionalty to Components. This allows us to write the functionality once and apply it to many different Components, keeping our Components DRY'er and maintainable. One example would be authentication functionalty. We could write a HOC to add this to many components so that they only render once authentication is acquired. We can then use the component as usual without having to do anything extra with the component when rendring it. 

- [ ] What are three different ways to style components in React? Explain some of the benefits of each. 

A: The first way is through traditional CSS files and class/id names. The benefit of doing it this way is that all our styles are kept in one file and we can use all the techniques of specificity and inheritance in a way most web-developers are accustomed to. 

The second way is to use inline styles. Each component can take a style object in React and apply it inline to the style attribute. The benefit of doing it this way is that we can change certain styles programmatically and also make styles re-usable. The downside of this is that specificity and inheritance becomes much harder to implement. 

The third way is with Styled Components. This is a library used to create styles for specific components programitically and store it in a style sheet automatically. Class names are managed by the library automatically. The benefit of this is that it combines the benefits of both inline styles in React and traditional style files. We can use all of our CSS selectors along with specificity and inheritance, whilst retaining the ability to change styles programatically without having to change class names or add styles to the style attribute.


## Project Setup

Follow these steps to set up your project:

- [ ] Create a forked copy of this project.
- [ ] Add your project manager as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
- [ ] From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
- [ ] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [ ] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
- [ ] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
- [ ] You should now be able to filter cards using your tabs!
- [ ] Make sure all of your props being passed are validated using PropTypes.
- [ ] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [ ] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [ ] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

- [ ] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)
