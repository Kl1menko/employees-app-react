import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import "./app.css";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

function App() {

  const data = [
    { name: 'Alex W.', salary: 800, increase: false, id: 1 },
    { name: 'Vita A.', salary: 1800, increase: true, id: 2 },
    { name: 'Alex A.', salary: 4500, increase: false, id: 3 },
    { name: 'Jonh K.', salary: 3000, increase: false, id: 4 }
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployersList data={data} />
      <EmployersAddForm />
    </div>
  );
}

export default App;
