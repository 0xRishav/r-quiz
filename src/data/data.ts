import { Quiz } from "./quiz.types";

const reactQuiz: Quiz = {
  quizId: "atbNm0vSnP",
  quizName: "React Quiz",
  questions: [
    {
      questionNo: 1,
      questionId: "Ob3aJg7oDg",
      question: "Everything in React is a _____________",
      points: 5,
      options: [
        {
          text: "Module",
          isRight: false,
        },
        {
          text: "Component",
          isRight: true,
        },
        {
          text: "Package",
          isRight: false,
        },
        {
          text: "Class",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 2,
      questionId: "pDdBWcwNye",
      question: "In which directory React Components are saved?",
      points: 5,
      options: [
        {
          text: "Inside js/components/",
          isRight: true,
        },
        {
          text: "Inside vendor/components/",
          isRight: false,
        },
        {
          text: "Inside external/components/",
          isRight: false,
        },
        {
          text: "Inside vendor/",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 3,
      questionId: "kGVb1TEm5U",
      question: "What is Babel?",
      points: 10,
      options: [
        {
          text: "A transpiler",
          isRight: false,
        },
        {
          text: "An interpreter",
          isRight: false,
        },
        {
          text: "A Compiler",
          isRight: false,
        },
        {
          text: "Both Compiler and Transpilar",
          isRight: true,
        },
      ],
    },

    {
      questionNo: 4,
      questionId: "PIGhuQjddN",
      question:
        "How can you access the state of a component from inside of a member function?",
      points: 10,
      options: [
        {
          text: "this.getState()",
          isRight: false,
        },
        {
          text: "this.values",
          isRight: true,
        },
        {
          text: "this.prototype.stateValue",
          isRight: false,
        },
        {
          text: "this.state",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 5,
      questionId: "8Y7iH1ZLYr",
      question: "What is the name of React.js Developer ?",
      points: 20,
      options: [
        {
          text: "Jordan mike",
          isRight: false,
        },
        {
          text: "Jordan Lee",
          isRight: false,
        },
        {
          text: "Jordan Walke",
          isRight: true,
        },
        {
          text: "Tim Lee",
          isRight: false,
        },
      ],
    },
  ],
};

const cssQuiz: Quiz = {
  quizId: "oboTqMq3z9",
  quizName: "CSS Quiz",
  questions: [
    {
      questionNo: 1,
      questionId: "Yg0MeL3NIq",
      question: "CSS stands for",
      points: 5,
      options: [
        {
          text: "Cascade style sheets",
          isRight: false,
        },
        {
          text: "Color and style sheets",
          isRight: false,
        },
        {
          text: "Cascading style sheets",
          isRight: true,
        },
        {
          text: "None of the above",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 2,
      questionId: "yxuDmX2OXj",
      question:
        "Which of the following CSS property is used to set the background image of an element?",
      points: 5,
      options: [
        {
          text: "background-attachment",
          isRight: false,
        },
        {
          text: "background-image",
          isRight: true,
        },
        {
          text: "background-color",
          isRight: false,
        },
        {
          text: "None of the above",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 3,
      questionId: "mQW6OKhaLO",
      question:
        "Which of the following CSS property specifies the origin of the background-image?",
      points: 10,
      options: [
        {
          text: "background-origin",
          isRight: true,
        },
        {
          text: "background-attachment",
          isRight: false,
        },
        {
          text: "background-size",
          isRight: false,
        },
        {
          text: "None of the above",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 4,
      questionId: "ppKOD0gvFs",
      question:
        "The CSS property used to set the maximum width of the element's content box is -",
      points: 10,
      options: [
        {
          text: "max-width property",
          isRight: true,
        },
        {
          text: "height property",
          isRight: false,
        },
        {
          text: "max-height property",
          isRight: false,
        },
        {
          text: "position property",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 5,
      questionId: "74Bs2QDt38",
      question:
        "Which of the following CSS property is used to specify the type of quotation mark?",
      points: 20,
      options: [
        {
          text: "quotes property",
          isRight: true,
        },
        {
          text: "z-index property",
          isRight: false,
        },
        {
          text: "hyphens property",
          isRight: false,
        },
        {
          text: "None of the above",
          isRight: false,
        },
      ],
    },
  ],
};

const javascriptQuiz: Quiz = {
  quizId: "1nSUqZVAfo",
  quizName: "JavaScript Quiz",
  questions: [
    {
      questionNo: 1,
      questionId: "CmbnNrsXpR",
      question: "Which type of JavaScript language is ___",
      points: 5,
      options: [
        {
          text: "Object-Oriented",
          isRight: false,
        },
        {
          text: "Object-Based",
          isRight: true,
        },
        {
          text: "Assembly-language",
          isRight: false,
        },
        {
          text: "High-level",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 2,
      questionId: "yKf3cztlNW",
      question:
        "Which one of the following also known as Conditional Expression:",
      points: 5,
      options: [
        {
          text: "Alternative to if-else",
          isRight: false,
        },
        {
          text: "Switch statement",
          isRight: false,
        },
        {
          text: "If-then-else statement",
          isRight: false,
        },
        {
          text: "immediate if",
          isRight: true,
        },
      ],
    },

    {
      questionNo: 3,
      questionId: "dYkokpBDSa",
      question:
        "Every object contains three object attributes that are _______.",
      points: 10,
      options: [
        {
          text: "Prototype, class, object's extensible flag",
          isRight: true,
        },
        {
          text: "Prototype, class, objects' parameters",
          isRight: false,
        },
        {
          text: "Class, parameters, object's extensible flag",
          isRight: false,
        },
        {
          text: "Native object, Classes and Interfaces and Object's extensible flag",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 4,
      questionId: "LMbIjpKuwO",
      question:
        "In the following given line of code, the prototype representing the_____",
      points: 10,
      options: [
        {
          text: "Function x",
          isRight: false,
        },
        {
          text: "Prototype of a function",
          isRight: true,
        },
        {
          text: "A custom constructor",
          isRight: false,
        },
        {
          text: "Not valid",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 5,
      questionId: "L6DVjmfF9B",
      question: 'For which purpose the array "map()" methods is used ?',
      points: 20,
      options: [
        {
          text: "It used for mapping the elements of another array into itself.",
          isRight: false,
        },
        {
          text: "It passes each data-item of the array and returns the necessary mapped elements.",
          isRight: false,
        },
        {
          text: "It passes the data-items of an array into another array.",
          isRight: false,
        },
        {
          text: "It passes every element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function.",
          isRight: true,
        },
      ],
    },
  ],
};

const nodejsQuiz: Quiz = {
  quizId: "U9EzIxE74Z",
  quizName: "NodeJs Quiz",
  questions: [
    {
      questionNo: 1,
      questionId: "cpsp4evJZv",
      question: "What is Node.JS?",
      points: 5,
      options: [
        {
          text: "Node.js is a web server.",
          isRight: false,
        },
        {
          text: "Node.js is a JavaScript based framework/platform built on Google Chrome's JavaScript V8 Engine.",
          isRight: true,
        },
        {
          text: "Node.js is a java based framework",
          isRight: false,
        },
        {
          text: "None of the above.",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 2,
      questionId: "iWN9oCo6pY",
      question:
        "Which of the following command will show all the modules instIt passes every element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function.alled globally?",
      points: 5,
      options: [
        {
          text: "$ npm ls -g",
          isRight: true,
        },
        {
          text: "$ npm ls",
          isRight: false,
        },
        {
          text: "$ node ls -g",
          isRight: false,
        },
        {
          text: "$ node ls",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 3,
      questionId: "qL6WLOYyUa",
      question:
        "Which of the following is the correct way to get an absolute path?",
      points: 10,
      options: [
        {
          text: "os.resolve('main.js')",
          isRight: false,
        },
        {
          text: "path.resolve('main.js')",
          isRight: true,
        },
        {
          text: "fs.resolve('main.js')",
          isRight: false,
        },
        {
          text: "None of the above.",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 4,
      questionId: "GoMQ1Gchzx",
      question: "What is Express?",
      points: 10,
      options: [
        {
          text: "Express is a application framework that provides a robust set of features to develop desktop based applications.",
          isRight: false,
        },
        {
          text: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.",
          isRight: true,
        },
        {
          text: "Both of the above.",
          isRight: false,
        },
        {
          text: "None of the above.",
          isRight: false,
        },
      ],
    },

    {
      questionNo: 5,
      questionId: "Kxe5PxcpsZ",
      question: "Which of the following is true about fs module of Node?",
      points: 20,
      options: [
        {
          text: "Every method in fs module have synchronous as well as asynchronous form.",
          isRight: false,
        },
        {
          text: "Asynchronous methods of fs module take last parameter as completion function callback and first parameter of the callback function as error.",
          isRight: false,
        },
        {
          text: "Both of the above.",
          isRight: true,
        },
        {
          text: "None of the above.",
          isRight: false,
        },
      ],
    },
  ],
};

export { reactQuiz, cssQuiz, javascriptQuiz, nodejsQuiz };
