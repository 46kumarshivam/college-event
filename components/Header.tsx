import { Menu, Calendar, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { UserRole } from '../types';

interface HeaderProps {
  userRole?: UserRole;
  onToggleSidebar: () => void;
  onLogout: () => void;
}

export function Header({ userRole, onToggleSidebar, onLogout }: HeaderProps) {
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
      <div className="px-lg py-md flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-md">
          {userRole && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSidebar}
              className="lg:hidden hover:bg-neutral-100"
            >
              <Menu size={24} className="text-neutral-600" />
            </Button>
          )}
          <div className="flex items-center gap-md">
            <div className="bg-primary-100 p-md rounded-lg">
              <Calendar size={24} className="text-primary-600" />
            </div>
            <div>
              <h1 className="text-h3 font-bold text-neutral-900">College Events</h1>
              <p className="text-caption text-neutral-500">Management Portal</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-lg">
          {userRole && (
            <div className="hidden sm:flex items-center px-md py-2 bg-primary-50 rounded-lg border border-primary-200">
              <span className="text-caption font-medium text-primary-700 uppercase tracking-wide">
                {userRole === 'admin' ? '👨‍💼 Administrator' : '👨‍🎓 Student'}
              </span>
            </div>
          )}
          {userRole && (
            <Button variant="ghost" size="icon" onClick={onLogout} className="hover:bg-neutral-100">
              <LogOut size={24} className="text-neutral-600" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
