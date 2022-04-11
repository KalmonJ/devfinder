import Input from "../components/input";
import Layout from "../components/main";
import { ContextsProps } from "../contexts";
import '../index.css'


function App() {

  return (
    <ContextsProps>
      <div className="App">
        <Input/>
        <Layout/>
      </div>
    </ContextsProps>
  );
}

export default App;
