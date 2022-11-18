<template>
  <div>
    <div class="container">
      <div class="w-25 m-auto my-5">
        <label for="fn">Enter First Number</label>
        <input class="form-control" id="fn" v-model="number1" type="number" />
        <br />
        <br />
        <label for="sn">Enter Second Number</label>
        <input class="form-control" id="sn" v-model="number2" type="number" />
        <br />
        <br />
        <button
          class="btn btn-success w-25 m-1 mx-1"
          @click="caluculation('+')"
        >
          +
        </button>
        <button class="btn btn-success w-25 m-1 mx-1" @click="caluculation('-')">
          -
        </button>
        <button class="btn btn-success w-25 m-1 mx-1" @click="caluculation('*')">
          *
        </button>
        <button class="btn btn-success w-25 m-1 mx-1" @click="caluculation('/')">
          /
        </button>
        <br />
        <br />
        <div class="d-flex align-items-center"><h2>Reasult : </h2><h2 id="output"></h2></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: "",
      number2: "",
    };
  },

  methods: {
    caluculation(expression) {
      switch (expression) {
        case "+":
          document.getElementById("output").innerHTML =
            parseInt(this.number1) + parseInt(this.number2);
          break;
        case "-":
          document.getElementById("output").innerHTML =
            parseInt(this.number1) - parseInt(this.number2);
          break;
        case "*":
          document.getElementById("output").innerHTML =
            parseInt(this.number1) * parseInt(this.number2);
          break;
        case "/":
          document.getElementById("output").innerHTML =
            parseInt(this.number1) / parseInt(this.number2);
          break;
        default:
        // code block
      }
    },
  },
};
</script>

<style>
#output{
    color: red;
}
</style>
