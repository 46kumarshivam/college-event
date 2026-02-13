import { Registration } from '../types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ParticipantsViewProps {
  registrations: Registration[];
}

export function ParticipantsView({ registrations }: ParticipantsViewProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Participants</h2>

      <Card>
        <CardHeader>
          <CardTitle>Registrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Registered At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {registrations.map((reg) => (
                  <TableRow key={reg.id}>
                    <TableCell className="font-medium">{reg.studentName}</TableCell>
                    <TableCell>{reg.studentId}</TableCell>
                    <TableCell>{reg.email}</TableCell>
                    <TableCell>{reg.department}</TableCell>
                    <TableCell>{new Date(reg.registeredAt).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
