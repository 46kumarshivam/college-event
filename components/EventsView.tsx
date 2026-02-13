import { Calendar, MapPin, Users, Zap } from 'lucide-react';
import { Event } from '../types';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { generateAvatarUrl } from '../utils/avatarGenerator';

interface EventsViewProps {
  events: Event[];
  onViewDetails: (event: Event) => void;
}

export function EventsView({ events, onViewDetails }: EventsViewProps) {
  const capacityPercentage = (event: Event) => (event.registered / event.capacity) * 100;
  const getCapacityColor = (percentage: number) => {
    if (percentage > 80) return 'bg-error';
    if (percentage > 50) return 'bg-warning';
    return 'bg-success';
  };

  return (
    <div className="space-y-3xl">
      <div className="section-header">
        <div>
          <h1 className="text-h1 text-neutral-900">Browse Events</h1>
          <p className="section-subtitle">Discover and register for upcoming college events</p>
        </div>
      </div>

      <div className="grid-responsive">
        {events.map((event) => {
          const capacity = capacityPercentage(event);
          const isAlmostFull = capacity > 80;
          
          return (
            <Card key={event.id} className="event-card overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Gradient Header */}
              <div className="h-32 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.5) 0%, transparent 50%)'
                }} />
                
                {/* Avatar in Top-Left */}
                {event.organizer && (
                  <div className="absolute top-lg left-lg z-10">
                    <img 
                      src={generateAvatarUrl(event.organizer, 56)}
                      alt={event.organizer}
                      className="w-14 h-14 rounded-full border-4 border-white shadow-lg"
                      title={event.organizer}
                    />
                  </div>
                )}
                
                {isAlmostFull && (
                  <div className="absolute top-lg right-lg badge-warning">
                    <Zap size={12} className="mr-1" /> Almost Full
                  </div>
                )}
              </div>

              <CardContent className="pt-lg space-y-lg">
                {/* Event Title */}
                <div>
                  <div className="event-card-date mb-2">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <h3 className="text-h4 font-bold text-neutral-900 line-clamp-2">{event.title}</h3>
                  <p className="text-body-sm text-neutral-600 line-clamp-2 mt-2">{event.description}</p>
                </div>

                {/* Event Details */}
                <div className="space-y-md py-lg border-y border-neutral-200">
                  <div className="flex items-center gap-md text-body-sm text-neutral-700">
                    <Calendar size={18} className="text-primary-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{event.time}</p>
                      <p className="text-neutral-500">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-md text-body-sm text-neutral-700">
                    <MapPin size={18} className="text-error flex-shrink-0" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>

                {/* Capacity Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-neutral-600" />
                      <span className="text-label text-neutral-700 font-medium">
                        {event.registered} / {event.capacity} Registered
                      </span>
                    </div>
                    <span className="text-caption font-semibold text-neutral-600">
                      {Math.round(capacity)}%
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full ${getCapacityColor(capacity)} transition-all duration-300 rounded-full`}
                      style={{ width: `${capacity}%` }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  onClick={() => onViewDetails(event)}
                  className="w-full btn-primary"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {events.length === 0 && (
        <div className="text-center py-3xl">
          <div className="text-6xl mb-lg">📭</div>
          <h3 className="text-h3 text-neutral-900 mb-md">No Events Available</h3>
          <p className="text-body-lg text-neutral-600">Check back later for upcoming events</p>
        </div>
      )}
    </div>
  );
}
