<template>
  <div class="test">
    <v-container>
      <v-card>
        <v-form ref="form" >
          <v-text-field
            v-model="name"           
            label="Name"
          ></v-text-field>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "test",
};
</script>
