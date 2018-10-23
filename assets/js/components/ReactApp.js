import React from "react";

export default class ReactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    const display = {
      classNames: this.state.liked ? "is-warning" : "is-info",
      icon: this.state.liked ? "fa-heart" : "fa-frown-o",
      text: this.state.liked ? "You likes me" : "No one likes me"
    };

    return (
      <div>
        <button
          className={`button is-large is-fullwidth is-rounded ${
            display.classNames
          }`}
          onClick={() => this.setState({ liked: !this.state.liked })}
        >
          <i className={`fa ${display.icon}`} />
          &nbsp;
          {display.text}
        </button>
      </div>
    );
  }
}
