import "./App.css";
import InputField from "./Input";

// import { Input } from "@material-tailwind/react";

function App() {
  return (
    <div className="App h-screen p-4">
      <div className="parent bd h-[100%] w-[100%] rounded-xl overflow-hidden ff-pp">
        <div className="banner ot">Banner</div>
        <div className="form ot flex flex-col">
          <div className="header ot basis-1/4 flex flex-col justify-evenly">
            <div className="logo ot">
              LOGO
              <img
                className="ot h-[100%]"
                src="../src/resources/logo.jpeg"
                alt=""
              />
            </div>
            <div className="logo ot">Expand your retail presence with us!</div>
          </div>

          <div className="inputForm ot basis-3/4">
            <form className="p-4">
              <div className="grid gap-6 mb-6 md:grid-cols-2 ">
                <InputField name="name" />
                <InputField name="email" />
                <InputField name="phone" />
                <InputField name="dropdown" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
