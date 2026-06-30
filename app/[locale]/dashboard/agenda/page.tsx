"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Calendar, Trash2, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AgendaItem {
  id: number;
  title: string;
  description: string;
  proposed_by_name: string;
  proposed_by_name_db: string;
  status: string;
  priority: number;
  created_at: string;
}

interface Agenda {
  id: number;
  title: string;
  meeting_date: string;
  status: string;
  sent_at: string;
  created_by_name: string;
}

export default function AgendaPage() {
  const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([]);
  const [agendas, setAgendas] = useState<Agenda[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: 0,
  });

  useEffect(() => {
    fetchAgendaItems();
    fetchAgendas();
  }, []);

  const fetchAgendaItems = async () => {
    try {
      const response = await fetch("/api/agenda-items");
      const data = await response.json();
      setAgendaItems(data);
    } catch (error) {
      console.error("Error fetching agenda items:", error);
    }
  };

  const fetchAgendas = async () => {
    try {
      const response = await fetch("/api/agendas");
      const data = await response.json();
      setAgendas(data);
    } catch (error) {
      console.error("Error fetching agendas:", error);
    }
  };

  const handleSubmitItem = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/agenda-items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsDialogOpen(false);
        setFormData({ title: "", description: "", priority: 0 });
        fetchAgendaItems();
      } else {
        alert("Error creating agenda item");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating agenda item");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteItem = async (id: number) => {
    if (!confirm("Are you sure you want to delete this agenda item?")) {
      return;
    }

    try {
      await fetch(`/api/agenda-items/${id}`, { method: "DELETE" });
      fetchAgendaItems();
    } catch (error) {
      console.error("Error deleting agenda item:", error);
    }
  };

  const proposedItems = agendaItems.filter(item => item.status === 'proposed');
  const includedItems = agendaItems.filter(item => item.status === 'included');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Agenda Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Propose agenda items and create meeting agendas
          </p>
        </div>
        <div className="flex space-x-2">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Propose Item
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Propose Agenda Item</DialogTitle>
                <DialogDescription>
                  Submit an item to be included in the next meeting agenda
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmitItem} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Item Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Budget Review Q1"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Provide details about this agenda item..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Priority (0-10)</Label>
                  <Input
                    id="priority"
                    type="number"
                    min="0"
                    max="10"
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: parseInt(e.target.value) })}
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Item"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          <Link href="/dashboard/agenda/new">
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Create Agenda
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="proposed" className="space-y-4">
        <TabsList>
          <TabsTrigger value="proposed">
            Proposed Items ({proposedItems.length})
          </TabsTrigger>
          <TabsTrigger value="agendas">
            Agendas ({agendas.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="proposed" className="space-y-4">
          {proposedItems.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No proposed items</h3>
                <p className="text-muted-foreground mb-4">
                  Start by proposing an agenda item for the next meeting
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {proposedItems.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          {item.priority > 5 && (
                            <Badge variant="destructive">High Priority</Badge>
                          )}
                        </div>
                        <CardDescription>
                          Proposed by: {item.proposed_by_name || item.proposed_by_name_db} •{" "}
                          {new Date(item.created_at).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </CardHeader>
                  {item.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="agendas" className="space-y-4">
          {agendas.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No agendas created</h3>
                <p className="text-muted-foreground mb-4">
                  Create your first meeting agenda
                </p>
                <Link href="/dashboard/agenda/new">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Agenda
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {agendas.map((agenda) => (
                <Card key={agenda.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-lg">{agenda.title}</CardTitle>
                          {agenda.sent_at && (
                            <Badge className="bg-green-100 text-green-800">Sent</Badge>
                          )}
                        </div>
                        <CardDescription>
                          Meeting: {new Date(agenda.meeting_date).toLocaleDateString()} •
                          Created by: {agenda.created_by_name}
                          {agenda.sent_at && ` • Sent: ${new Date(agenda.sent_at).toLocaleDateString()}`}
                        </CardDescription>
                      </div>
                      <Link href={`/dashboard/agenda/${agenda.id}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
