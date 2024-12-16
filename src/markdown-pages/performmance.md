---
title: "Optimizing React Performance with Memoization Hooks"
date: "2024-07-25"
description: "An overview of how useCallback and useMemo can reduce unnecessary re-renders in React applications."
---

## Why Performance Matters

In larger React applications, **unnecessary re-renders** can negatively impact performance. Although React’s Virtual DOM is efficient, you can still improve speed by avoiding re-computation of values or functions when they haven’t changed. This is where **memoization hooks** come into play.

---

## `useCallback` vs `useMemo`

### **useCallback**

- **Signature**: `useCallback(fn, deps)`
- **Purpose**: Returns a **memoized callback**. If the dependencies don’t change, React reuses the same function object instead of creating a new one on each render.
- **Typical Use Case**: Passing callbacks to child components that rely on reference equality (e.g., `React.memo`) to avoid re-renders.

### **useMemo**

- **Signature**: `useMemo(create, deps)`
- **Purpose**: Returns a **memoized value**. It only recalculates the result when dependencies change.
- **Typical Use Case**: Expensive calculations or derived data that shouldn’t recompute on every render.

---

## Example: `useCallback`

```js
import React, { useState, useCallback } from "react"
import ChildComponent from "./ChildComponent"

function Parent() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  // Without useCallback, handleAction would be a new function on every render
  const handleAction = useCallback(() => {
    console.log("Action triggered")
  }, [])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <ChildComponent handleAction={handleAction} />
    </div>
  )
}

export default Parent
```
