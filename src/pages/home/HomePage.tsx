import { Button } from 'components/atoms';
import { HOME_PAGE_LABELS } from 'constants/labels';
import ROUTES from 'constants/routes';
import { PublicTemplate } from 'templates';

const HomePage = (): React.ReactElement => {
  const { TITLE, DESCRIPTION, ACTION_BUTTON } = HOME_PAGE_LABELS;
  const { CHAT } = ROUTES;

  return (
    <PublicTemplate title={TITLE} description={DESCRIPTION}>
      <Button text={ACTION_BUTTON} href={CHAT} />
    </PublicTemplate>
  );
};

export default HomePage;
