export function Button({ children, className = "", type = "button", ...props }) {
  return (
    <button
      type={type} // <-- This line is key!
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

