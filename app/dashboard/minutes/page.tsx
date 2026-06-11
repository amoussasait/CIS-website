"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText, Calendar, User, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Minute {
  id: number;
  title: string;
  meeting_date: string;
  content: string;
  created_by_name: string;
  created_at: string;
}

export default function MinutesPage() {
  const [minutes, setMinutes] = useState<Minute[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMinutes();
  }, []);

  const fetchMinutes = async () => {
    try {
      const response = await fetch("/api/minutes");
      const data = await response.json();
      setMinutes(data);
    } catch (error) {
      console.error("Error fetching minutes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete these meeting minutes?")) {
      return;
    }

    try {
      await fetch(`/api/minutes/${id}`, { method: "DELETE" });
      fetchMinutes();
    } catch (error) {
      console.error("Error deleting minute:", error);
    }
  };

  const filteredMinutes = minutes.filter((minute) =>
    minute.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    minute.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Meeting Minutes
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            View and manage meeting records
          </p>
        </div>
        <Link href="/dashboard/minutes/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Minutes
          </Button>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search meeting minutes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      ) : filteredMinutes.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No meeting minutes found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm ? "Try adjusting your search" : "Get started by adding your first meeting minutes"}
            </p>
            {!searchTerm && (
              <Link href="/dashboard/minutes/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Minutes
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredMinutes.map((minute) => (
            <Card key={minute.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{minute.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-4 mt-2">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(minute.meeting_date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {minute.created_by_name}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={`/dashboard/minutes/${minute.id}`}>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(minute.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {minute.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
