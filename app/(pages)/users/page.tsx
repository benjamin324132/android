import prismaDb from "@/lib/db";
import { Trash } from "lucide-react";
import DrawerForm from "./_components/draweForm";
import { DataTable } from "@/components/DataTable";
import { UsersColumns } from "./_components/tableColumn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users"
}

const Page = async () => {
  const users = await prismaDb.user.findMany();
  return (
    <div className="flex flex-col gap-y-5 p-4 relative max-w-[800px] mx-auto">
      <DrawerForm />
      <DataTable searchKey="name" data={users} columns={UsersColumns} />
    </div>
  );
};

export default Page;
