<template>
    <div class="notifikasi">
        <font-awesome-icon icon="Notifications" />
    </div>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <header class="header">
            <router-link to="/" class="button">
                <div class="header-box">
                <h1>SIP SMAGO</h1>
            </div>
            </router-link>
            <div class="user">
                <div class="header-title-box">
                    <router-link to="/profil" class="button">
                        <div class="header-image">
                            <img :src="logoURL" alt="vue" />
                            </div>
                    </router-link>
                    <div class="title">
                        <h1 class="header-title">Sukma Dwi Ro'iza</h1>
                    </div>
                    <div class="admin">
                        <h2 class="header-title">admin</h2>
                    </div>
                </div>
		    </div>
        </header>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/dashboard" class="button">
				<span class="material-icons">home</span>
				<span class="text">Dashboard</span>
			</router-link>
			<router-link to="/buku" class="button">
				<span class="material-icons">description</span>
				<span class="text">Data Buku</span>
			</router-link>
			<router-link to="/anggota" class="button">
				<span class="material-icons">group</span>
				<span class="text">Data Anggota</span>
			</router-link>
		</div>

        <h3>Transaksi</h3>
        <div class="transaksi">
            <router-link to="/pinjam" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Peminjaman</span>
			</router-link>
            <router-link to="/kembali" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Pengembalian</span>
			</router-link>
        </div>
        <h3>Pelaporan</h3>
        <div class="laporan">
            <router-link to="/laporan" class="button">
				<span class="material-icons">description</span>
				<span class="text">Laporan</span>
			</router-link>
        </div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Logout</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/logo.png'


const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
.notifikasi {
    position: absolute;
    width: 1707px;
    height: 50px;
    left: 0px;
    top: 0px;
    background: #FFC300;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

    img {
        width: 75px; /* Lebar gambar */
        height: 75px; /* Tinggi gambar */
        margin-right: 0px; /* Jarak antara gambar dan tulisan */
            
    }
}
aside {
    position: absolute;
    width: 357px;
    left: 0px;
    top: 0px;

    background: #001D3D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
	display: flex;
	flex-direction: column;

	background-color: var(--dark);
	color: var(--light);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;
    .header {
        .header-box {
            position: absolute;
            width: 357px;
            height: 50px;
            left: 0px;
            top: 0px;

            background: #003566;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
            h1 {
                width: 247px;
                height: 58px;
                left: 63px;
                top: 7px;
                line-height: 58px;
                text-align: center;
                font-weight: bold;
                color: white;
            }
        }
        .header-title-box {
            position: absolute;
            width: 357px;
            height: 125px;
            left: 0px;
            top: 55px;
            background: #003566;
            display: flex;
            align-items: center;

            img {
                width: 75px; /* Lebar gambar */
                height: 75px; /* Tinggi gambar */
                margin-right: 0px; /* Jarak antara gambar dan tulisan */
            }
            .header-title {
                top: 55px;
                margin-left: 10px;
                font-size: medium;
            }
            .title {
                position: absolute;
                left: 80px;
                top: 40px;
            }
            .admin {
                position: absolute;
                width: 60px;
                height: 22px;
                left: 90px;
                top: 65px;

                background: #0CA437;
            }
        }
    }
	.flex {
		flex: 1 1 0%;
	}

	.menu-toggle-wrap {
        margin-top: 8rem;
        position: absolute;
		display: flex;
		justify-content: flex-end;
		margin-bottom: 2rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu, .transaksi, .laporan {
		margin: 0 -1rem;
        margin-bottom: 20px;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0px;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>