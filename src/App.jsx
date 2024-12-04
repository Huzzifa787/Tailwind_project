import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,multiply,incrementByAmount,resetToZero } from './redux/Counter/CounterSlice';
import Wrapper from './components/Wrapper';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Service from "./components/Service";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';

// HOC: Wrapper Function
const withLogger = (WrappedComponent) => {
  return (props) => {
    // console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
};

// Wrapped Component
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
const LearnNew = ({text}) =>{
  return <h2>{text}</h2>;
}
// Using the Wrapper
const WrappedGreeting = withLogger(Greeting);
const WrappedLearn = withLogger(LearnNew);


function App() {
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  ////////////////// Context Work ///////////////
// Access the theme and toggleTheme function from the context
const { theme, toggleTheme } = useContext(ThemeContext);

// Style the app based on the current theme
const appStyle = {
  backgroundColor: theme === "light" ? "#fff" : "#333",
  color: theme === "light" ? "#000" : "#fff",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease",
};
// Setting a cookie
document.cookie = "username=JohnDoe;phoneNo=3046559703; expires=Wed, 4 Dec 2024 11:54:00 UTC; path=/";


console.log("Cookie : ",document.cookie);

// Note: Cookie parsing would be needed to retrieve individual values


  return (
    <>
    {/* <div>
      <button  onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(multiply())}>MultiplyBy2</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>IncrementByAmount</button>
      <button onClick={() => dispatch(resetToZero())}>ResetToZero</button>
    </div>
    <div>
      value : {count}
    </div> */}
    {/* <hr /> */}
    {/* Context Work */}
     {/* <div style={appStyle}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div> */}
    {/* Wrapper Component */}
    {/* <Wrapper>
      <h1>WRAPPER COMPONENT</h1>
      <p>This is Wrapper Component</p>
    </Wrapper>
    <hr />
    <WrappedGreeting name="huzzifa"/>
    <hr />
    <WrappedLearn text="Learn About HOC"/> */}
     <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    
    </>
    


  )
}

export default App
