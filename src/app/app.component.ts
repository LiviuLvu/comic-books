import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <my-comics></my-comics>
    <footer class="footer text-center">
      <p>View source code on <a href="https://github.com/LiviuLvu/comic-books" target="_blank">Github</a></p>
      <p>App built by <a href="https://liviulvu.github.io" target="_blank">Liviu Iancu</a></p>
      <p>Data provided by <a href="https://marvel.com/" target="_blank">Marvel.</a> © 2014 Marvel</p>
    </footer>
  `
})
export class AppComponent { }
