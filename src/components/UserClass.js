import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "Dummy",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "Child componentDidMount");

    // Api call

    const data = await fetch("https://api.github.com/users/carthy93");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentwillunmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(name + "Child render");
    return (
      <div className="user-card">
        <img src={avatar_url} alt="Profile img" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: karthikb@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
