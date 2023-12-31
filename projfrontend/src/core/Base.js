import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "#efddb2 text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="#efddb2 text-dark text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-dark mt-auto py-2">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container">
        <span className="text-dark">
          An Amazing <span className="text-dark">Bookstore</span>
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
