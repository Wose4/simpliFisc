import React from "react";

interface ThemedTitleProps {
  size?: "sm" | "md" | "lg" | "xl"; // Predefined sizes
  color?: string; // Custom color
  align?: "left" | "center" | "right"; // Text alignment
  className?: string; // Additional custom styles
  children: React.ReactNode;
}

const ThemedTitle: React.FC<ThemedTitleProps> = ({
  size = "md",
  color = "black",
  align = "left",
  className = "",
  children,
}) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-4xl",
  };

  return (
    <h1
      className={`${sizeClasses[size]} text-${align} ${className}`}
      style={{ color }}
    >
      {children}
    </h1>
  );
};

export default ThemedTitle;
