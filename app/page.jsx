import DropdownList from "./_components/DropdownList";


export default function Home() {
  const listData = [
    {title: 'Item one', content: 'Content for item one'},
    {title: 'Item two', content: 'Content for item two'},
    {title: 'Item three', content: 'Content for item three'},
    {title: 'Item four', content: 'Content for item four'},
    {title: 'Item five', content: 'Content for item five'},
    {title: 'Item six', content: 'Content for item six'},
    {title: 'Item seven', content: 'Content for item seven'},
    {title: 'Item eight', content: 'Content for item eight'},
    {title: 'Item nine', content: 'Content for item nine'},
    {title: 'Item ten', content: 'Content for item ten'},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Next.js Dropdown List Component</h1>
      </header>
      <main className="max-w-2xl mx-auto py-10">
        <DropdownList listData={listData} />
      </main>
    </div>
  );
}
