import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { MeuServico } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private meuServico: MeuServico) {

  }
  ngOnInit(): void {
    // const playlist = ["assets/musicas/withoutMe.mp3", "assets/musicas/drDre.mp3", "assets/musicas/allEyezOnMe.mp3"]
    // this.tracks = playlist.map((path) => new Howl({src: path, volume: 0.5}))
    // this.tocar()
   
  }

  tracks: any;

  title = 'Angular';
  // tocar() {
  //   this.tracks[0].play();
  //   let currentTrack = 0;
  //   this.tracks[currentTrack].addEventListener('ended', () => {
  //     currentTrack++;
  //     if (currentTrack === this.tracks.length) {
  //       currentTrack = 0;
  //     }
  //     this.tracks[currentTrack].play();
  //   });
  // }
  
  
}
