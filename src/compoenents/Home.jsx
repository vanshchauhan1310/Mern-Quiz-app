import React, { useState, useRef } from 'react';
import './home.css';

const Home = () => {
  const formRef = useRef(null);
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') { // Check if the name is not empty
      console.log("User is logged in");
      setLoggedIn(true); // Set login status to true
    } else {
      alert("Please enter your name."); // Show an alert if the name is empty
    }
  };

  if (loggedIn) {
    // Redirect user to the welcome page if logged in
    return <WelcomePage name={name} />;
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

const WelcomePage = ({ name }) => {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      {/* Additional content for the welcome page */}
    </div>
  );
};

export default Home;
