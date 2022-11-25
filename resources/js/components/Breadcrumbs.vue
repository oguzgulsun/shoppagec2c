<template lang="">
    <div>
        <v-card>
      <v-breadcrumbs divider=">" large :items="breadcrumbs"></v-breadcrumbs>
    </v-card>
    </div>
</template>
<script>
export default {
    name:"Breadcrumbs",
    props:['breadcrumbs']
}
</script>
<style lang="">
    
</style>