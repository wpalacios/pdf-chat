import TextLineProps from './TextLine.props';

const TextLine = ({ text, ...props }: TextLineProps): React.ReactElement => {
  return (
    <div className="whitespace-pre-line" {...props}>
      {text}
    </div>
  );
};

export default TextLine;
