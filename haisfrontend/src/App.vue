<template>
  <div id="app">
    <h1>Welcome to Hais Vue App</h1>
    <HelloWorld msg="This is your Vue + ASP.NET Core starter app." />

    <!-- Sample call to backend -->
    <div v-if="weatherData.length">
      <h2>Weather Forecast (from .NET API)</h2>
      <ul>
        <li v-for="(item, index) in weatherData" :key="index">
          {{ item.date }} - {{ item.summary }} ({{ item.temperatureC }}°C)
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import api from './api' // axios instance

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      weatherData: []
    }
  },
  mounted() {
    api.get('/weatherforecast')
      .then(response => {
        this.weatherData = response.data
      })
      .catch(error => {
        console.error("API error:", error)
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>