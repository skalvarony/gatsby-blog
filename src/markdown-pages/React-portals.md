---
title: "Understanding React Portals"
date: "2024-07-20"
description: "An introduction to creating modals and overlays outside the main DOM hierarchy with React Portals."
---

## What Are React Portals?

**React Portals** let you render children into a DOM node that exists **outside** the parent component’s DOM hierarchy. Typically, you’d use portals to **break out** of a container or render overlays, modals, or tooltips at the top level of the DOM.

---

## Why Use Portals?

1. **Modals & Overlays**: Keep modals logically tied to your component tree but physically rendered outside, preventing z-index or overflow issues.
2. **Tooltips**: Ensure tooltips aren’t clipped by parent components with `overflow: hidden`.
3. **Flexibility**: Render elements in a completely different part of the DOM while keeping them in the React component tree.

---

## Basic Usage

```js
import React from "react"
import ReactDOM from "react-dom"

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal-root")
  )
}

export default Modal
```
