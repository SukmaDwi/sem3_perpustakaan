<template>
	<div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
        <h>Data Buku</h>
        <RouterLink to="/buku/create" class="btn btn-primary float-end">
        + Tambah Data
        </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID_Buku</th>
              <th>Judul</th>
              <th>Pengarang</th>
              <th>Penerbit</th>
              <th>Jumlah</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(buku, indeex) in this.buku" :key="index">
              <td>{{ buku.id }}</td>
              <td>{{ buku.id_buku }}</td>
              <td>{{ buku.judul }}</td>
              <td>{{ buku.pengarang }}</td>
              <td>{{ buku.penerbit }}</td>
              <td>{{ buku.jumlah }}</td>
              <td>
                <RouterLink :to="{ path: '/buku/'+buku.id+ '/edit' }" class="btn btn-success">
                Edit
                </RouterLink>
                <button type="button" @click="deleteBuku(buku.id)" class="btn btn-danger mx-2">
                Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'buku',
  data(){
    return {
      buku: []
      
    }
  },
  mounted() {
    this.getBuku();
    // console.log(im here)
  },
  methods: {
    getBuku() {
      axios.get('http://127.0.0.1:8000/api/buku').then(res => {
        this.buku = res.data.buku
        console.log(this.buku)
        timestamp = Date.now();
        console.log(timestamp);
      });
    },

    deleteBuku(bukuId) {

      if(confirm('Apakah Anda Yakin akan menghapus')) {
        //console.log(bukuId)
        axios.delete('http://127.0.0.1:8000/api/buku/${bukuId}/delete')
        .then(res => {
          alert(res.data.message);
          this.getBuku();
        })
        .catch(function (error) {
          if (error.response) {  
                    
            if(error.response.status == 404){
                alert(error.response.data.message);
            } 
          }
        });
      }
    }
  },
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 100px;
  right: 50px;
}
</style>
