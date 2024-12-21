"use client"

import React from "react";

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

export class CustomErrorBoundary extends React.Component<React.PropsWithChildren<{}>, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // エラーを検出し、状態を更新
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  // エラー情報をログに記録
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Caught an error:", error, errorInfo);
  }

  // フォールバックUIのレンダリング
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}