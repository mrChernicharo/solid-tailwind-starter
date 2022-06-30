import "tailwindcss/tailwind.css";

function App() {
  return (
    <div class={`bg-slate-600 text-slate-100 h-screen`}>
      <h1>TailWind</h1>

      <p>Hello</p>

      <button class={`bg-teal-600 p-2 ring-2 ring-teal-400 ring-offset-2`}>Press me</button>
    </div>
  );
}

export default App;
