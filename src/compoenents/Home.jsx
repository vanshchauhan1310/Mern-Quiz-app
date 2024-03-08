import React, { useState, useRef, useEffect } from 'react';
import './home.css';

const Home = () => {
  const formRef = useRef(null);
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Load questions from JSON file
    fetch('questions.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        return response.json();
      })
      .then(data => {
        setQuestions(data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      console.log("User is logged in");
      setLoggedIn(true);
    } else {
      alert("Please enter your name.");
    }
  };

  if (loggedIn) {
    return <WelcomePage name={name} questions={questions} />;
  }

  return (
    <>
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-16 xl:py-24">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Quiz Time</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Test your knowledge with our fun and challenging quizzes. Play solo or challenge your friends.
              </p>
              <form
                ref={formRef}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Enter your Name"
                  name="text"
                  value={name}
                  onChange={handleChange}
                  className="input"
                />
                <button type="submit" onClick={handleSubmit} className="btn">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const WelcomePage = ({ name, questions }) => {
  return (
    <>
      <div className="welcome-container">
        <h2 className="welcome-heading">Welcome, {name}!</h2>
        {questions.map((ques, index) => (
          <div className="quesid" key={index}>
            <b>{ques.question}</b>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
