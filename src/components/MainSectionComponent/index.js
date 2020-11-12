import "./main.css";
import React from "react";

import IndividualChallenge from "../IndividualWeekComponent";

let exampleText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae finibus augue, non euismod ex. Aenean mattis dignissim velit, ut imperdiet diam convallis nec. Mauris pulvinar nulla eu augue interdum tristique. Sed vitae neque lorem. Proin in turpis nunc. In lobortis iaculis neque, vitae tincidunt erat venenatis a. Donec ornare erat vel nisl pellentesque molestie.";

function MainSection({ currentWeek, week }) {
  let dataArray = [
    {
      id: 1,
      title: "Week 1 - Basic JS",
      description: `Time to start your journey! We will be learning the basics of Javascript with the mentees.`,
      quote: `“Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less” - Marie Curie `,
      learning: `code structure, variables, data types, assignment operator, basic functions, for loop, while loop, objects, arrays
      `,
      challenge: "The challenge is assigning varibles",
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 2,
      title: "Week 2 - Advanced JS",
      description: "Let’s take our Javascript up a level!",
      quote: `“The work of today is the history of tomorrow, and we are its makers” - Juliette Gordon Low`,
      learning: `Fat arrows, immutability, array methods, prototypes, error handling`,
      challenge: "The challenge is assigning array methods ..",
      challengeLink: "https://www.codewars.com/kata/5bc052f93f43de7054000188",
    },
    {
      id: 3,
      title: "Week 3 - Node and Express",
      description: `Getting into it now!
      It’s time to learn about servers, we will be using Node.JS and Express. 
      `,
      quote: "im a motivational quote",
      learning: `Fetch requests, SQL, Postman, Heroku`,
      challenge: "The challenge is node",
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 4,
      title: "Week 4 - Backend",
      description: `Diving into the backend 👀.
      We will be learning about databases and APIs. `,
      quote: `“Success is not final, failure is not fatal: it is the courage to continue that counts.” - Winston Churchill`,
      learning: `Restful API's, middleware, creating a full stack application`,
      challenge: "The challenge is backend",
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 5,
      title: "Week 5 - React",
      description: ` Don't over-React, this is going to be fun! 
      Now we're making React-ive frontends using frameworks, JSX, Babel.. and more that will soon make sense. 
      `,
      quote: `
      "Life is 10% what happens to me and 90% of how I react to it." - Charles Swindoll`,
      learning: `JSX, Babel, React Virtual DOM, frameworks, spread and slice, immutability`,
      challenge: "The challenge is react ting",
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 6,
      title: "Week 6 - Next Level React",
      description: `Taking our React to the next level. 
      I don't know what to write help me. 
      `,
      quote: `"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed." - Michael Jordan`,
      learning: `Fetch requests, SQL`,
      challenge: "The challenge is node",
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 7,
      title: "Week 7 - Authentication",
      description: `I authorise you to learn about Authentication. 
      Our apps need to have authorization and authentication to secure. 
      `,
      quote: `"Your time is limited, so don’t waste it living someone else’s life." - Steve Jobs`,
      learning: `Oauth, authentication, usermanagement, node.js`,
      challenge: "The challenge is making username and password system",
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
    },
    {
      id: 8,
      title: "Week 8 - PROJECT WEEK",
      description: `
      `,
      quote: `"live, laugh, love" - Maxine Tillman`,
      learning: `Oauth, authentication, usermanagement, node.js`,
      challenge: "The challenge is making username and password system",
      challengeLink: "https://www.codewars.com/kata/563e320cee5dddcf77000158",
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
      challenge: "The challenge is making username and password system",
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
      id: 11,
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
