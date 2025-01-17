import { CreateBookDialog } from "@/components/create-book-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { trpc } from "@/utils/trpc";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function DashboardIndex() {
  const { data: books, isLoading, refetch } = trpc.books.getAll.useQuery();

  const deleteBook = trpc.books.delete.useMutation({
    onSuccess: () => {
      refetch();
      toast.success("Book deleted successfully!");
    },
    onError: (error) => {
      toast.error("Failed to delete book: " + error.message);
    },
  });

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Books</h1>
        <CreateBookDialog />
      </div>

      {isLoading ? (
        <div className="flex flex-row gap-6">
          <Skeleton className="h-36 w-full" />
          <Skeleton className="h-36 w-full" />
          <Skeleton className="h-36 w-full" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books?.map((book) => (
            <Card key={book.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{book.title}</CardTitle>
                    <CardDescription>By {book.author}</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => deleteBook.mutate(book.id)}
                    disabled={deleteBook.isPending}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {book.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
