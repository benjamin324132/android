import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Button asChild>
        <Link href="/notes">Notes</Link>
      </Button>
      <Button asChild>
        <Link href="/carousel">Carousel</Link>
      </Button>
      <Button asChild>
        <Link href="/movies">Movies</Link>
      </Button>
      <Button asChild>
        <Link href="/users">Users</Link>
      </Button>
      <Button asChild>
        <Link href="/films">Films</Link>
      </Button>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/products">Products</Link>
      </Button>
      <Button asChild>
        <Link href="/orders">Orders</Link>
      </Button>
      <Button asChild>
        <Link href="/product">Product</Link>
      </Button>
      <Button asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
      <Button asChild>
        <Link href="/transactions">Transactions</Link>
      </Button>
    </div>
  );
}
