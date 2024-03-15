type ModalPropsType = {
  children: React.ReactNode;
  show: boolean;
  closeModal: () => void;
};

export default function ({ children, show, closeModal }: ModalPropsType) {
  if (show)
    return (
      <div
        className={`fixed top-0 left-0 w-[100dvw] h-[100dvh] 
      flex justify-center items-center delay-1000 bg-black/70
      z-50 duration-500 transition-all cursor-pointer`}
        onClick={() => closeModal()}
      >
        <div
          className={`max-w-[500px] max-h-[95dvh] overflow-y-auto cursor-default transition-all delay-1000 ${
            show ? "scale-100" : "scale-50"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
}
