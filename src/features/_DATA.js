let users = {
    sarahedo: {
      id: "sarahedo",
      password: "password123",
      name: "Sarah Edo",
      avatarURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAbkVgyQbwYNrSwq0FqWDWCJcOQVOf23DvHbOR-G105CfKl0I0Uo6PhBRTHRlianbvHE&usqp=CAU",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    },
    tylermcginnis: {
      id: "tylermcginnis",
      password: "abc321",
      name: "Tyler McGinnis",
      avatarURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm-KJMECWJvjbROgmX9cEk8JNFy9lrYNrBP1FV7oZPw&s",
      answers: {
        vthrdm985a262al8qx3do: "optionOne",
        xj352vofupe1dqz9emx13r: "optionTwo",
      },
      questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
    },
    mtsamis: {
      id: "mtsamis",
      password: "xyz123",
      name: "Mike Tsamis",
      avatarURL:
        "https://media.istockphoto.com/id/1227618813/es/vector/human-face-avatar-icon-perfil-para-la-red-social-hombre-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=l-Nb1sWxlo4feSppXnBVCSaZpYkFI7v147ce0Ym4lTQ=",
      answers: {
        xj352vofupe1dqz9emx13r: "optionOne",
        vthrdm985a262al8qx3do: "optionTwo",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
      },
      questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    },
    zoshikanlu: {
      id: "zoshikanlu",
      password: "pass246",
      name: "Zenobia Oshikanlu",
      avatarURL:
        "https://media.istockphoto.com/id/1227618791/es/vector/human-face-avatar-icon-perfil-para-la-red-social-hombre-ilustraci%C3%B3n-vectorial.jpg?s=170667a&w=0&k=20&c=S36eD7dDlXusPKOULAePQClmmLEQlvPdgo16EhP-slw=",
      answers: {
        xj352vofupe1dqz9emx13r: "optionOne",
      },
      questions: [],
    },
  };
  
  let questions = {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'Build our new application with Javascript',
      },
      optionTwo: {
        votes: [],
        text: 'Build our new application with Typescript'
      }
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'mtsamis',
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: 'hire more frontend developers',
      },
      optionTwo: {
        votes: ['mtsamis', 'sarahedo'],
        text: 'hire more backend developers'
      }
    },
    "am8ehyc8byjqgar0jgpub9": {
      id: 'am8ehyc8byjqgar0jgpub9',
      author: 'sarahedo',
      timestamp: 1488579767190,
      optionOne: {
        votes: [],
        text: 'conduct a release retrospective 1 week after a release',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'conduct release retrospectives quarterly'
      }
    },
    "loxhs1bqm25b708cmbf3g": {
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'tylermcginnis',
      timestamp: 1482579767190,
      optionOne: {
        votes: [],
        text: 'have code reviews conducted by peers',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'have code reviews conducted by managers'
      }
    },
    "vthrdm985a262al8qx3do": {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'take a course on ReactJS',
      },
      optionTwo: {
        votes: ['mtsamis'],
        text: 'take a course on unit testing with Jest'
      }
    },
    "xj352vofupe1dqz9emx13r": {
      id: 'xj352vofupe1dqz9emx13r',
      author: 'mtsamis',
      timestamp: 1493579767190,
      optionOne: {
        votes: ['mtsamis', 'zoshikanlu'],
        text: 'deploy to production once every two weeks',
      },
      optionTwo: {
        votes: ['tylermcginnis'],
        text: 'deploy to production once every month'
      }
    },
  }
  
  function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  
  export function _getUsers () {
    return new Promise((resolve) => {
      setTimeout(() => resolve({...users}), 1000)
    })
  }
  
  export function _getQuestions () {
    return new Promise((resolve) => {
      setTimeout(() => resolve({...questions}), 1000)
    })
  }
  
  function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
      id: generateUID(),
      timestamp: Date.now(),
      author,
      optionOne: {
        votes: [],
        text: optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwoText,
      }
    }
  }
  
  export function _saveQuestion (question) {
    return new Promise((resolve, reject) => {
      if (!question.optionOneText || !question.optionTwoText || !question.author) {
        reject("Please provide optionOneText, optionTwoText, and author");
      }
  
      const formattedQuestion = formatQuestion(question)
      setTimeout(() => {
        questions = {
          ...questions,
          [formattedQuestion.id]: formattedQuestion
        }
  
        resolve(formattedQuestion)
      }, 1000)
    })
  }
  
  export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
    return new Promise((resolve, reject) => {
      if (!authedUser || !qid || !answer) {
        reject("Please provide authedUser, qid, and answer");
      }
  
      setTimeout(() => {
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            answers: {
              ...users[authedUser].answers,
              [qid]: answer
            }
          }
        }
  
        questions = {
          ...questions,
          [qid]: {
            ...questions[qid],
            [answer]: {
              ...questions[qid][answer],
              votes: questions[qid][answer].votes.concat([authedUser])
            }
          }
        }
  
        resolve(true)
      }, 500)
    })
  }