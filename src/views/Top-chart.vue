<template>
<div class="center">
    <h1>Artist Music chart 1989/1990</h1>
    <br>
    <div id="music-chart" class="">
    <table align='center'>
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Singer</th>
          <th>Song</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>The four season</td>
          <td>Can't take my eyes off you</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Queen</td>
          <td>Bohemian Rhapsody</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Frank Sinata</td>
          <td>New York</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Micheal Jackson</td>
          <td>Billie Jeans</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Joji</td>
          <td>Slow Dancing in the dark</td>
          </tr>
        <tr>
          <td>6</td>
          <td>Frank sinata</td>
          <td>My way</td>
        </tr>
        
      </tbody>
    </table>
    <br>
  </div>
</div>

</template>

<script>

export default {
  name: "top-chart",
};
</script>

<style>
#music-chart {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#music-chart td,
#music-chart th {
  border: 1px solid #ddd;
  padding: 8px;
}

#music-chart tr:nth-child(even) {
  background-color: #f2f2f2;
}

#music-chart tr:hover {
  background-color: #ddd;
}

#music-chart th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
.center{
    text-align: center;
}
</style>
