function Error({ children }) {
  return (
    <div className="bg-red-600 text-white font-bold text-center p-3 mb-3 rounded-md uppercase">
      {children}
    </div>
  );
}

export default Error;
