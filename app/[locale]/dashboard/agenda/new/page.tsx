"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface AgendaItem {
  id: number;
  title: string;
  description: string;
  proposed_by_name: string;
  proposed_by_name_db: string;
  status: string;
}

export default function NewAgendaPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    meeting_date: "",
    content: "",
  });

  useEffect(() => {
    fetchAgendaItems();
  }, []);

  const fetchAgendaItems = async () => {
    try {
      const response = await fetch("/api/agenda-items?status=proposed");
      const data = await response.json();
      setAgendaItems(data);
    } catch (error) {
      console.error("Error fetching agenda items:", error);
    }
  };

  const handleToggleItem = (itemId: number) => {
    setSelectedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/agendas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          agenda_item_ids: selectedItems,
        }),
      });

      if (response.ok) {
        router.push("/dashboard/agenda");
        router.refresh();
      } else {
        alert("Error creating agenda");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating agenda");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/dashboard/agenda">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create Meeting Agenda
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Build an agenda from proposed items
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Agenda Details</CardTitle>
            <CardDescription>
              Basic information about the meeting
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Agenda Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Monthly Committee Meeting - January 2026"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="meeting_date">Meeting Date *</Label>
              <Input
                id="meeting_date"
                type="date"
                value={formData.meeting_date}
                onChange={(e) => setFormData({ ...formData, meeting_date: e.target.value })}
                required
              />
            </div>
          </CardContent>
        </Card>

        {agendaItems.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Select Agenda Items</CardTitle>
              <CardDescription>
                Choose proposed items to include in this agenda
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agendaItems.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <Checkbox
                      id={`item-${item.id}`}
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => handleToggleItem(item.id)}
                    />
                    <div className="flex-1">
                      <label
                        htmlFor={`item-${item.id}`}
                        className="font-medium cursor-pointer"
                      >
                        {item.title}
                      </label>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        Proposed by: {item.proposed_by_name || item.proposed_by_name_db}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Agenda Content</CardTitle>
            <CardDescription>
              Write or paste the full agenda content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="content">Agenda Details *</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Enter the full agenda content here..."
                rows={15}
                required
                className="font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground">
                Include all agenda items, time allocations, and any special notes
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-4">
          <Link href="/dashboard/agenda">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Agenda"}
          </Button>
        </div>
      </form>
    </div>
  );
}
