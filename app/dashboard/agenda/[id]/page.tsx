"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Calendar, User } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Agenda {
  id: number;
  title: string;
  meeting_date: string;
  content: string;
  status: string;
  sent_at: string;
  created_by_name: string;
  items: AgendaItem[];
}

interface AgendaItem {
  id: number;
  title: string;
  description: string;
  proposed_by_name: string;
  order_index: number;
}

export default function ViewAgendaPage() {
  const params = useParams();
  const router = useRouter();
  const [agenda, setAgenda] = useState<Agenda | null>(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    fetchAgenda();
  }, []);

  const fetchAgenda = async () => {
    try {
      const response = await fetch(`/api/agendas/${params.id}`);
      const data = await response.json();
      setAgenda(data);
    } catch (error) {
      console.error("Error fetching agenda:", error);
    }
  };

  const handleSend = async () => {
    if (!confirm("Are you sure you want to send this agenda to all committee members?")) {
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch(`/api/agendas/${params.id}`, {
        method: "POST",
      });

      if (response.ok) {
        alert("Agenda sent to all committee members!");
        fetchAgenda();
      } else {
        alert("Error sending agenda");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending agenda");
    } finally {
      setIsSending(false);
    }
  };

  if (!agenda) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/agenda">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {agenda.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Meeting Agenda
            </p>
          </div>
        </div>
        {!agenda.sent_at && (
          <Button onClick={handleSend} disabled={isSending}>
            <Send className="h-4 w-4 mr-2" />
            {isSending ? "Sending..." : "Send to All Members"}
          </Button>
        )}
      </div>

      {agenda.sent_at && (
        <Alert>
          <Send className="h-4 w-4" />
          <AlertDescription>
            This agenda was sent to all committee members on{" "}
            {new Date(agenda.sent_at).toLocaleDateString()} at{" "}
            {new Date(agenda.sent_at).toLocaleTimeString()}
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>{agenda.title}</CardTitle>
              <CardDescription className="flex items-center space-x-4 mt-2">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(agenda.meeting_date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {agenda.created_by_name}
                </span>
              </CardDescription>
            </div>
            {agenda.sent_at && (
              <Badge className="bg-green-100 text-green-800">Sent</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {agenda.items && agenda.items.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Included Agenda Items:</h3>
                <div className="space-y-2">
                  {agenda.items.map((item, index) => (
                    <div key={item.id} className="border-l-2 pl-4 py-2">
                      <p className="font-medium">
                        {index + 1}. {item.title}
                      </p>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        Proposed by: {item.proposed_by_name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="font-semibold mb-3">Full Agenda:</h3>
              <div className="whitespace-pre-wrap font-mono text-sm bg-muted p-6 rounded-lg">
                {agenda.content}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
