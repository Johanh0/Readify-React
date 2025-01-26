const SimpleButton = ({ children }) => {
  return (
    <button class="cursor-pointer text-zinc-200 flex gap-2 items-center bg-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#111] transition-all ease-in duration-200">
      {children}
    </button>
  );
};

export default SimpleButton;
