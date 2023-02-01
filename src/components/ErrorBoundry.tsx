import { Component, ErrorInfo } from "react";
import Error from "./Error";

type ErrorBoundryProps = {
  children: JSX.Element;
};

type ErrorBoundryState = {
  hasError: boolean;
};

export default class ErrorBoundry extends Component<
  ErrorBoundryProps,
  ErrorBoundryState
> {
  constructor(props: ErrorBoundryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Error />;
    }
    return this.props.children;
  }
}
