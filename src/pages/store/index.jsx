import React from 'react';
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./store.css"
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import api from '../../api/api.js'

/*-=--=--=--=--=--=--=--=--=--=--=--=-
COLOCAR DENTRO DA FUNÇÃO QUE RODA QUANDO CARREGAR A TELA "componentDidMount"*/
api.get("/funkos").then(data =>{
    var funkoList = data
})
/*-=--=--=--=--=--=--=--=--=--=--=--=-*/
const Store = () => {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Produtos',
            icon: 'pi pi-shopping-bag',
        }, {
            label: 'Sobre',
            icon: 'pi pi-fw pi-user',
        }, {
            label: 'Código Fonte',
            icon: 'pi pi-github',
        }, {
            label: 'Sair',
            icon: 'pi pi-sign-out',
            url: 'http://localhost:3000/login'
        }, {
            label: 'Adicionar',
            icon: 'pi pi-shopping-bag',
            url: 'http://localhost:3000/adicionar'
        },
    ];

    const start = <div className='logo'><img alt="logo" src="src/assets/Cup.png" height="40" className="mr-2"></img><h1>funko</h1></div>;

    return (
        <div>
            <div className="card" style={{}}>
                <Menubar className='card2' model={items} start={start} style={{ border: 0, borderRadius: 0 }} />
            </div>
            <article>
                <section>
                    <p className='novidades'>CONFIRA AS NOVIDADES</p>
                    <img className='banner-desconto' src="src/assets/banner.png" alt="banner"></img>
                </section>
                <section className='secao-marcas'>
                    <img height="110" src="src/assets/disney2.png" alt="logo disney"></img>
                    <img height="100" src="src/assets/marvel.jpg" alt="logo marvel"></img>
                    <img height="100" src="src/assets/harry.png" alt="logo harry potter"></img>
                    <img height="100" src="src/assets/star.jpg" alt="logo star wars"></img>
                </section>
            </article>
            <footer>
                <div class="right">
                    <img class="cupFooter" src="src/assets/Cup.png" />
                </div>
                <div class="left">
                    <h2>Projeto de Programação Web II Unesc</h2>
                    <p>Vinicios Santos</p>
                    <p>Murilo Maffioletti</p>
                    <p>Nicollas Pereira</p>
                  
                </div>
            </footer>

        </div>
    );
}
export default Store