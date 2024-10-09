import { LucideIcon, User, Code, Briefcase, Mail } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={isActive ? 'active' : ''}
  >
    <Icon className="icon" size={16} /> {label}
  </button>
);

export default NavItem;

export const navItems = [
   { key: 'about', icon: User, label: 'About' },
  { key: 'skills', icon: Code, label: 'Skills' },
  { key: 'projects', icon: Briefcase, label: 'Projects' },
  { key: 'contact', icon: Mail, label: 'Contact' }
]
