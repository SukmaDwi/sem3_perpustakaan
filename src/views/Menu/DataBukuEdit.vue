<template>
    <div class="container mt -5">
        <div class="card">
            <div class="card-header">
                <h2>Edit Data</h2>
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
                    <button type="button" @click="UpdateBuku" class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'bukuEdit',
    data(){
            return {
                bukuId:'',
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
    mounted() {
        //console.log(this.$route.params.id);
        this.bukuId = this.$route.params.id;
        this.getDataBuku(this.$route.params.id);
    },
    methods: {

        getDataBuku(bukuId){

            axios.get('http://127.0.0.1:8000/api/buku/${bukuId}/edit')
            .then(res => {
                console.log(res.data.buku);

                this.model.buku = res.data.buku
            })
            .catch(function (error) {
                if (error.response) {  
                    
                    if(error.response.status == 404){
                        alert(error.response.data.message);
                    }
                    
                }
            });
        },

        UpdateBuku(){

            var mythis = this;
            axios.put('http://127.0.0.1:8000/api/buku/${this.bukuId}/edit', this.model.buku)
                .then(res => {
                    console.log(res.data)
                    alert(res.data.message);

                    this.errorList = '';
                })
                .catch(function (error) {
                    if (error.response) {  
                        
                        if(error.response.status == 422){
                            mythis.errorList = error.response.data.errors;
                        }

                        if(error.response.status == 404){
                            alert(error.response.data.message);
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