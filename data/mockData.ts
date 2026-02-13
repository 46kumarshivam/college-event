import { Event, Registration } from '../types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Symposium 2026',
    description: 'Annual technical symposium featuring workshops, coding competitions, and tech talks from industry experts.',
    date: '2026-03-15',
    time: '09:00 AM',
    location: 'Main Auditorium',
    capacity: 500,
    registered: 342,
    organizer: 'Dr. Amit Kumar'
  },
  {
    id: '2',
    title: 'Spring Cultural Fest',
    description: 'Celebrate diversity with music, dance, drama performances, and art exhibitions from talented students.',
    date: '2026-03-22',
    time: '05:00 PM',
    location: 'College Grounds',
    capacity: 1000,
    registered: 756,
    organizer: 'Ms. Neha Singh'
  },
  {
    id: '3',
    title: 'AI & Machine Learning Workshop',
    description: 'Hands-on workshop covering fundamentals of AI, neural networks, and practical ML applications.',
    date: '2026-02-28',
    time: '10:00 AM',
    location: 'Computer Lab 3',
    capacity: 60,
    registered: 60,
    organizer: 'Prof. Rajesh Verma'
  },
  {
    id: '4',
    title: 'Inter-College Sports Meet',
    description: 'Annual sports competition featuring cricket, football, basketball, athletics and more.',
    date: '2026-04-05',
    time: '07:00 AM',
    location: 'Sports Complex',
    capacity: 300,
    registered: 178,
    organizer: 'Coach Vikram Patel'
  },
  {
    id: '5',
    title: 'Career Development Seminar',
    description: 'Learn about career paths, interview skills, and industry insights from HR professionals.',
    date: '2026-03-08',
    time: '02:00 PM',
    location: 'Seminar Hall B',
    capacity: 200,
    registered: 145,
    organizer: 'Dr. Priya Sharma'
  },
  {
    id: '6',
    title: 'Hackathon 2026',
    description: '24-hour coding marathon to build innovative solutions for real-world problems.',
    date: '2026-03-20',
    time: '08:00 AM',
    location: 'Innovation Lab',
    capacity: 120,
    registered: 98,
    organizer: 'Mr. Arun Nair'
  }
];

export const mockRegistrations: Registration[] = [
  {
    id: 'r1',
    eventId: '1',
    studentName: 'Rahul Sharma',
    studentId: 'CS2022001',
    email: 'rahul.sharma@college.edu',
    phone: '+91-9876543210',
    department: 'Computer Science',
    year: '3rd Year',
    registeredAt: '2026-02-01T10:30:00Z'
  },
  {
    id: 'r2',
    eventId: '1',
    studentName: 'Priya Patel',
    studentId: 'IT2022015',
    email: 'priya.patel@college.edu',
    phone: '+91-9876543211',
    department: 'Information Technology',
    year: '3rd Year',
    registeredAt: '2026-02-01T11:15:00Z'
  }
];

