import { InMemoryDbService } from "angular-in-memory-web-api";

export class HeroData implements InMemoryDbService {
  createDb() {
    let heroes = [
      { title: 'Hulk', thumbnail: '../assets/0.jpg' },
      { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
      { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
      { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
      { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
      { title: 'Hulk', thumbnail: '../assets/0.jpg' },
      { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
      { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
      { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
      { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
      { title: 'Hulk', thumbnail: '../assets/0.jpg' },
      { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
      { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
      { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
      { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
      { title: 'Hulk', thumbnail: '../assets/0.jpg' },
      { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
      { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
      { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
      { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
      { title: 'Hulk', thumbnail: '../assets/0.jpg' },
      { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
      { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
      { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
      { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
      { title: 'Hulk', thumbnail: '../assets/0.jpg' },
      { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
      { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
      { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
      { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' }
    ];

    return {heroes};
  }
}