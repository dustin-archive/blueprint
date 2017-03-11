<style src='style.scss' lang='scss'></style>
<script src='script.js'></script>
<template>
  <div class='pagination'>
    <v-button v-on:click='to(1)' v-bind:class='disable(1)'>First</v-button>
    <v-button v-on:click='to(number - 1)' v-bind:class='disable(number - 1)'>Prev</v-button>
    <v-button v-on:click='to(number - 2)' v-bind:class='disable(number - 2)'>{{ show(number - 2) }}</v-button>
    <v-button v-on:click='to(number - 1)' v-bind:class='disable(number - 1)'>{{ show(number - 1) }}</v-button>
    <v-button>{{ number }}</v-button>
    <v-button v-on:click='to(number + 1)' v-bind:class='disable(number + 1)'>{{ show(number + 1) }}</v-button>
    <v-button v-on:click='to(number + 2)' v-bind:class='disable(number + 2)'>{{ show(number + 2) }}</v-button>
    <v-button v-on:click='to(number + 1)' v-bind:class='disable(number + 1)'>Next</v-button>
    <v-button v-on:click='to(last)' v-bind:class='disable(last)'>Last</v-button>
  </div>
</template>
