---
title: "Improving Performance with React Suspense"
date: "2024-07-10"
description: "An overview of lazy loading and concurrent features in React for optimizing performance."
---

## What is Suspense?

**Suspense** is a feature in React that lets you **defer rendering** part of your component tree until certain data or resources are ready. It’s especially handy for **code splitting** or asynchronous data fetching.

### Why Use Suspense?

1. **Code Splitting**: Dynamically load components only when needed, reducing initial bundle size.
2. **Concurrent UI Updates** (React 18+): Improves perceived performance by allowing React to handle updates in a more flexible way.
3. **Better UX**: You can specify fallback UI (like a loading spinner) while waiting for resources.

---

## Lazy Loading Components

**React.lazy** allows you to dynamically import components at runtime. This means your app only downloads the code for a component **when it’s actually needed**.

```js
import React, { Suspense } from "react"

// Lazy import
const HeavyComponent = React.lazy(() => import("./HeavyComponent"))

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```
