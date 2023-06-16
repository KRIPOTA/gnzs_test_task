<template>
  <header id="header">
    <h2 id="header_h2">Gnzs test task</h2>
  </header>
  <div id="appsecond">
    <div id="left-component">
      <form id="formcrm">
        <div id="select-component-div">
          <h3>Выберите сущность</h3>
          <select v-on:change="changeselect" v-model="selected" id="select-component">
            <option value="">Не выбрано</option>
            <option
              v-for="action in actions"
              v-bind:value="{ id: action.id, title: action.title }"
            >
              {{ action.title }}
            </option>
          </select>
        </div>
        <v-btn
          variant="text"
          @click.prevent="create"
          v-bind:disabled="buttondisabled"
          id="button-component"
          :loading="loader"
          size="large"
        >
          Создать
        </v-btn>
      </form>
    </div>
    <div id="right-component">
      <h3 id="right-component_h3">Параметры созданной сущности(id, имя)</h3>
      <v-list lines="one">
        <v-list-item id="elements" v-for="result in results" v-bind:value="{ result }">
          {{ result }}
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      buttonshow: true,
      loader: false,
      selected: "",
      buttondisabled: true,
      results: [],
      actions: [
        { title: "Сделка", id: "leads" },
        { title: "Контакт", id: "contacts" },
        { title: "Компания", id: "companies" },
      ],
    };
  },

  methods: {
    create() {
      this.buttonshow = false;
      this.loader = true;
      console.log(this.selected);
      if (this.selected.id) {
        axios.get(`http://localhost:3002/${this.selected.id}`).then((response) => {
          this.results.unshift(
            `${this.selected.title}(id): ${response.data[0].id}, ${
              this.selected.title
            }(имя): ${response.data[0].name.slice(10, 25)}`
          );
          this.buttonshow = true;
          this.loader = false;
        });
      }
    },
    changeselect() {
      if (this.selected) {
        this.buttondisabled = false;
      } else {
        this.buttondisabled = true;
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#header {
  background-color: rgb(78, 78, 78);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#header_h2 {
  color: aliceblue;
}

#formcrm {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 30px;
}

#select-component {
  width: 300px;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 7px 20px 7px 5px;
  text-align: left;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  font-size: large;
  color: rgb(31, 31, 31);
}

#left-component {
  margin-left: 15%;
}

#right-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15%;
  align-items: center;
  width: 600px;
}

#appsecond {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 50px;
  gap: 30px;
}

#elements {
  display: flex;
  flex-direction: column;
  margin-top: -7px;
  font-size: large;
}

#button-component:disabled {
  background-color: aliceblue;
  color: black;
  border: 1px solid;
  border-radius: 5px;
}

#button-component {
  background-color: rgb(0, 98, 255);
  color: aliceblue;
}
</style>
