import ROUTES from 'constants/routes';
import InnerTemplateProps from './InnerTemplate.props';
import { Button } from 'components/atoms';

const InnerTemplate = ({ icon, children }: InnerTemplateProps): React.ReactElement => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16">
            <div className="flex flex-1 sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <a href="https://www.useprosper.co/" target="_blank" rel="noreferrer noopener">
                  {icon || (
                    <img
                      src="https://uploads-ssl.webflow.com/644749e028fdc49765fc4705/644753994084c985a6bd79ae_prosper-low-resolution-logo-white-on-transparent-background.svg"
                      loading="lazy"
                      width="72"
                      height="Auto"
                      alt="Prosper"
                    />
                  )}
                </a>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Button text={'Go home'} href={ROUTES.HOME}></Button>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default InnerTemplate;
