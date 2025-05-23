import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="scrolled">
      <div class="container">
        <div class="logo">
          <a href="#" class="logo-text">PVM</a>
        </div>
        <nav>
          <ul>
            <li><a href="#home" [class.active]="activeSection === 'home'">Home</a></li>
            <li><a href="#about" [class.active]="activeSection === 'about'">About</a></li>
            <li><a href="#skills" [class.active]="activeSection === 'skills'">Skills</a></li>
            <li><a href="#projects" [class.active]="activeSection === 'projects'">Projects</a></li>
            <li><a href="#contact" [class.active]="activeSection === 'contact'">Contact</a></li>
          </ul>
        </nav>
        <button class="mobile-toggle" (click)="toggleMobileMenu()">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="mobile-menu" [class.active]="mobileMenuOpen">
          <ul>
            <li><a href="#home" (click)="closeMobileMenu()">Home</a></li>
            <li><a href="#about" (click)="closeMobileMenu()">About</a></li>
            <li><a href="#skills" (click)="closeMobileMenu()">Skills</a></li>
            <li><a href="#projects" (click)="closeMobileMenu()">Projects</a></li>
            <li><a href="#contact" (click)="closeMobileMenu()">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  `,
  styles: `
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: var(--space-3) 0;
      transition: background-color var(--transition-normal), 
                  box-shadow var(--transition-normal), 
                  padding var(--transition-normal);
      background-color: rgba(255, 255, 255, 0);
    }
    
    header.scrolled {
    
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: var(--space-2) 0;
    }
    
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: rgba(225, 197, 234, 0.95);
    }
    
    .logo {
      font-size: 1.8rem;
      font-weight: 700;
    }
    
    .logo-text {
      color: var(--primary-500);
      font-weight: 700;
      transition: color var(--transition-fast);
    }
    
    .logo-text:hover {
      color: var(--primary-700);
    }
    
    nav ul {
      display: flex;
      gap: var(--space-4);
      margin: 0;
      padding: 0;
      list-style: none;
    }
    
    nav a {
      color: var(--neutral-800);
      font-weight: 500;
      position: relative;
      padding: var(--space-1) 0;
    }
    
    nav a:hover, nav a.active {
      color: var(--primary-500);
    }
    
    nav a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-500);
      transition: width var(--transition-fast);
    }
    
    nav a:hover::after, nav a.active::after {
      width: 100%;
    }
    
    .mobile-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 20px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
    }
    
    .mobile-toggle span {
      width: 100%;
      height: 2px;
      background-color: var(--neutral-800);
      transition: transform var(--transition-fast), opacity var(--transition-fast);
    }
    
    .mobile-menu {
      display: none;
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: var(--space-4) 0;
      transform: translateY(-100%);
      opacity: 0;
      transition: transform var(--transition-fast), opacity var(--transition-fast);
      z-index: 100;
    }
    
    .mobile-menu.active {
      transform: translateY(0);
      opacity: 1;
    }
    
    .mobile-menu ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .mobile-menu li {
      padding: var(--space-2) var(--space-4);
    }
    
    .mobile-menu a {
      display: block;
      color: var(--neutral-800);
      font-size: 1.2rem;
    }
    
    @media (max-width: 768px) {
      nav {
        display: none;
      }
      
      .mobile-toggle {
        display: flex;
      }
      
      .mobile-menu {
        display: block;
      }
    }
  `
})
export class HeaderComponent {
  scrolled = false;
  mobileMenuOpen = false;
  activeSection = 'home';
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
    this.detectActiveSection();
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  
  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
  
  detectActiveSection() {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 200;
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}