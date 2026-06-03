const downloadButtonFile = () => {
  const code = `
import React from "react";
import propTypes from "prop-types";
import "./index.css";

function Button({
children,
size = "medium",
variant = "primary",
isDisabled = false,
onClick,
fullWidth = false,
}) {
return (
  <button
    className={\`button \${size} \${variant} \${fullWidth ? "full-width" : ""} \${isDisabled ? "disabled" : ""}\`}
    onClick={onClick}
    disabled={isDisabled}
  >
    {children}
  </button>
);
}

Button.propTypes = {
children: propTypes.node.isRequired,
size: propTypes.oneOf(["small", "medium", "large"]),
variant: propTypes.oneOf(["primary", "secondary", "danger", "outline", "gradient"]),
isDisabled: propTypes.bool,
onClick: propTypes.func,
fullWidth: propTypes.bool,
};

export default Button;
  `;

  const blob = new Blob([code], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Button.js";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloadButtonFile;