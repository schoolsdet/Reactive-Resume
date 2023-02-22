import {
  Architecture,
  Category,
  Download,
  FontDownload,
  Link as LinkIcon,
  Map,
  Margin,
  Palette,
  Person,
  School,
  Settings as SettingsIcon,
  Share,
  Style,
  VolunteerActivism,
  Work,
} from '@mui/icons-material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Section as SectionRecord, SectionType } from '@reactive-resume/schema';
import isEmpty from 'lodash/isEmpty';

import Basics from '@/components/build/LeftSidebar/sections/Basics';
import Location from '@/components/build/LeftSidebar/sections/Location';
import Section from '@/components/build/LeftSidebar/sections/Section';
import CustomCSS from '@/components/build/RightSidebar/sections/CustomCSS';
import Export from '@/components/build/RightSidebar/sections/Export';
import Layout from '@/components/build/RightSidebar/sections/Layout';
import Links from '@/components/build/RightSidebar/sections/Links';
import Settings from '@/components/build/RightSidebar/sections/Settings';
import Sharing from '@/components/build/RightSidebar/sections/Sharing';
import Templates from '@/components/build/RightSidebar/sections/Templates';
import Theme from '@/components/build/RightSidebar/sections/Theme';
import Typography from '@/components/build/RightSidebar/sections/Typography';
import { SidebarSection } from '@/types/app';

export const left: SidebarSection[] = [
  {
    id: 'basics',
    icon: <Person />,
    component: <Basics />,
  },
  {
    id: 'location',
    icon: <Map />,
    component: <Location />,
  },
  {
    id: 'work',
    icon: <Work />,
    component: (
      <Section
        type={'work'}
        addMore={true}
        path="sections.work"
        titleKey="name"
        subtitleKey="position"
        isEditable
        isHideable
      />
    ),
  },
  {
    id: 'education',
    icon: <School />,
    component: (
      <Section
        type={'education'}
        path="sections.education"
        titleKey="institution"
        subtitleKey="area"
        isEditable
        isHideable
      />
    ),
  },
  {
    id: 'skills',
    icon: <Architecture />,
    component: (
      <Section type={'skills'} path="sections.skills" titleKey="name" subtitleKey="level" isEditable isHideable />
    ),
  },
  {
    id: 'volunteer',
    icon: <VolunteerActivism />,
    component: (
      <Section
        type={'volunteer'}
        path="sections.volunteer"
        titleKey="organization"
        subtitleKey="position"
        isEditable
        isHideable
      />
    ),
  },
];

export const right: SidebarSection[] = [
  {
    id: 'templates',
    icon: <Category />,
    component: <Templates />,
  },
  {
    id: 'layout',
    icon: <Margin />,
    component: <Layout />,
  },
  {
    id: 'typography',
    icon: <FontDownload />,
    component: <Typography />,
  },
  {
    id: 'theme',
    icon: <Palette />,
    component: <Theme />,
  },
  {
    id: 'css',
    icon: <Style />,
    component: <CustomCSS />,
  },
  {
    id: 'sharing',
    icon: <Share />,
    component: <Sharing />,
  },
  {
    id: 'export',
    icon: <Download />,
    component: <Export />,
  },
  {
    id: 'settings',
    icon: <SettingsIcon />,
    component: <Settings />,
  },
  {
    id: 'links',
    icon: <LinkIcon />,
    component: <Links />,
  },
];

export const getSectionsByType = (sections: Record<string, SectionRecord>, type: SectionType): SectionRecord[] => {
  if (isEmpty(sections)) return [];

  return Object.entries(sections).reduce((acc, [id, section]) => {
    if (section.type.startsWith(type) && section.isDuplicated) {
      return [...acc, { ...section, id }];
    }

    return acc;
  }, [] as SectionRecord[]);
};

export const getCustomSections = (sections: Record<string, SectionRecord>): SectionRecord[] => {
  if (isEmpty(sections)) return [];

  return Object.entries(sections).reduce((acc, [id, section]) => {
    if (section.type === 'custom') {
      return [...acc, { ...section, id }];
    }

    return acc;
  }, [] as SectionRecord[]);
};

const sections = [...left, ...right];

export default sections;
