import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where,
  serverTimestamp,
  increment,
  runTransaction
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { Event } from '../types';

const EVENTS_COLLECTION = 'events';
const REGISTRATIONS_COLLECTION = 'registrations';

export const getEvents = async () => {
  const querySnapshot = await getDocs(collection(db, EVENTS_COLLECTION));
  return querySnapshot.docs.map(doc => ({ 
    id: doc.id, 
    ...doc.data() 
  }));
};

export const getRegistrations = async () => {
  const querySnapshot = await getDocs(collection(db, REGISTRATIONS_COLLECTION));
  return querySnapshot.docs.map(doc => ({ 
    id: doc.id, 
    ...doc.data() 
  }));
};

export const addEvent = async (eventData: Omit<Event, 'id'>) => {
  const docRef = await addDoc(collection(db, EVENTS_COLLECTION), {
    ...eventData,
    registered: 0,
    createdAt: serverTimestamp()
  });
  return docRef.id;
};

export const deleteEvent = async (id: string) => {
  await deleteDoc(doc(db, EVENTS_COLLECTION, id));
};

export const registerUserForEvent = async (eventId: string, registrationData: any) => {
  const eventRef = doc(db, EVENTS_COLLECTION, eventId);
  const registrationRef = collection(db, REGISTRATIONS_COLLECTION);

  try {
    return await runTransaction(db, async (transaction) => {
      const eventDoc = await transaction.get(eventRef);
      if (!eventDoc.exists()) {
        throw new Error("Event does not exist!");
      }

      const data = eventDoc.data();
      const currentRegistered = data.registered || 0;
      const capacity = data.capacity || 0;

      if (currentRegistered >= capacity) {
        throw new Error("Event is full!");
      }

      // Add registration
      const newRegRef = doc(registrationRef);
      transaction.set(newRegRef, {
        ...registrationData,
        eventId,
        registeredAt: serverTimestamp()
      });

      // Update event count
      transaction.update(eventRef, {
        registered: increment(1)
      });

      return newRegRef.id;
    });
  } catch (e) {
    console.error("Registration failed: ", e);
    throw e;
  }
};