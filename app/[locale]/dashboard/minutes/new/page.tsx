"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewMinutePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    meeting_date: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/minutes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/dashboard/minutes");
        router.refresh();
      } else {
        alert("Error creating meeting minutes");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating meeting minutes");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/dashboard/minutes">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Add Meeting Minutes
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Record minutes from a committee meeting
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Meeting Information</CardTitle>
          <CardDescription>
            Enter the details of the meeting and its minutes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Meeting Title *</Label>
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

            <div className="space-y-2">
              <Label htmlFor="content">Meeting Minutes *</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Enter the meeting minutes here..."
                rows={15}
                required
                className="font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground">
                You can copy and paste from your Word document
              </p>
            </div>

            <div className="flex justify-end space-x-4">
              <Link href="/dashboard/minutes">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Minutes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
