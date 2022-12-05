import React from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";

import { CSSTransition } from "react-transition-group";

export default function SideDrawer(props) {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

// createPortal lets you render child components in a different part of the DOM tree.
// Provide a way to render children into a DOM node that exists outside the hierarchy of the DOM component.
