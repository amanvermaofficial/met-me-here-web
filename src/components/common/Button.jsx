const Button = ({
  children,
  text,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyle =
    "rounded-lg font-medium transition-all duration-200 flex items-center justify-center";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
   secondary:
  "bg-gradient-to-r from-green-600 to-green-400 text-white hover:from-green-600 hover:to-black",
    outline: "border border-gray-400 text-black hover:text-white border border-gray-300 hover:bg-black",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${sizes[size]}
        ${disabledStyle}
        ${className}
      `}
    >
      {children ? children : text}
    </button>
  );
};

export default Button;