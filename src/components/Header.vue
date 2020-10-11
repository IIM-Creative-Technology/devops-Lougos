<template>

    <nav>
        <div class="start-nav">
            <a href="projet.html">
                Projets
            </a>
            <a href="propos.html">
                A propos
            </a>
        </div>
        <div class="mid-nav">
            <a href="index.html">
                <div>
                    <p>Lilian Gautier</p>
                    <small>[Web Developper]</small>
                </div>
            </a>
        </div>
        <div class="end-nav">
            <span id='horloge'></span>
        </div>
    </nav>

</template>

<script>
export default {

}
</script>

<style lang="scss">
nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 12%;
    text-decoration: none;

    .start-nav {
        display: flex;
        justify-content: space-evenly;
        width: 25%;
        a {
            font: 20px 'Bebas';
            letter-spacing: 2px;
            color: black;
            text-decoration: none;
            display: inline-block;
            position: relative;
        }
        :after {    
            background: none repeat scroll 0 0 transparent;
            bottom: 0;
            content: "";
            display: block;
            height: 2px;
            left: 50%;
            position: absolute;
            background:black;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
        }
        :hover:after { 
            width: 100%; 
            left: 0; 
        }
    }
    .mid-nav {
        p {
            text-decoration: none;
            color: black;
            font: 30px 'Bebas';
            letter-spacing: 2px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        a {
            cursor: pointer;
            text-decoration: none!important;
        }
        small {
            text-decoration: none;
            color: black;
            margin-left: 8px;
            font: 20px 'Bebas';
            letter-spacing: 2px;
        }
    }
    .end-nav {
        cursor: default;
        font: 20px 'Bebas';
        letter-spacing: 2px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        width: 25%;
    }
}
</style>