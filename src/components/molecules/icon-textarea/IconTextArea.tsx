import IconTextAreaProps from './IconTextArea.props';

// TODO: resize text area based on content, remove overflow-hidden class after that
const IconTextArea = ({ icon, ...inputProps }: IconTextAreaProps): React.ReactElement => {
  return (
    <div className="relative flex flex-row flex-1 border-4 w-full bg-white p-3 pl-2 pr-2 justify-center items-center">
      <textarea
        rows={1}
        className="overflow-hidden w-full border-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none resize-none sm:leading-6"
        {...inputProps}
      />
      {icon}
    </div>
  );
};

export default IconTextArea;
