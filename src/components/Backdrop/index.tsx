import { createPortal } from "react-dom";

const Backdrop = () => {
  return createPortal(
    <div className='fixed top-0 left-0 z-5 w-[100vw] h-[100vh] bg-stone-500 opacity-50'></div>,
    document.getElementById("backdrop")!
  );
};

export default Backdrop;
