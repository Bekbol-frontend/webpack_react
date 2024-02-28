import ErrorPage from "@/widgets/ErrorPage";
import React, { ErrorInfo, Suspense } from "react";

interface IProps {
  children: React.ReactNode;
}
interface IState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback="loading..........">
          <ErrorPage />
        </Suspense>
      );
    }

    return this.props.children;
  }
}
