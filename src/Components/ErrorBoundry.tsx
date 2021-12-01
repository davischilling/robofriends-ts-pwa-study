import React, { ReactNode } from 'react'

interface IErrorBoundryProps {}

interface IErrorBoundryState {
  hasError: boolean
}

class ErrorBoundry extends React.Component<
  IErrorBoundryProps,
  IErrorBoundryState
> {
  constructor(props: IErrorBoundryProps) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(): void {
    this.setState({ hasError: true })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>Ooooops. That is not good</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry
