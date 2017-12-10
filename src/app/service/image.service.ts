import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
    visibleImages = [];

    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id === id);
    }
}

const IMAGES = [
    {"id":1, "category": "england", "caption": "Lorem ipsum dolor sit amet", "url":"assets/img/england_01.jpeg"},
    {"id":2, "category": "england", "caption": "Ea affert legendos qui", "url":"assets/img/england_02.jpeg"},
    {"id":3, "category": "england", "caption": "Ea usu nostrud explicari", "url":"assets/img/england_03.jpeg"},
    {"id":4, "category": "england", "caption": "Sumo quot urbanitas ne vel", "url":"assets/img/england_04.jpeg"},
    {"id":5, "category": "england", "caption": "Qui incorrupte cotidieque", "url":"assets/img/england_05.jpeg"},
    {"id":6, "category": "spain", "caption": "Sumo quot urbanitas ne vel", "url":"assets/img/spain_01.jpeg"},
    {"id":7, "category": "spain", "caption": "Vis dicant timeam no", "url":"assets/img/spain_02.jpeg"},
    {"id":8, "category": "spain", "caption": "Vim an quodsi euismod", "url":"assets/img/spain_03.jpeg"},
    {"id":9, "category": "spain", "caption": "Vel id eligendi deterruisset", "url":"assets/img/spain_04.jpeg"},
    {"id":10, "category": "spain", "caption": "An partiendo splendide", "url":"assets/img/spain_05.jpeg"},
    {"id":11, "category": "poland", "caption": "Mel homero noster everti", "url":"assets/img/poland_01.jpeg"},
    {"id":12, "category": "poland", "caption": "Vitae recusabo in nam", "url":"assets/img/poland_02.jpeg"},
    {"id":13, "category": "poland", "caption": "At usu menandri sensibus", "url":"assets/img/poland_03.jpeg"},
    {"id":14, "category": "poland", "caption": "At legimus omittam platonem nam", "url":"assets/img/poland_04.jpeg"},
    {"id":15, "category": "poland", "caption": "Mel audiam appetere", "url":"assets/img/poland_05.jpeg"}
]