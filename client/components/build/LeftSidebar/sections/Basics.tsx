import { Divider, Popover } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import Heading from '@/components/shared/Heading';
import ResumeInput from '@/components/shared/ResumeInput';

import PhotoFilters from './PhotoFilters';

const Basics = () => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Heading path="sections.basics" name={t<string>('builder.leftSidebar.sections.basics.heading')} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="grid items-center gap-4 sm:col-span-2 sm:grid-cols-3">
          <div className="grid w-full gap-2 sm:col-span-2">
            <ResumeInput label={t<string>('builder.leftSidebar.sections.basics.name.label')} path="basics.name" />

            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <PhotoFilters />
            </Popover>
          </div>
        </div>

        <ResumeInput
          label={t<string>('builder.common.form.email.label')}
          path="basics.email"
          className="sm:col-span-2"
        />
        <ResumeInput label={t<string>('builder.common.form.phone.label')} path="basics.phone" />
        <ResumeInput label={t<string>('builder.common.form.url.label')} path="basics.website" />

        <Divider className="sm:col-span-2" />

        <ResumeInput
          label={t<string>('builder.leftSidebar.sections.basics.headline.label')}
          path="basics.headline"
          className="sm:col-span-2"
        />
        <ResumeInput
          type="textarea"
          label={t<string>('builder.common.form.summary.label')}
          path="basics.summary"
          className="sm:col-span-2"
          markdownSupported
        />
      </div>
    </>
  );
};

export default Basics;
