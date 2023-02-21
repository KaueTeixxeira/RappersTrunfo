import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MeuServico } from 'src/app/app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor(private dadosCompartilhados: MeuServico, private route: Router) { }

  minhaArray: Array<Usuario> = new Array(new Usuario("Kauê","123"), new Usuario("Gabriel","321"));
  

  ngOnInit(): void {
    
  }

  usuario: string = "";
  senha: string = ""

 enviarDados() {
   this.minhaArray.forEach(usuario => {
     if (usuario.senha === this.senha && usuario.usuario === this.usuario) 
     {
      console.log(usuario) 
      this.dadosCompartilhados.atualizarDados(this.usuario, this.senha,0,0)
      this.route.navigate(['/main-page'])
    }
  });
  
}

}

class Usuario {
    
  usuario: string;
  senha: string

  constructor(usuario: string, senha: string) {
      this.usuario = usuario;
      this.senha = senha;  
  }

  mostrarDados(): void  {
      console.log(this)
  }

  mostraNome(): string {
    return this.usuario;
  }

 
}