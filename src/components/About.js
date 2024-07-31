import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
    // ApI call
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <User name={"Karthik (Function)"} /> */}
        <UserClass name={"Karthik (Class)"} location={"Chennai (Class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <h2>This is Namaste React Web Series</h2>
//       {/* <User name={"Karthik (Function)"} /> */}
//       <UserClass name={"Karthik (Class)"} location={"Chennai (Class)"} />
//     </div>
//   );
// };

export default About;
