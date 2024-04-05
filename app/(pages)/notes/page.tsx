"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon, Trash } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  content: z.string().min(2).max(200),
});

interface Note {
  id: string;
  title: string;
  content: string;
}

const Page = () => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setNotes((notes) => [
      { id: (Math.random() * 100000).toString(), ...values },
      ...notes,
    ]);
    form.reset();
    setOpen(false);
    toast(values.title, {
      closeButton: true,
      description: "New note added succesfully",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  }

  return (
    <div className="flex flex-col p-4 relative">
      <div className="w-full flex items-center justify-between">
        <h3 className=" text-2xl font-semibold">Notify</h3>
        <Button onClick={() => setOpen(true)} variant="outline" size="icon">
          <PlusIcon className="w-4 h-4" />
        </Button>
      </div>
      <Drawer open={open} dismissible={false}>
        <DrawerContent>
          <ScrollArea>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Add note</DrawerTitle>
                <DrawerDescription>
                  Set your daily activity goal.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. My note 1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Ej. My note content"
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                    <div className="flex gap-4">
                      <Button type="submit">Submit</Button>
                      <DrawerClose asChild>
                        <Button
                          variant="outline"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </Button>
                      </DrawerClose>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
      {notes.length ? (
        <div className="flex flex-col gap-4 pt-8">
          {notes.map((note) => {
            return (
              <Card key={note.id} className="relative">
                <div
                  className="absolute right-3 top-3"
                  onClick={() => setOpenDialog(true)}
                >
                  <Trash className="w-4 h-4" />
                </div>
                <CardHeader>
                  <CardTitle>{note.title}</CardTitle>
                  <CardDescription>{note.content}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="pt-32 grid place-items-center gap-3">
          <h3 className="text-center text-lg font-bold">Add first note</h3>
          <Button onClick={() => setOpen(true)} variant="outline" size="icon">
            <PlusIcon className="w-4 h-4" />
          </Button>
        </div>
      )}
      <AlertDialog open={openDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpenDialog(false)}>Continue</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Page;
