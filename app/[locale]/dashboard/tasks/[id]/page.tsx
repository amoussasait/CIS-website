"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, Send } from "lucide-react";
import Link from "next/link";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  due_date: string;
  assigned_to: number;
  assigned_to_name: string;
  created_by_name: string;
  created_at: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  user_name: string;
  comment: string;
  created_at: string;
}

interface User {
  id: number;
  email: string;
  name: string;
}

export default function ViewTaskPage() {
  const params = useParams();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [task, setTask] = useState<Task | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [newComment, setNewComment] = useState("");
  const [emailHistory, setEmailHistory] = useState<any[]>([]);
  const [showEmailHistory, setShowEmailHistory] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assigned_to: "",
    status: "",
    priority: "",
    due_date: "",
  });

  useEffect(() => {
    fetchTask();
    fetchUsers();
    fetchEmailHistory();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await fetch(`/api/tasks/${params.id}`);
      const data = await response.json();
      setTask(data);
      setFormData({
        title: data.title,
        description: data.description || "",
        assigned_to: data.assigned_to?.toString() || "",
        status: data.status,
        priority: data.priority,
        due_date: data.due_date ? data.due_date.split('T')[0] : "",
      });
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchEmailHistory = async () => {
    try {
      const response = await fetch(`/api/tasks/${params.id}/emails`);
      const data = await response.json();
      setEmailHistory(data);
    } catch (error) {
      console.error("Error fetching email history:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const selectedUser = users.find((u) => u.id.toString() === formData.assigned_to);

      const payload = {
        ...formData,
        assigned_to: formData.assigned_to ? parseInt(formData.assigned_to) : null,
        assigned_to_email: selectedUser?.email,
        assigned_to_name: selectedUser?.name,
      };

      const response = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsEditing(false);
        fetchTask();
      } else {
        alert("Error updating task");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error updating task");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      const response = await fetch(`/api/tasks/${params.id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: newComment }),
      });

      if (response.ok) {
        setNewComment("");
        fetchTask();
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!task) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    in_progress: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    blocked: "bg-red-100 text-red-800",
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/tasks">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Task Details
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {isEditing ? "Editing task" : "Viewing task"}
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
          <CardTitle>{isEditing ? "Edit Task" : task.title}</CardTitle>
          {!isEditing && (
            <CardDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge className={statusColors[task.status]}>
                  {task.status.replace('_', ' ')}
                </Badge>
                <Badge>{task.priority} priority</Badge>
              </div>
              <div className="mt-2 text-sm">
                Created by: {task.created_by_name} •
                Assigned to: {task.assigned_to_name || 'Unassigned'} •
                {task.due_date && ` Due: ${new Date(task.due_date).toLocaleDateString()}`}
              </div>
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Task Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={5}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="assigned_to">Assign To</Label>
                  <Select
                    value={formData.assigned_to}
                    onValueChange={(value) => setFormData({ ...formData, assigned_to: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a member" />
                    </SelectTrigger>
                    <SelectContent>
                      {users.map((user) => (
                        <SelectItem key={user.id} value={user.id.toString()}>
                          {user.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="due_date">Due Date</Label>
                  <Input
                    id="due_date"
                    type="date"
                    value={formData.due_date}
                    onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) => setFormData({ ...formData, priority: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData({ ...formData, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="blocked">Blocked</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      title: task.title,
                      description: task.description || "",
                      assigned_to: task.assigned_to?.toString() || "",
                      status: task.status,
                      priority: task.priority,
                      due_date: task.due_date ? task.due_date.split('T')[0] : "",
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
            <div className="space-y-4">
              {task.description && (
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{task.description}</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Comments Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            Comments
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {task.comments && task.comments.length > 0 ? (
            <div className="space-y-4 mb-4">
              {task.comments.map((comment) => (
                <div key={comment.id} className="border-l-2 pl-4 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">{comment.user_name}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(comment.created_at).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{comment.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground mb-4">No comments yet</p>
          )}

          <div className="flex space-x-2">
            <Input
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
            />
            <Button onClick={handleAddComment} size="sm">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Email History Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              📧 Email History
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowEmailHistory(!showEmailHistory)}
            >
              {showEmailHistory ? 'Hide' : 'Show'} ({emailHistory.length})
            </Button>
          </div>
        </CardHeader>
        {showEmailHistory && (
          <CardContent>
            {emailHistory.length > 0 ? (
              <div className="space-y-3">
                {emailHistory.map((email) => (
                  <div key={email.id} className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">
                        {email.email_type === 'task_assigned' ? '✉️ Assignment' :
                         email.email_type === 'task_reminder' ? '🔔 Reminder' :
                         email.email_type === 'task_overdue' ? '⚠️ Overdue' :
                         email.email_type === 'task_completed' ? '✅ Completed' : '📧 Email'}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        email.status === 'sent' ? 'bg-green-100 text-green-800' :
                        email.status === 'failed' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {email.status}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><strong>To:</strong> {email.to_name} ({email.to_email})</p>
                      <p><strong>Subject:</strong> {email.subject}</p>
                      <p className="text-xs">
                        {email.sent_at
                          ? `Sent: ${new Date(email.sent_at).toLocaleString()}`
                          : `Queued: ${new Date(email.created_at).toLocaleString()}`
                        }
                      </p>
                      {email.error_message && (
                        <p className="text-xs text-red-600">Error: {email.error_message}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No emails sent for this task yet</p>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
}
