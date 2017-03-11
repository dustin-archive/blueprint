<style src='style.scss' lang='scss'></style>
<script src='script.js'></script>
<template>
  <div class='card -card _solid'>
    <div class='card-thumb'></div>
    <h1>username</h1>
    <div class='card-compare' v-bind:class='active'>
      <v-button v-on:click='place' v-bind:class='active'>Compare</v-button>
    </div>
  </div>
</template>
