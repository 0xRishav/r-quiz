import { Blob } from "react-blob";

type Position = {
  top: string;
  left: string;
  right: string;
  bottom: string;
};

type QuizDivPropTypes = {
  title: string;
  color: string;
  icon: any;
  position: any;
};

const QuizDiv = ({
  title,
  color,
  icon,
  position: { top, left, right, bottom },
}: QuizDivPropTypes) => {
  const style = {
    position: "absolute",
    top: "-15%",
    right: "-15%",
    zIndex: "-1",
    backgroundColor: "#21D4FD",
    color: "white",
    opacity: "0.05",
    fontSize: "50vh",
  };

  return (
    <div
      className={`h-16 w-32 bg-${color}-400 relative rounded-lg z-10 flex justify-center items-center`}
    >
      <Blob
        size="3rem"
        style={{
          position: "absolute",
          top: "-15%",
          right: "-15%",
          zIndex: -1,
          backgroundColor: "#21D4FD",
          color: "white",
          opacity: 0.05,
          fontSize: "50vh",
        }}
        className={`z-0 bg-${color}-500`}
      />
      <div className="absolute top-2 right-2 text-white opacity-50 rotate-45">
        {icon}
      </div>

      <div className="absolute left-4 bottom-4">{title}</div>
    </div>
  );
};

export default QuizDiv;
