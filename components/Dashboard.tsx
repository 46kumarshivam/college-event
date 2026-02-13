import { Calendar, Users, Award, ArrowRight } from 'lucide-react';
import { Event } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { generateAvatarUrl } from '../utils/avatarGenerator';

interface DashboardProps {
  events: Event[];
  registrations: any[];
  userRole: 'student' | 'admin';
}

export function Dashboard({ events, registrations, userRole }: DashboardProps) {
  const StatCard = ({ icon: Icon, title, value, color }: any) => (
    <div className="card bg-gradient-to-br from-white to-neutral-50">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-body-sm text-neutral-600 mb-2">{title}</p>
          <p className="text-4xl font-bold text-neutral-900">{value}</p>
        </div>
        <div className={`p-lg rounded-lg ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-3xl">
      <div className="section-header">
        <div>
          <h1 className="text-h1 text-neutral-900">Welcome Back!</h1>
          <p className="section-subtitle">
            {userRole === 'admin' 
              ? 'Manage events, participants, and certificates' 
              : 'Explore events and register for your favorites'}
          </p>
        </div>
      </div>

      <div className="grid-stats">
        <StatCard 
          icon={Calendar}
          title="Total Events"
          value={events.length}
          color="bg-primary-500"
        />
        <StatCard 
          icon={Users}
          title={userRole === 'admin' ? 'Total Registrations' : 'Your Registrations'}
          value={registrations.length}
          color="bg-success"
        />
        <StatCard 
          icon={Award}
          title="Certificates Earned"
          value={Math.floor(registrations.length * 0.3)}
          color="bg-warning"
        />
        <StatCard 
          icon={Calendar}
          title="Events This Month"
          value={events.filter(e => {
            const eventDate = new Date(e.date);
            const now = new Date();
            return eventDate.getMonth() === now.getMonth();
          }).length}
          color="bg-error"
        />
      </div>

      <Card className="bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <CardHeader>
          <CardTitle className="text-h3 text-neutral-900">Upcoming Events</CardTitle>
          <p className="text-body-sm text-neutral-600 mt-2">Stay updated with the latest events</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-md">
            {events.slice(0, 5).map((event) => (
              <div key={event.id} className="flex items-center justify-between p-lg bg-white rounded-lg border border-primary-200 hover:shadow-md transition-all group relative">
                {/* Avatar in top-left corner */}
                {event.organizer && (
                  <div className="absolute -top-lg -left-lg z-10">
                    <img 
                      src={generateAvatarUrl(event.organizer, 56)}
                      alt={event.organizer}
                      className="w-14 h-14 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform"
                      title={event.organizer}
                    />
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-center gap-md mb-md">
                    <div className="event-card-date">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <h4 className="text-h4 text-neutral-900 font-semibold">{event.title}</h4>
                  </div>
                  <div className="flex items-center gap-lg text-body-sm text-neutral-500">
                    <span className="flex items-center gap-1">📍 {event.location}</span>
                    <span className="flex items-center gap-1">👥 {event.registered}/{event.capacity}</span>
                  </div>
                </div>
                <Button 
                  variant="default"
                  className="btn-primary whitespace-nowrap"
                >
                  View Details <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
