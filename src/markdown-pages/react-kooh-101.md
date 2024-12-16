---
title: "React Hooks 101"
date: "2024-06-15"
description: "An introductory guide to React Hooks, covering useState, useEffect, and more."
---

## Getting Started with Hooks

React Hooks provide a **powerful, concise** way to use state and lifecycle features within **functional components**. Introduced in React v16.8, they largely eliminate the need for class components.

### Why Hooks?

1. **Cleaner Code**: No more boilerplate code for classes or constructor methods.
2. **Reusability**: Hooks let you extract logic into custom hooks, making it easier to share and test code.
3. **Better Organization**: Keep related stateful logic together rather than scattering it across lifecycle methods.

---

### Common Hooks

- **useState**: Manages local component state.
- **useEffect**: Handles side effects, like data fetching or DOM manipulation.
- **useContext**: Accesses shared state without drilling props through multiple components.

### Quick Example

```js
import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  )
}

export default Counter
```
