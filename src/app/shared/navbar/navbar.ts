import { Component } from '@angular/core';
import { ThemeToggle } from "../../components/theme-toggle/theme-toggle";

@Component({
  selector: 'app-navbar',
  imports: [ThemeToggle],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
