/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue e l'array di oggetti
allegato.
Quando mostriamo un'immagine, mostriamo anche il relativo titolo e la relativa descrizione.
Bonus:
0 - realizziamo ora anche le thumbnails!
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
Regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css
dell'esercizio svolto qualche giorno fa: è già tutto pronto!
Il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe
*/


// Creo l'app Vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            // Definisco i dati dell'array degli slide
            slides: [
                {
                    image: 'img/01.webp',
                    title: "Marvel's Spiderman Miles Morale",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],

            // Imposto l'indice dello slide corrente
            currentIndex: 0,

            // variabile per memorizzare l'intervallo dell'autoplay
            autoplayInterval: null,
        };
    },
    computed: {
        // Uso la proprietà computed per ottenere lo slide corrente
        currentSlide() {
            return this.slides[this.currentIndex];
        }
    },
    methods: {
        nextSlide() {

            // Cambio lo slide corrente incrementando l'indice
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        prevSlide() {

            // Cambio lo slide corrente decrementando l'indice
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        selectSlide(index) {

            // Legata all'evento click dell'immagine, cambio lo slide corrente al click su una thumbnail
            this.currentIndex = index;
        },
        startAutoplay() {

            // Imposto l'autoplay con un intervallo di 3 secondi
            this.autoplayInterval = setInterval(() => {
                this.nextSlide();
            }, 3000);
        },
        stopAutoplay() {

            // Fermo l'autoplay
            clearInterval(this.autoplayInterval);
        }
    },
    mounted() {

        // Avvio l'autoplay quando il componente è montato
        this.startAutoplay();
    },
    beforeUnmount() {

        // Mi assicuro di fermare l'autoplay quando il componente viene smontato
        this.stopAutoplay();
    }
}).mount('#app');