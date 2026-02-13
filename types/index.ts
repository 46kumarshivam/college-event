export type UserRole = 'student' | 'admin';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  organizer?: string;
}

export interface Registration {
  id: string;
  eventId: string;
  studentName: string;
  studentId: string;
  email: string;
  phone: string;
  department: string;
  year: string;
  registeredAt: string;
}
