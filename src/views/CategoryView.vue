<script>
import CategoriesApi from "@/api/categories";
const categoriesApi = new CategoriesApi();
export default {
  data() {
    return {
      categories: [],
      category: {},
    };
  },
  async created() {
    this.categories = await categoriesApi.searchAllCategories();
  },
  methods: {
    async save() {
      if (this.category.id) {
        await categoriesApi.updateCategory(this.category);
      } else {
        await categoriesApi.addCategory(this.category);
      }
      this.category = {};
      this.categories = await categoriesApi.searchAllCategories();
    },
    edit(category) {
      Object.assign(this.category, category);
    },
    async remove(category) {
      await categoriesApi.deleteCategory(category.id);
      this.categories = await categoriesApi.searchAllCategories();
    },
  },
};
</script>

<template>
  <h1>Categories</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="category.description" placeholder="Description" />
    <button @click="save">Save</button>
  </div>
  <hr />
  <ul>
    <li v-for="category in categories" :key="category.id">
      <span @click="edit(category)">
        ({{ category.id }}) - {{ category.description }} -
      </span>
      <button @click="remove(category)">Remove</button>
    </li>
  </ul>
</template>