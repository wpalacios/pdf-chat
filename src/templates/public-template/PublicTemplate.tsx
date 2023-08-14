import PublicTemplateProps from './PublicTemplate.props';

const PublicTemplate = ({
  description,
  title,
  children
}: PublicTemplateProps): React.ReactElement => {
  return (
    <div className="bg-white dark:bg-slate-800 relative overflow-hidden h-screen">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {title && (
          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              {title}
            </h1>
          </div>
        )}

        {description && (
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        )}

        <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">{children}</div>
      </div>
    </div>
  );
};

export default PublicTemplate;
