import Form from "next/form";

export default function Home() {
  return (
    <Form action="/chat">
      <div className="grid grid-rows-[100px_auto_100px] items-center justify-items-center min-h-screen p-2 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div></div>

        <div className="items-center justify-items-center w-full" style={{ flexDirection: "column", display: "flex" }}>
          <input type="text" name="user" required maxLength={100} minLength={1} className="w-full max-w-md px-4 py-3 
        border border-gray-300 rounded-lg 
        shadow-sm focus:shadow-md 
        focus:outline-none focus:ring-4 focus:ring-blue-300 
        text-gray-700 placeholder-gray-400 
        transition-all duration-300 ease-in-out 
        hover:border-gray-400" />

          <button type="submit" className="mt-2 px-8 py-3 
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
          text-white font-semibold text-lg 
          rounded-lg shadow-lg 
          hover:shadow-xl hover:scale-105 
          transition-all duration-300 ease-in-out 
          focus:outline-none focus:ring-4 focus:ring-purple-300
          active:scale-95">ENTER</button>
        </div>

        <div></div>
      </div>
    </Form>
  );
}
