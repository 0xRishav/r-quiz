type ValidationWarningType = {
  text: string;
};

const ValidationWarning = ({ text }: ValidationWarningType) => {
  return (
    <div
      className="font-thin text-xs text-red-600 text-left"
      style={{ opacity: "100" }}
    >
      *{text}
    </div>
  );
};

export default ValidationWarning;
