import { Container, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Attribution = () => {
  const { t } = useTranslation();

  const translationAttribution = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {t('attribution.translatedBy')}{' '}
        <Link href={t('attribution.translatorLink')}>
          {t('attribution.translatorName')}
        </Link>
      </Typography>
    );
  };

  return (
    <Container>
      <Typography
        margin={1}
        variant="body2"
        color="textSecondary"
        align="center"
      >
        {t('attribution.createdBy')}{' '}
        <Link href="https://github.com/jhaals/yopass">Johan Haals</Link>
      </Typography>
      <Typography
        margin={1}
        variant="body2"
        color="textSecondary"
        align="center"
      >
        {t('attribution.Customized_by')}{' '}
        <Link href="https://www.headitsolutions.ch/">HEAD IT Solutions AG</Link>
      </Typography>
      <Typography
        marginBottom={4}
        variant="body2"
        color="textSecondary"
        align="center"
      >
        {t('attribution.Support')}{' '}
        <Link href="https://get.teamviewer.com/his-qs">TeamViewer HEAD IT</Link>
      </Typography>
      {t('attribution.translatorName') && translationAttribution()}
    </Container>
  );
};
