import { Award, Download } from 'lucide-react';
import { Registration } from '../types';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface CertificatesViewProps {
  registrations: Registration[];
}

export function CertificatesView({ registrations }: CertificatesViewProps) {
  const certificates = registrations.slice(0, Math.floor(registrations.length * 0.3));

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Certificates</h2>

      {certificates.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Award size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No certificates earned yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-4 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg">
                  <Award className="text-yellow-600 mx-auto" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Certificate of Completion
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Awarded to <span className="font-medium text-foreground">{cert.studentName}</span>
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Issued: {new Date(cert.registeredAt).toLocaleDateString()}
                </p>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
