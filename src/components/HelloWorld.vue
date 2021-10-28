<template>
  <v-container>
    {{ $store.state.count}}
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    }),
	methods:{
		increment(){
			this.$store.commit('increment')
			console.log(this.$store.state.count)
		}
	},
	created(){
		this.increment();
		this.increment();
		this.increment();
		this.increment();
	},
  }
</script>
