import Image from 'next/image';

type Props = {
  size?: 256 | 64 | 48 | 40 | 32;
};

const Logo: React.FC<Props> = ({ size = 64 }) => (
  <Image alt="Reactive Resume" src="/images/logos/sdet-school-logo.png" className="rounded" width="433" height="100" priority />
);

export default Logo;
