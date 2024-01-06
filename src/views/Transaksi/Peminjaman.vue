<template>
	<div class="transaksi">
    <h1>Peminjaman Buku</h1>
    <p>Selamat Datang di Halaman Peminjaman Buku Kami</p>
  </div>
  <div class="box">
    <h3>Masukkan Data Peminjaman</h3>
    <div class="card-body">
        <div class="card">
          <h7>Nama</h7>
        </div>
        <div class="card">
          <h7>NISN</h7>
        </div>
        <div class="card">
          <h7>Status</h7>
        </div>
        <div class="card">
          <h7>ID_Peminjaman</h7>
        </div>
    </div>
    <div class="card-body">
        <div class="card">
          <h7>Tanggal Peminjaman</h7>
        </div>
        <div class="card">
          <h7>Tanggal Pengembalian</h7>
        </div>
        <div class="card">
          <h7>Peugas Perpustakaan</h7>
        </div>
    </div>
    <button type="button" @click="" class="btn btn-primary mx-2">
      Simpan
    </button>
  </div>
</template>

<script>
export default {
  name: 'Peminjaman',
}
</script>

<style scoped>
.transaksi {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  
  position: absolute;
  width: 500px;
  height: 58px;
  left: 350px;
  top: 50px;
}

h1{
  font-weight: bold;
  font-size: xx-large;
}
h3{
  text-align: center;
}
.box{
  position: absolute;
  width: 800px;
  height: 400px;
  left: 370px;
  top: 170px;
  bottom: 20px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.card{
  left: 20px;
  width: 527px;
  height: 30px;
  border-radius: 5px;
}

</style>


