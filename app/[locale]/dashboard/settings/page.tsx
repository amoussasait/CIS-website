"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lock, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Validate passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      setIsSubmitting(false);
      return;
    }

    // Validate password length
    if (formData.newPassword.length < 8) {
      setMessage({ type: 'error', text: 'New password must be at least 8 characters long' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/user/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Password changed successfully!' });
        setFormData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to change password' });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your account settings
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="h-5 w-5 mr-2" />
            Change Password
          </CardTitle>
          <CardDescription>
            Update your password to keep your account secure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password *</Label>
              <Input
                id="currentPassword"
                type="password"
                value={formData.currentPassword}
                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                required
                placeholder="Enter your current password"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password *</Label>
              <Input
                id="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                required
                placeholder="Enter your new password (min. 8 characters)"
                minLength={8}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password *</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                placeholder="Re-enter your new password"
                minLength={8}
              />
            </div>

            {message && (
              <div className={`flex items-center space-x-2 p-4 rounded-md ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100'
                  : 'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-100'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
                <span>{message.text}</span>
              </div>
            )}

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setFormData({
                  currentPassword: "",
                  newPassword: "",
                  confirmPassword: "",
                })}
              >
                Clear
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Changing..." : "Change Password"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Minimum 8 characters long</li>
            <li>Use a strong, unique password</li>
            <li>Don't reuse passwords from other accounts</li>
            <li>Consider using a password manager</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
