import "./main.css";
import React from "react";

import IndividualChallenge from "../IndividualWeekComponent";

function MainSection({ currentWeek, week }) {
  let dataArray = [
    {
      id: 1,
      title: "Week 1 - Basic JS",
      description: `Time to start your journey! We will be learning the basics of Javascript with the mentees. Not to be confused with Java, JavaScript allows you to build interactive websites. JavaScript has become an essential web technology along with HTML and CSS, as most browsers implement JavaScript. Thus, You must learn JavaScript if you want to get into web development, and you must learn it well if you're planning on being a front-end developer or on using JavaScript for backend development.`,
      quote: `“Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less” - Marie Curie `,
      learning: `This week we will be covering with the Mentees: code structure, variables, data types, assignment operator, basic functions, for loop, while loop, objects, arrays
      `,
      challenge: `Click here to test your new skills! This challenge is a code wars focussing on arrays`,
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 2,
      title: "Week 2 - Advanced JS",
      description: `Let’s take our Javascript up a level! JavaScript is mainly used for frontend development, and there are various tools that will allow you to quickly get a working prototype with JavaScript. Nonetheless, you should first focus on obtaining a solid understanding of JavaScript. Additionally, beginners may quickly find it difficult to grasp the concepts of how JavaScript works, and the language has several designs that make it easy for beginners to shoot themselves in the foot. Finding an experienced JavaScript mentor will likely help you stay on the right track and ease your learning process.`,
      quote: `“The work of today is the history of tomorrow, and we are its makers” - Juliette Gordon Low`,
      learning: `Fat arrows, immutability, array methods, prototypes, error handling`,
      challenge: `Click here to test your new skills! This challenge is a code wars focussing on arrays`,
      challengeLink: "https://www.codewars.com/kata/5bc052f93f43de7054000188",
    },
    {
      id: 3,
      title: "Week 3 - Node and Express",
      description: `Getting into it now!
      It’s time to learn about servers, we will be using Node.JS and Express. Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
      Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant. We will also be diving into Express. The Express philosophy is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, websites, hybrids, or public HTTP APIs.
      `,
      quote: `"Computers are stupid" - Chris Meah`,
      learning: `Fetch requests, SQL, Postman, Heroku`,
      challenge: `Click here to test your new skills! The challenge is to complete this Node/Express quiz!`,
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 4,
      title: "Week 4 - Backend",
      description: `Diving into the backend 👀.
      We will be learning about databases and APIs. Front end development involves what a user sees on the screen when they open a specific URL owned by you. Even in a completely static environment (with only HTML/CSS), when someone opens a website, some server on the planet needs to respond to you with those HTML and CSS files.

      That server is just a computer, just like the one you use yourself to browse the internet. But it has been tuned for performance, and doesn't have unnecessary components like a mouse or keyboard attached. And it sits with tons of other computers probably in a data warehouse.
      
      Programming those computers in some special way is called back end development.
      
      You may think that backend development is called what it is because it runs behind the user's back. A visitor to your website never really "accesses" the back end completely. They just communicate with your server, either directly through ports for very limited access (like transferring HTML/CSS files) or not even that – buried deep under CDNs or firewalls (like Cloudflare). `,
      quote: `“Success is not final, failure is not fatal: it is the courage to continue that counts.” - Winston Churchill`,
      learning: `Restful API's, middleware, creating a full stack application`,
      challenge: "The challenge is backend",
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 5,
      title: "Week 5 - React",
      description: ` Don't over-React, this is going to be fun! 
      ReactJS presents graceful solutions to some of front-end programming’s most persistent issues. It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing. There’s never been a better time to learn React.
      You’ll develop a strong understanding of React’s most essential concepts: JSX, class and function components, props, state, lifecycle methods, and hooks. You’ll be able to combine these ideas in React’s modular programming style.
      `,
      quote: `
      "Life is 10% what happens to me and 90% of how I react to it." - Charles Swindoll`,
      learning: `JSX, Babel, React Virtual DOM, frameworks, spread and slice, immutability`,
      challenge: `Click here to test your new skills! This challenge is creating a Tic Tac Toe game!`,
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 6,
      title: "Week 6 - Next Level React",
      description: `Taking our React to the next level. 
      We know that ReactDOM builds up the DOM tree under the hood and renders the application on the screen. But how does React actually build the DOM tree? And how does it update the tree when the app’s state changes?
      `,
      quote: `"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed." - Michael Jordan`,
      learning: `Fetch requests, SQL`,
      challenge: `Click here to test your new skills! This challenge is completing a React Virtual DOM quiz!`,
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 7,
      title: "Week 7 - Authentication",
      description: ` 
      Our apps need to have authorization and authentication to be secure. There are several contributing factors that make designing good authentication flows a challenge. For instance, OAuth flows work ever slightly so differently across providers. And handling a client-side only flow is quite different than a middleware based flow. Further, there are different kinds of authentication flows: sometimes, you may want a passwordless authentication and other times, you may want an old-school username and password based flow. And once you have implemented an auth flow, handling user authorizations is an altogether different challenge.
      `,
      quote: `"Your time is limited, so don’t waste it living someone else’s life." - Steve Jobs`,
      learning: `Oauth, authentication, usermanagement, node.js`,
      challenge: `Click here to test your new skills! The challenge is making username and password system",
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158`,
    },
    {
      id: 8,
      title: "Week 8 - PROJECT WEEK",
      description: ` It's time for the Mentees to put everything they have learnt into practice. 
      Working in a team they will build a full stack app.
      `,
      quote: `"live, laugh, love" - Maxine Tillman`,
      learning: `Team work is dream work, branch off and commit often `,
      challenge: `No challenge this week. Review past projects and notes to refresh all your learnings.`,
      // challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 9,
      title: "Week 9 - Retrospective Week",
      description: `Well done for completing a full stack project.
      Now we are going to continue recapping everything we have learnt over the past 8 weeks and taking some topics to the next level. 
      We will be going in further NPM, databases, SQL. 
      `,
      quote: `"You can never cross the ocean until you have the courage to lose sight of the shore." - Christopher Columbus`,
      learning: `NPM, databases, SQL`,
      challenge: `Click here to test your skills! Create a shop inventory system.`,
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 10,
      title: "Week 10 - React Recap",
      description: `
      We have only touched very slightly on rendering to the server, optimizing re-render, inline styling and the lifecycle method. We will be going over this in more detail.
      `,
      quote: `"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do." - Leonardo da Vinci`,
      learning: `Render React to Server, optimizing re-renders, inline styles, lifecycle method`,
      challenge: "The challenge is React",
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: null,
      title: "Week 11 - Testing",
      description: `
      We are going to learn how to write our own tests for React. 
      `,
      quote: `"I didn’t fail the test. I just found 100 ways to do it wrong." - Benjamin Franklin
      `,
      challenge: `React Testing Library, jest, rendering component testing, running a complete app testing`,
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 12,
      title: "Week 12 - QA, AWS, Agile",
      description: `
      We will learning about Quality Assessment, and the benefits. Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. 
      `,
      quote: `"Nothing is impossible, the word itself says, “I’m possible!”" - Audrey Hepburn
      `,
      challenge: `QA, AWS, Agile`,
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
  ];
  return (
    <div className="challenge-page-container">
      <IndividualChallenge
        week={week}
        dataArray={dataArray}
        currentWeek={currentWeek}
      />
    </div>
  );
}

export default MainSection;
