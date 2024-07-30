import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <h2>This is Namaste React Web Series</h2>
      <User name={"Karthik (Function)"} />
      <UserClass name={"Karthik (Class)"} location={"Chennai (Class)"} />
    </div>
  );
};

export default About;
