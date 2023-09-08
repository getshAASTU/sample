import "./App.css";
import { Route, Switch } from "react-router-dom";
import BackButton from "./components/Button";
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
      <div className="nav">
        <BackButton />
        <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </div>
      <p>
        Login Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
        sed modi in ipsa quidem? Facilis nisi officiis similique, atque, autem,
        quas soluta assumenda quasi earum dolore nostrum quidem explicabo
        voluptatum. Login Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Ullam sed modi in ipsa quidem? Facilis nisi officiis similique,
        atque, autem, quas soluta assumenda quasi earum dolore nostrum quidem
        explicabo voluptatum.
      </p>
      <p>
        Login Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
        sed modi in ipsa quidem? Facilis nisi officiis similique, atque, autem,
        quas soluta assumenda quasi earum dolore nostrum quidem explicabo
        voluptatum. Login Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Ullam sed modi in ipsa quidem? Facilis nisi officiis similique,
        atque, autem, quas soluta assumenda quasi earum dolore nostrum quidem
        explicabo voluptatum.
      </p>
      <p>
        {" "}
        Login Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
        sed modi in ipsa quidem? Facilis nisi officiis similique, atque, autem,
        quas soluta assumenda quasi earum dolore nostrum quidem explicabo
        voluptatum. Login Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Ullam sed modi in ipsa quidem? Facilis nisi officiis similique,
        atque, autem, quas soluta assumenda quasi earum dolore nostrum quidem
        explicabo voluptatum.
      </p>
      <p>
        {" "}
        Login Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
        sed modi in ipsa quidem? Facilis nisi officiis similique, atque, autem,
        quas soluta assumenda quasi earum dolore nostrum quidem explicabo
        voluptatum. Login Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Ullam sed modi in ipsa quidem? Facilis nisi officiis similique,
        atque, autem, quas soluta assumenda quasi earum dolore nostrum quidem
        explicabo voluptatum.
      </p>
    </div>
  );
}

export default App;
