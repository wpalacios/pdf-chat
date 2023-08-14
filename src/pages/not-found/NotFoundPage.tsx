import { Icon, Button } from 'components/atoms';
import { NOT_FOUND_PAGE_LABELS } from 'constants/labels';
import ROUTES from 'constants/routes';
import { PublicTemplate } from 'templates';

const NotFoundPage = (): React.ReactElement => {
  const { TITLE, ACTION_BUTTON } = NOT_FOUND_PAGE_LABELS;
  const { HOME } = ROUTES;

  return (
    <PublicTemplate title={TITLE}>
      <div className=" grid-rows-2 w-full">
        <div className="flex justify-center">
          <Button text={ACTION_BUTTON} href={HOME} />
        </div>
        <div>
          <Icon
            containerStyle={{
              maxHeight: '50%',
              maxWidth: '50%',
              margin: 'auto',
              display: 'flex',
              justifyContent: 'center'
            }}
            icon={'404-astronaut'}
          />
        </div>
      </div>
    </PublicTemplate>
  );
};

export default NotFoundPage;
