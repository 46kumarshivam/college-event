import { LayoutDashboard, Calendar, Users, Award, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent } from './ui/sheet';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userRole: 'student' | 'admin';
  isOpen: boolean;
}

export function Sidebar({ activeTab, onTabChange, userRole, isOpen }: SidebarProps) {
  const studentMenu = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'events', label: 'Browse Events', icon: Calendar },
    { id: 'my-registrations', label: 'My Registrations', icon: Users },
    { id: 'certificates', label: 'Certificates', icon: Award },
  ];

  const adminMenu = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'manage-events', label: 'Manage Events', icon: Calendar },
    { id: 'participants', label: 'Participants', icon: Users },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const menu = userRole === 'student' ? studentMenu : adminMenu;

  const SidebarContent = () => (
    <div className="p-6 space-y-2">
      {menu.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            variant={activeTab === item.id ? 'default' : 'ghost'}
            className="w-full justify-start gap-3"
          >
            <Icon size={20} />
            {item.label}
          </Button>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-card border-r border-border h-screen sticky top-16 overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={() => onTabChange(activeTab)}>
        <SheetContent side="left" className="w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
}
