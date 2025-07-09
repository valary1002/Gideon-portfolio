export const Badge = ({ children, className = "" }) => (
  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 ${className}`}>
    {children}
  </span>
);
