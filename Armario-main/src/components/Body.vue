<template>
  <div>
    <body>
      <Header />

      <div class="row">
        <div class="col-3">
          <div id="retang">
            <input
              type="text"
              class="form-control"
              placeholder="Digite o curso"
            />
          </div>
          <div class="todos">
            <p><b></b></p>
          </div>
          <div id="flecha">
            <img src="@/assets/imagens/sinal.png" alt="flecha" />
          </div>
        </div>
      </div>

      <h1 class="status">Status dos armários</h1>
      <div class="container">
        <div class="row align-items-start">
          <div class="col-3">
            <i class="fa-solid fa-circle" style="color: white"></i>
            <label class="col-sm-2 m-2"> VAZIO</label>
          </div>

          <div class="col-3">
            <div class="col-3">
              <i class="fa-solid fa-circle" style="color: green"></i>
              <label class="col-sm-2 m-2"> ALUGADO</label>
            </div>
          </div>

          <div class="col-3">
            <div class="col-3">
              <i class="fa-solid fa-circle" style="color: red"></i>
              <label class="col-sm-2 m-2"> ATRASADO</label>
            </div>
          </div>

          <div class="col-3">
            <label for="col-sm-2 col-form-label">Input</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Digite o curso"
              />
              <span class="btn btn-outline"
                ><i
                  class="fa-solid fa-magnifying-glass"
                  style="position: absolute; margin-left: 0px"
                ></i
              ></span>
            </div>
          </div>
        </div>
      </div>

      <section id="status" class="container"></section>
      <div class="container">
        <div class="row">
          <div class="col-2 text-center">
            <a href="#">
              <i class="bi bi-door-closed cor-da-borda">01</i>
            </a>
          </div>
          <div class="col-2 text-center">
            <a href="#">
              <i class="bi bi-door-closed cor-da-borda">02</i>
            </a>
          </div>
          <div class="col-2 text-center">
            <a href="#">
              <i class="bi bi-door-closed cor-da-borda">03</i>
            </a>
          </div>
          <div class="col-2 text-center">
            <a href="#">
              <i class="bi bi-door-closed cor-da-borda">04</i>
            </a>
          </div>
          <div class="col-2 text-center">
            <a href="#">
              <i
                class="bi bi-door-closed cor-da-borda"
                data-bs-toggle="modal"
                data-bs-target="#modal"
                >05</i
              >
            </a>
          </div>
          <div class="col-2 text-center">
            <a href="#">
              <i class="bi bi-door-closed cor-da-borda">06</i>
            </a>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section id="status" class="container"></section>
        <div class="container">
          <div class="row">
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">07</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">08</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">09</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">10</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">11</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">12</i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section id="status" class="container"></section>
        <div class="container">
          <div class="row">
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">13</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">14</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">15</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">16</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">17</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">18</i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section id="status" class="container"></section>
        <div class="container">
          <div class="row">
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">19</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">20</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">21</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">22</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">23</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">24</i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section id="status" class="container"></section>
        <div class="container">
          <div class="row">
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">25</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">26</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">27</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">28</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">29</i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">30</i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section id="status" class="container"></section>
        <div class="container">
          <div class="row">
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda"><b>31</b></i>
              </a>
            </div>
            <div class="col-2 text-center">
              <a href="#">
                <i class="bi bi-door-closed cor-da-borda">32</i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </body>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: { Header, Footer },
  name: "Body",
  data: () => ({
    //verificar os atributos dos alunos
    dados:{}
  }),
  methods: {
    //ao criar o componente, faz uma chamada para API, para verificar qual está ocupado e qual não está
    //verificar retorno da api
    created() {
      fetch("http://localhost:8080/armarios")
        .then((response) => response.json())
        .then((response) => {
          this.dados = response;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  box-sizing: border-box;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #101010c9;
  margin-bottom: 0%;
}

#container {
  display: grid;
  position: relative;
  grid-template-columns: 15vw 15vw 15vw 15vw 15vw 15vw;
  grid-gap: 1vw;
  justify-content: center;
  align-content: start;
  margin-top: 20%;
}

header {
  width: 100vw;
  height: 25vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fafd6e;
}

p {
  grid-column: span 6;
  padding-top: 8vh;
  font-size: 140%;
  margin-left: 30%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-style: normal;
  display: flex;
  align-items: center;
  text-align: center;
  color: #101010de;
}

h1 {
  grid-column: span 6;
  padding-top: 1%;
  font-size: 140%;
  margin-left: 40%;
  font-family: initial;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  display: flex;
  color: #000;
  margin-top: 13%;
}

#logo {
  grid-column: 1/5;
}

#logo img {
  width: 10vw;
  height: 20vh;
  margin-top: 1%;
  margin-left: 2%;
  position: absolute;
}

#sinal img {
  width: 3vw;
  height: 5vh;
  position: absolute;
  top: 40%;
  left: 90%;
}

footer {
  width: 100%;
  float: left;
  background-color: #fafd6e;
  color: #000;
  padding: 15px 0 15px 0;
  text-align: center;
}

body {
  background-color: #a5c1ce;
}

#status {
  align-items: center;
  margin-top: 10%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.cor-da-borda {
  margin: 10px;
  border: 30px solid #ffffff;
  background-color: #ffffff;
  border-radius: 10%;
}

a {
  text-decoration: none;
}

#retang {
  grid-column: 1/5;
}

#retang input {
  height: 5vh;
  width: 11vw;
  margin-left: 12%;
  position: absolute;
  margin-top: 15%;
}

.todos {
  grid-column: 1/5;
}

.todos p {
  width: 2vw;
  height: 3vh;
  color: #4f4f4f;
  margin-left: 13%;
  position: absolute;
  font-size: 18px;
  font-family: initial;
  margin-top: 12.5%;
}

#flecha {
  grid-column: 1/5;
}

#flecha img {
  width: 3vw;
  height: 3vh;
  margin-top: 16.5%;
  margin-left: 20%;
}

#primeira {
  grid-column: 1/5;
}

#primeira img {
  width: 1.8vw;
  height: 3vh;
  margin-top: 2%;
  margin-left: 12%;
  position: absolute;
}

.branco {
  grid-column: 1/5;
}

.branco p {
  width: 2vw;
  height: 3vh;
  color: #4f4f4f;
  margin-left: 15%;
  position: absolute;
  margin-top: -1%;
  font-family: initial;
}

#segunda {
  grid-column: 2/5;
}

#segunda img {
  width: 2vw;
  height: 3.5vh;
  margin-top: 2%;
  margin-left: 26%;
  position: absolute;
}

.vermelho {
  grid-column: 2/5;
}

.vermelho p {
  width: 2vw;
  height: 3vh;
  color: #4f4f4f;
  margin-left: 29%;
  position: absolute;
  margin-top: -1%;
  font-family: initial;
}

#terceira {
  grid-column: 3/5;
}

#terceira img {
  width: 2vw;
  height: 3.5vh;
  margin-top: 2%;
  margin-left: 40%;
  position: absolute;
}

.verde {
  grid-column: 3/5;
}

.verde p {
  width: 2vw;
  height: 3vh;
  color: #4f4f4f;
  margin-left: 43%;
  position: absolute;
  margin-top: -1%;
  font-family: initial;
}

#retangulo {
  grid-column: 4/5;
}

#retangulo img {
  width: 20vw;
  height: 5vh;
  margin-top: 2%;
  margin-left: 68%;
  position: absolute;
}

.digite {
  grid-column: 4/5;
}

.digite p {
  width: 20vw;
  height: 3vh;
  font-size: 18px;
  margin-left: 69%;
  position: absolute;
  color: #4f4f4f;
  margin-top: -0.5%;
  font-family: initial;
}

#lupa {
  grid-column: 4/5;
}

#lupa img {
  width: 3vw;
  height: 3vh;
  margin-top: 2.5%;
  margin-left: 85%;
  position: absolute;
}
</style>
