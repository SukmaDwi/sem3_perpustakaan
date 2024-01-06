import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Menu/Home.vue'
import DataBuku from '../views/Menu/DataBuku.vue'
import DataBukuCreate from '../views/Menu/DataBukuCreate.vue'
import DataBukuEdit from '../views/Menu/DataBukuEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/buku',
      name: 'buku',
      component: DataBuku
    },
    {
      path: '/buku/create',
      name: 'bukuCreate',
      component: DataBukuCreate
    },
    {
      path: '/buku/:id/edit',
      name: 'bukuEdit',
      component: DataBukuEdit
    },
    {
      path: '/anggota',
      name: 'anggota',
      component: () => import('../views/Menu/DataAnggota.vue')
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('../views/Profil.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Menu/Dashboard.vue')
    },
    {
      path: '/pinjam',
      name: 'pinjam',
      component: () => import('../views/Transaksi/Peminjaman.vue')
    },
    {
      path: '/kembali',
      name: 'kembali',
      component: () => import('../views/Transaksi/Pengembalian.vue')
    },
    {
      path: '/laporan',
      name: 'laporan',
      component: () => import('../views/Laporan/Laporan.vue')
    },
  ]
})

export default router
