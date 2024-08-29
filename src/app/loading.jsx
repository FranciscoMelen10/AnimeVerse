function LoadingPage() {
  return (
    <div className="absolute m-auto left-0 right-0 top-0 bottom-0 flex items-center justify-center ">
      <div className="flex flex-row gap-2 bottom-0 right-0 top-0 left-0">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
}

export default LoadingPage;
