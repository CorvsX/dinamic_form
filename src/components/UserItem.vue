<template>
    <div>
        <div class="bg-white shadow-md rounded-lg overflow-hidden max-w-xs">
            <div class="bg-gray-100 px-4 py-3 border-b">
                <h5 class="text-lg font-semibold mb-0"></h5>
            </div>
            <div class="p-4">
                <div class="mb-4">
                    <input :value="person.name" type="text"
                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nombre">
                </div>
                <div class="mb-4">
                    <input :value="person.email" type="email"
                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Correo">
                </div>
                <div class="mb-4">
                    <input :value="person.number" type="number"
                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Edad">
                </div>
                <button @click="$emit('deleteUser')"
                    class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Borrar X
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserItem',
    data() {
        return {
        }
    },
    props: [
        'person'
    ],
    methods: {
    },
    emits: [
        'deletePerson'
    ]
}

</script>
