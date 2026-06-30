"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Minute {
  id: number;
  title: string;
  meeting_date: string;
  content: string;
  created_by_name: string;
}

export default function ViewMinutePage() {
  const params = useParams();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [minute, setMinute] = useState<Minute | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    meeting_date: "",
    content: "",
  });

  useEffect(() => {
    fetchMinute();
  }, []);

  const fetchMinute = async () => {
    try {
      const response = await fetch(`/api/minutes/${params.id}`);
      const data = await response.json();
      setMinute(data);
      setFormData({
        title: data.title,
        meeting_date: data.meeting_date.split('T')[0],
        content: data.content,
      });
    } catch (error) {
      console.error("Error fetching minute:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/minutes/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsEditing(false);
        fetchMinute();
      } else {
        alert("Error updating meeting minutes");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error updating meeting minutes");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!minute) {
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
          <Link href="/dashboard/minutes">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Meeting Minutes
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {isEditing ? "Editing minutes" : "Viewing minutes"}
            </p>
          </div>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Meeting Minutes" : minute.title}</CardTitle>
          <CardDescription>
            {!isEditing && (
              <span>
                Meeting Date: {new Date(minute.meeting_date).toLocaleDateString()} •
                Recorded by: {minute.created_by_name}
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Meeting Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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

              <div className="space-y-2">
                <Label htmlFor="content">Meeting Minutes *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={15}
                  required
                  className="font-mono text-sm"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      title: minute.title,
                      meeting_date: minute.meeting_date.split('T')[0],
                      content: minute.content,
                    });
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="prose dark:prose-invert max-w-none">
              <div className="whitespace-pre-wrap font-mono text-sm bg-muted p-6 rounded-lg">
                {minute.content}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
