function LoadingPage() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-row gap-2 bottom-0 right-0 top-0 left-0">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
}

export default LoadingPage;
