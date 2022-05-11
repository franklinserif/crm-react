const ErrorMessage = ({ children }) => {
  return (
    <div className="text-center  my-4 bg-red-400 text-white font-bold p-1 rounded-md">
      {children}
    </div>
  );
};

export default ErrorMessage;
