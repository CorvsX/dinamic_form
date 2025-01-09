<script setup>



</script>

<template>
  <header>

<title>Gestion de personas</title>
  </header>


    <body class="container mx-auto mt-4 px-4">
  <div class="bg-white shadow-md rounded-lg overflow-hidden max-w-xs">
    <div class="bg-gray-100 px-4 py-3 border-b">
      <h5 class="text-lg font-semibold mb-0">Persona Nueva</h5>
    </div>
    <div class="p-4">
      <form @submit.prevent="addPerson">
        <div class="mb-4">
          <input v-model="newPerson.name" type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nombre">
        </div>
        <div class="mb-4">
          <input v-model="newPerson.email" type="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Correo">
        </div>
        <div class="mb-4">
          <input v-model="newPerson.number" type="number" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Edad">
        </div>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Añadir nuevo
        </button>
      </form>
    </div>
  </div>

  <div v-for="(person, pos) in persons" :key = "pos">
    <br>
  <div class="bg-white shadow-md rounded-lg overflow-hidden max-w-xs" >
    <div class="bg-gray-100 px-4 py-3 border-b">
      <h5 class="text-lg font-semibold mb-0"></h5>
    </div>
    <div class="p-4">
      <form @submit.prevent="addPerson">
        <div class="mb-4">
          <input :value="person.name" type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nombre">
        </div>
        <div class="mb-4">
          <input :value="person.email" type="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Correo">
        </div>
        <div class="mb-4">
          <input :value="person.number" type="number" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Edad">
        </div>
        <button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Borrar
        </button>
      </form>
    </div>
  </div>
</div>

</body>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      newPerson: {
        name: '',
        email: '',
        age: 0
      },
      persons: [],
    }
  },

  methods: {
    addPerson(){
      this.persons.push(this.newPerson)
      console.log(this.persons);
      this.newPerson = {
        name: '',
        email: '',
        age: 0
      }
    }
  }
}
</script>
