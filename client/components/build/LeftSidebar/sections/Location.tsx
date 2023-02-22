import { useTranslation } from 'next-i18next';

import Heading from '@/components/shared/Heading';
import ResumeInput from '@/components/shared/ResumeInput';

const Location = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading path="sections.location" name={t<string>('builder.leftSidebar.sections.location.heading')} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ResumeInput
          label={t<string>('builder.leftSidebar.sections.location.city.label')}
          path="basics.location.city"
        />
        <ResumeInput
          label={t<string>('builder.leftSidebar.sections.location.region.label')}
          path="basics.location.region"
        />
        <ResumeInput
          label={t<string>('builder.leftSidebar.sections.location.postal-code.label')}
          path="basics.location.postalCode"
        />
      </div>
    </>
  );
};

export default Location;
