<template>
	<div id="app" :class="vueAppClasses">
		<transition mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<script>


export default {
  name: 'App',

  components: {
   
  },

  data: () => ({
    //
	vueAppClasses: []
  }),
};
</script>
