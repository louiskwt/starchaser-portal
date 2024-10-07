import React from "react";
import {Meme} from "../Meme";

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
    const currentPath = window.location.pathname;
    const onIndexPage = currentPath.length === 0 || currentPath === "/";
    const msg = onIndexPage ? "Something_went_wrong_try_again_later!" : "Something_went_wrong!!";

    if (this.state.hasError) {
      return (
        <>
          <div className="flex justify-center flex-col mt-12 items-center w-full h-full">
            <Meme text={msg} />
            <button
              className="btn btn-primary mt-12"
              onClick={() => {
                if (onIndexPage) {
                  window.open("https://www.youtube.com/watch?v=mx86-rTclzA", "_blank");
                } else {
                  window.location.replace("/");
                }
              }}>
              Click here
            </button>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}
