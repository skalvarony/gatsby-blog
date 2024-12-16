---
title: "React Error Boundaries"
date: "2024-07-15"
description: "How to handle unexpected errors gracefully in your React applications."
---

## What Are Error Boundaries?

**Error boundaries** are special React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire app. They offer a more controlled way to handle **unexpected runtime errors**.

### Why Use Error Boundaries?

1. **Graceful Failure**: Prevents a single broken component from bringing down your entire application.
2. **Better UX**: Shows a friendly fallback or error screen instead of a blank page or console error spam.
3. **Debugging**: Logs error details, making it easier to identify and fix issues.

---

## Creating an Error Boundary

Error boundaries are typically **class components** that implement two specific lifecycle methods:

- **`static getDerivedStateFromError(error)`**
- **`componentDidCatch(error, info)`**

```js
import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log or track error info, e.g. to an error reporting service
    console.error("Error Boundary Caught:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>
    }
    return this.props.children
  }
}

export default ErrorBoundary
```
