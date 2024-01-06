<template>
	<div class="dashboard">
    <h>Dashboard</h>
    <p>Selamat Datang di Halaman Dashboard Kami</p>
  </div>
  <div class="container">
    <div class="box box1">
      <h1>4</h1>
      <h4>Anggota</h4>
    </div>
    <div class="box box2">
      <h1>4</h1>
      <h4>Buku</h4></div>
    <div class="box box3">
      <h1>1</h1>
      <h4>Peminjaman</h4></div>
    <div class="box box4">
      <h1>0</h1>
      <h4>Pengembalian</h4></div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>

<style scoped>
.dashboard {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  
  position: absolute;
  width: 500px;
  height: 58px;
  left: 350px;
  top: 50px;
}
h{
  font-weight: bold;
  font-size: xx-large;
}
.container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 80px;
}
h1{
  font-weight: 700;
  font-size: 64px;
  padding-left: 10px;
  font-weight: bolder;
  line-height: 77.45px;
  color: #FFFFFF;
}
h4{
  padding-left: 10px;
  color: lightgray;
}

  .box1 {
    position: absolute;
    width: 244px;
    height: 125px;
    left: 381px;
    top: 200px;
    background: #4BA8EC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
  }
  .box2 {
    position: absolute;
    width: 244px;
    height: 125px;
    left: 645px;
    top: 200px;

    background: #0CA437;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .box3 {
    position: absolute;
    width: 244px;
    height: 125px;
    left: 909px;
    top: 200px;

    background: #F29A15;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .box4 {
    position: absolute;
    width: 244px;
    height: 125px;
    left: 1173px;
    top: 200px;

    background: #FA2424;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }


</style>


