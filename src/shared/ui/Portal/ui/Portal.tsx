import React from "react";
import { createPortal } from "react-dom";

interface IProps {
  children: React.ReactNode;
  domNode?: HTMLElement;
}

function Portal(props: IProps) {
  const { children, domNode = document.body } = props;

  return createPortal(children, domNode);
}

export default Portal;
