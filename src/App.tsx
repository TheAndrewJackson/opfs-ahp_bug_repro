import { PGlite } from "@electric-sql/pglite";

const client = await PGlite.create({
  dataDir: "opfs-ahp://electric.db",
  relaxedDurability: true,
});


function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
