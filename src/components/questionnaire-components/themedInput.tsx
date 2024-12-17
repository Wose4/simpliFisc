import React from "react";

interface ThemedInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  size?: "sm" | "md" | "lg"; // Optional size for input
  color?: string; // Custom text color for the label
  className?: string; // Custom classes for additional styling
}

const ThemedInput: React.FC<ThemedInputProps> = ({
  label,
  id,
  value,
  onChange,
  placeholder = "",
  required = false,
  size = "sm",
  color = "gray",
  className = "",
}) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className={`block ${sizeClasses[size]} font-medium text-${color}-700`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 focus:border-b-2 focus:border-blue-500 focus:outline-none focus:ring-0 box-border pb-2 pt-2 ${sizeClasses[size]} placeholder-custom ${className}`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default ThemedInput;
