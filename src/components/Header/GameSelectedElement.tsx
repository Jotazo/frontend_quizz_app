const GameSelectedElement = ({ icon }) => {
  return (
    <div className="heading-s flex items-center !text-[16px] sm:!text-2xl gap-4 transition duration-500">
      {icon}
      <p className="flex-1 text-darkBlue dark:text-white">HTML</p>
    </div>
  );
};

export default GameSelectedElement;
