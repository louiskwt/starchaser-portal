import React from "react";
import {Meme} from "../Meme";
import {Navbar} from "../navbar";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, info) {
    console.error({error, info});
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Navbar />
          <div className="flex justify-center flex-col items-center w-full h-full">
            <Meme text={"Something went wrong!!"} />
            <button
              className="btn btn-primary mt-12"
              onClick={() => {
                window.location.replace("/");
              }}>
              Go Back
            </button>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}
