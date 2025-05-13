import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-violet-200 via-indigo-200 to-purple-200">
      <Image
        className="animate-spin rounded-full"
        src="/logo.png"
        alt="Elahiya"
        height={200}
        width={200}
        priority
      />
    </div>
  );
};

export default Loading;
