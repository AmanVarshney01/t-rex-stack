import { Button } from "@/components/ui/button";
import { trpc } from "@/utils/trpc";

export default function DashboardIndex() {
  const allBooks = trpc.books.getAll.useQuery();
  console.log(allBooks.data);
  const createBook = trpc.books.create.useMutation();
  const deleteBook = trpc.books.delete.useMutation();

  return (
    <div>
      <Button
        onClick={() => {
          createBook.mutate({
            title: "Hello",
            author: "World",
            description: "This is a book",
          });
        }}
      >
        Create Book
      </Button>
      <Button
        onClick={() => {
          deleteBook.mutate("6788fc609d50d4278c955bc4");
        }}
      >
        Delete
      </Button>
    </div>
  );
}
