<template>
    <div class="container mt -5">
        <div class="card">
            <div class="card-header">
                <h2>Tambah Data</h2>
            </div>
            <div class="card-body">

                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).lenght > 0">
                    <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                        {{ error[0] }}
                    </li>
                </ul>
                <div class="mb-3">
                    <label for="">ID_Buku</label>
                    <input type="text" v-model="model.buku.id_buku" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Judul</label>
                    <input type="text" v-model="model.buku.judul" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Pengarang</label>
                    <input type="text" v-model="model.buku.pengarang" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Penerbit</label>
                    <input type="text" v-model="model.buku.penerbit" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Jumlah</label>
                    <input type="text" v-model="model.buku.jumlah" class="form-control" />
                </div>
                <div class="mb-3">
                    <button type="button" @click="simpanBuku" class="btn btn-primary">Simpan</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'bukuCreate',
    data(){
        return {
            errorList: '',
            model: {
                buku: {
                    id_buku:'',
                    judul:'',
                    pengarang:'',
                    penerbit:'',
                    jumlah:''
                }
            }
        }
    },
    methods: {
        simpanBuku(){

            var mythis = this;
            axios.post('http://127.0.0.1:8000/api/buku', this.model.buku)
            .then(res => {
                console.log(res.data)
                alert(res.data.message)

                this.model.buku = {
                    id_buku:'',
                    judul:'',
                    pengarang:'',
                    penerbit:'',
                    jumlah:''
                }
                this.errorList = '';
            })
            .catch(function (error) {
                if (error.response) {  
                    
                    if(error.response.status == 422){
                        mythis.errorList = error.response.data.errors;
                    }
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    
                } else if (error.request) {
                
                    console.log(error.request);
                } else {
                    
                    console.log('Error', error.message);
                }
            });
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