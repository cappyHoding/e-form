import MultiStepForm from "./multistepform/MultiStepForm";

import "./App.css"
function App() {
  return (
      <div className="App">
          <div className="jumbotron jumbotron-fluid jumbo-header">
              <div className="container">
                  <h1 className="display-3">Hello, world!</h1>
                  <p>This is a template for a simple marketing or informational website. It includes a large callout
                      called a jumbotron and three supporting pieces of content. Use it as a starting point to create
                      something more unique.</p>
              </div>
          </div>
          <MultiStepForm/>
      </div>
  );
}

export default App;
