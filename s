* {
  padding: 0;
  margin: 0;
  border: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  width: 100vw;
  height: 100vh;
  background: #f1f1f1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: sans-serif;
  padding: 2rem 0;
}

body #password {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

body #password input {
  font-size: 2rem;
  margin-bottom: 3rem;
}

body #password button {
  font-size: 2rem;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: white;
  -webkit-box-shadow: 0.2rem 0.2rem 0.5rem black;
          box-shadow: 0.2rem 0.2rem 0.5rem black;
}

body #wrapper {
  min-width: 30rem;
  max-width: 50rem;
  display: none;
}

body #wrapper #topics {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid black;
}

body #wrapper #topics .topic {
  background: #fff;
  font-size: 1.5rem;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}

body #wrapper #score {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
  margin-bottom: 3rem;
}

body #wrapper #score p {
  font-size: 2.5rem;
  text-align: center;
  font-weight: bolder;
}

body #wrapper #word {
  font-size: 4rem;
  height: 8rem;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 2rem;
  padding: 4rem 0 2rem;
}

body #wrapper #translation {
  font-size: 2rem;
  padding: 2rem;
  height: 7rem;
  text-align: center;
  margin-bottom: 5rem;
}

body #wrapper #buttons {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 5rem;
}

body #wrapper #buttons button {
  border: 0.1rem solid black;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 0;
  border-radius: 0.5rem;
}

body #wrapper #buttons button:hover {
  cursor: pointer;
}

body #wrapper #translation-option {
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
  border: 0.1rem solid black;
  width: 20rem;
  margin: auto;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0.2rem 0.2rem 0.5rem black;
          box-shadow: 0.2rem 0.2rem 0.5rem black;
  cursor: pointer;
}

body #wrapper #vocabulary p {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
  font-size: 1.3rem;
  padding: 1rem 0.5rem;
}

body #wrapper #vocabulary p:nth-last-of-type(even) {
  background: #fff;
}
/*# sourceMappingURL=style.css.map */
