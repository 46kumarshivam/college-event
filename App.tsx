import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { EventsView } from './components/EventsView';
import { ManageEvents } from './components/ManageEvents';
import { ParticipantsView } from './components/ParticipantsView';
import { CertificatesView } from './components/CertificatesView';
import { EventDetailsModal } from './components/EventDetailsModal';
import { Event, Registration, UserRole } from './types';
import { toast, Toaster } from 'sonner';
import { getEvents, getRegistrations, addEvent, deleteEvent, registerUserForEvent } from './services/eventService';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userRole, setUserRole] = useState<UserRole>('student');
  const [events, setEvents] = useState<Event[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsData, regsData] = await Promise.all([getEvents(), getRegistrations()]);
        setEvents(eventsData as Event[]);
        setRegistrations(regsData as Registration[]);
      } catch (error) {
        toast.error('Failed to fetch data from Firebase');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
    } catch (error) {
      toast.error('Failed to create event');
    }
  };

  const handleDeleteEvent = async (id: string) => {
    try {
      await deleteEvent(id);
      setEvents(events.filter(e => e.id !== id));
      toast.success('Event deleted successfully');
    } catch (error) {
      toast.error('Failed to delete event');
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
      
      <Header userRole={userRole} onToggleSidebar={toggleSidebar} />

      <div className="flex">
        <Sidebar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          userRole={userRole}
          isOpen={sidebarOpen}
        />

        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8 max-w-[1400px] mx-auto">
            {/* Role Switcher - Demo only */}
            <div className="mb-6 flex justify-end">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1 inline-flex gap-1">
                <button
                  onClick={() => {
                    setUserRole('student');
                    setActiveTab('dashboard');
                  }}
                  className={`px-4 py-2 rounded-md transition-colors text-body-small ${
                    userRole === 'student'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Student View
                </button>
                <button
                  onClick={() => {
                    setUserRole('admin');
                    setActiveTab('dashboard');
                  }}
                  className={`px-4 py-2 rounded-md transition-colors text-body-small ${
                    userRole === 'admin'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Admin View
                </button>
              </div>
            </div>

            {/* Content */}
            {activeTab === 'dashboard' && (
              <Dashboard
                events={events}
                registrations={registrations}
                userRole={userRole}
              />
            )}

            {userRole === 'student' && activeTab === 'events' && (
              <EventsView
                events={events}
                onViewDetails={handleViewEventDetails}
              />
            )}

            {userRole === 'student' && activeTab === 'my-registrations' && (
              <ParticipantsView
                registrations={registrations}
              />
            )}

            {userRole === 'student' && activeTab === 'certificates' && (
              <CertificatesView
                registrations={registrations}
              />
            )}

            {userRole === 'admin' && activeTab === 'manage-events' && (
              <ManageEvents
                events={events}
                onAddEvent={handleAddEvent}
                onDeleteEvent={handleDeleteEvent}
              />
            )}

            {userRole === 'admin' && activeTab === 'participants' && (
              <ParticipantsView
                registrations={registrations}
              />
            )}

            {userRole === 'admin' && activeTab === 'certificates' && (
              <CertificatesView
                registrations={registrations}
              />
            )}
          </div>
        </main>
      </div>

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
