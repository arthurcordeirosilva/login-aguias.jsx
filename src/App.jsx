import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <>
      <div className="background">
      </div>  
      <div className="bloco_entrada">
      <p className="welcome">
          Hey welcome to
        </p>
        <p className="travel">
          TravelGo!
        </p>  
      <h1></h1>
      <p className="avancar">
        <a href="#login">Avançar</a> 
      </p>
      </div>

      <div className="bloco_separador">
      <img src = "../src/assets/pixel.png" height="500px"></img>
        </div>

      <div id="login" className="bloco_login">
      <p className="travel">
          Let's go
        </p>  
      <p className="welcome">
         Traveling around the world!
      </p>  
      <p className="welcome"> 
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </p>
        <p className="welcome">
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </p>
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <>
      <div id="Login" className="background">
      <p className="welcome"> 
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </p>
        <p className="welcome">
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </p>
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}


export default App
