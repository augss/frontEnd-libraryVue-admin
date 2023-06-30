<script>
import CategoriasApi from "@/api/categorias";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return {
      categories: [],
      category: {},
    };
  },
  async created() {
    this.categories = await categoriasApi.buscarTodasAsCategorias();
  },
  methods: {
    async salvar() {
      if (this.category.id) {
        await categoriasApi.atualizarCategoria(this.category);
      } else {
        await categoriasApi.adicionarCategoria(this.category);
      }
      this.category = {};
      this.categories = await categoriasApi.buscarTodasAsCategorias();
    },
    editar(category) {
      Object.assign(this.category, category);
    },
    async excluir(category) {
      await categoriasApi.excluirCategoria(category.id);
      this.categories = await categoriasApi.buscarTodasAsCategorias();
    },
  },
};
</script>

<template>
  <h1>Categoria</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="category.description" placeholder="Description" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="category in categories" :key="category.id">
      <span @click="editar(category)">
        ({{ category.id }}) - {{ category.description }} -
      </span>
      <button @click="excluir(category)">X</button>
    </li>
  </ul>
</template>

<style></style>
