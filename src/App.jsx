import { useState } from "react";
import "./App.css";
import { Dropdown } from "./components/Dropdown";
import { ErrorGroup } from "./components/ErrorGroup";
import { motion } from "framer-motion";
import { Sketcher } from "./components/Sketcher";
// const words = [
//   "monitor",
//   "program",
//   "application",
//   "keyboard",
//   "javascript",
//   "typescript",
//   "gaming",
//   "network",
// ];

const App = () => {
  // const [username, setUsername] = useState("");
  // const [user, setUser] = useState(null)
  // const [errors, setErrors] = useState({
  //   firstname: { message: "", code: null },
  // });

  // const handleChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(`https://api.github.com/users/${username}`)
  //           .then(async (res) => {
  //               return [res, await res.json()]
  //           })
  //           .then(([res, data]) => {
  //             if(res.ok){
  //               return setUser(data)
  //             }

  //             const tempObj = { ...errors };
  //             tempObj.firstname = { message: data.message, code: res.status };
  //             setErrors(tempObj);
  //           })
  // };

  return (
    <div className="App">
      <Sketcher />
      {/* <form
        style={{ display: "flex", flexDirection: "column", width: "200px" }}
      >
        <h2>Header</h2>
        <ErrorGroup
          value={username}
          onChange={handleChange}
          errors={errors.firstname}
        />
        <motion.button layout onClick={handleSubmit}>
          submit
        </motion.button>
         <span>
         {user ? user.name : 'no user'}
        </span>
      </form> */}
      {/* <Dropdown words={words} /> */}
    </div>
  );
};

export default App;
