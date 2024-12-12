import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-violet-200 via-indigo-200 to-purple-200">
      <Loader className="text-primary animate-spin" size={64} />
    </div>
  );
};

export default Loading;
