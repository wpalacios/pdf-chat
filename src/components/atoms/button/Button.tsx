import { Link } from 'react-router-dom';
import ButtonProps from './button.props';

const Button = ({ icon, href, text, to, ...rest }: ButtonProps): React.ReactElement => {
  const classes =
    'inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border text-white text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800';

  if (to) {
    return <Link to={to} {...rest} className={`${rest.className ?? classes}`} />;
  }

  if (href) {
    return (
      <a href={href} {...rest} className={`${rest.className ?? classes}`}>
        {icon}
        {text}
      </a>
    );
  }

  return (
    <button type="button" {...rest} className={`${rest.className ?? classes}`}>
      {text}
    </button>
  );
};

export default Button;
