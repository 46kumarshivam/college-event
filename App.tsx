const BACKEND_URL = "https://backend-869254969221.asia-south1.run.app";

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { EventsView } from './components/EventsView';
import { ManageEvents } from './components/ManageEvents';
import { ParticipantsView } from './components/ParticipantsView';
import { CertificatesView } from './components/CertificatesView';
import { EventDetailsModal } from './components/EventDetailsModal';
import { Event, Registration, UserRole, User } from './types';
import { toast, Toaster } from 'sonner';
import { getEvents, getRegistrations, addEvent, deleteEvent, registerUserForEvent } from './services/eventService';
import { Button } from './components/ui/button';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState<User | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const [eventsData, regsData] = await Promise.all([getEvents(), getRegistrations()]);
          setEvents(eventsData as Event[]);
          setRegistrations(regsData as Registration[]);
        } catch (error: any) {
          toast.error(error.message || 'Failed to fetch data from Firebase');
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [user]);

  const handleLogin = (role: UserRole) => {
    setUser({ role });
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleViewEventDetails = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleRegister = async (formData: any) => {
    if (!selectedEvent) return;

    try {
      await registerUserForEvent(selectedEvent.id, formData);
      
      // Refresh data
      const [eventsData, regsData] = await Promise.all([getEvents(), getRegistrations()]);
      setEvents(eventsData as Event[]);
      setRegistrations(regsData as Registration[]);

      toast.success('Successfully registered for ' + selectedEvent.title);
      setSelectedEvent(null);
    } catch (error: any) {
      toast.error(error.message || 'Registration failed');
    }
  };

  const handleAddEvent = async (eventData: Omit<Event, 'id'>) => {
    try {
      await addEvent(eventData);
      const updatedEvents = await getEvents();
      setEvents(updatedEvents as Event[]);
      toast.success('Event created successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to create event');
    }
  };

  const handleDeleteEvent = async (id: string) => {
    try {
      await deleteEvent(id);
      setEvents(events.filter(e => e.id !== id));
      toast.success('Event deleted successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete event');
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" richColors />
      
      <Header userRole={user?.role} onToggleSidebar={toggleSidebar} onLogout={handleLogout} />

      {user ? (
        <div className="flex">
          <Sidebar
            activeTab={activeTab}
            onTabChange={handleTabChange}
            userRole={user.role}
            isOpen={sidebarOpen}
          />

          <main className="flex-1 lg:ml-0">
            <div className="p-6 lg:p-8 max-w-[1400px] mx-auto">
              {/* Content */}
              {activeTab === 'dashboard' && (
                <Dashboard
                  events={events}
                  registrations={registrations}
                  userRole={user.role}
                />
              )}

              {user.role === 'student' && activeTab === 'events' && (
                <EventsView
                  events={events}
                  onViewDetails={handleViewEventDetails}
                />
              )}

              {user.role === 'student' && activeTab === 'my-registrations' && (
                <ParticipantsView
                  registrations={registrations}
                />
              )}

              {user.role === 'student' && activeTab === 'certificates' && (
                <CertificatesView
                  registrations={registrations}
                />
              )}

              {user.role === 'admin' && activeTab === 'manage-events' && (
                <ManageEvents
                  events={events}
                  onAddEvent={handleAddEvent}
                  onDeleteEvent={handleDeleteEvent}
                />
              )}

              {user.role === 'admin' && activeTab === 'participants' && (
                <ParticipantsView
                  registrations={registrations}
                />
              )}

              {user.role === 'admin' && activeTab === 'certificates' && (
                <CertificatesView
                  registrations={registrations}
                />
              )}
            </div>
          </main>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-8">Welcome to the College Event Manager</h1>
          <div className="flex gap-4">
            <Button size="lg" onClick={() => handleLogin('student')}>Login as Student</Button>
            <Button size="lg" variant="secondary" onClick={() => handleLogin('admin')}>Login as Admin</Button>
          </div>
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onRegister={handleRegister}
        />
      )}
    </div>
  );
}
