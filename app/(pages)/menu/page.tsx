import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">The Gourmet Bistro</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">Discover our delectable menu offerings</p>
      </header>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <img
            alt="Dish 1"
            className="w-full h-48 object-cover"
            height={250}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/250",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Grilled Salmon</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Fresh Atlantic salmon grilled to perfection, served with a side of roasted vegetables and lemon butter
              sauce.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">$24.99</span>
              <Button size="sm">Order</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <img
            alt="Dish 2"
            className="w-full h-48 object-cover"
            height={250}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/250",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Beef Bourguignon</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Tender beef simmered in a rich red wine sauce, served with creamy mashed potatoes and roasted carrots.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">$28.99</span>
              <Button size="sm">Order</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <img
            alt="Dish 3"
            className="w-full h-48 object-cover"
            height={250}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/250",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Vegetable Lasagna</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Layers of fresh vegetables, creamy béchamel, and melted cheese, baked to perfection.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">$18.99</span>
              <Button size="sm">Order</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <img
            alt="Dish 4"
            className="w-full h-48 object-cover"
            height={250}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/250",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Chicken Parmesan</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Breaded and fried chicken breast topped with marinara sauce and melted mozzarella, served with a side of
              spaghetti.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">$22.99</span>
              <Button size="sm">Order</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <img
            alt="Dish 5"
            className="w-full h-48 object-cover"
            height={250}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/250",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Fettuccine Alfredo</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Tender fettuccine pasta tossed in a rich and creamy Parmesan sauce.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">$16.99</span>
              <Button size="sm">Order</Button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <img
            alt="Dish 6"
            className="w-full h-48 object-cover"
            height={250}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/250",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Mushroom Risotto</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Creamy arborio rice simmered with sautéed mushrooms, white wine, and Parmesan cheese.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">$20.99</span>
              <Button size="sm">Order</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}