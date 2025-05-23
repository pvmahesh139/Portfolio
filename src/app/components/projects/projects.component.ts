import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">My Work</h2>
        <p class="section-subtitle">Check out some of my recent projects</p>
        
        <div class="filters">
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'all'"
            (click)="setFilter('all')">
            All
          </button>
          <button 
            *ngFor="let category of categories" 
            class="filter-btn" 
            [class.active]="activeFilter === category"
            (click)="setFilter(category)">
            {{ category }}
          </button>
        </div>
        
        <div class="projects-grid">
          <div 
            class="project-card" 
            *ngFor="let project of filteredProjects"
            [class.featured]="project.featured">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title" />
              <div class="project-overlay">
                <a [href]="project.link" target="_blank" class="btn">View Project</a>
              </div>
            </div>
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .projects {
      background-color: var(--neutral-100);
    }
    
    .filters {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-2);
      margin-bottom: var(--space-5);
    }
    
    .filter-btn {
      background: none;
      border: none;
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-md);
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--neutral-600);
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }
    
    .filter-btn:hover {
      background-color: var(--neutral-200);
      color: var(--primary-500);
    }
    
    .filter-btn.active {
      background-color: var(--primary-500);
      color: white;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--space-4);
      margin-top: var(--space-5);
    }
    
    .project-card {
      background-color: white;
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    }
    
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .project-card.featured {
      grid-column: span 2;
    }
    
    .project-image {
      height: 200px;
      position: relative;
    }
    
    .featured .project-image {
      height: 300px;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .project-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-normal);
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-info {
      padding: var(--space-3);
    }
    
    .project-title {
      font-size: 1.2rem;
      margin-bottom: var(--space-2);
      color: var(--neutral-800);
    }
    
    .project-description {
      font-size: 0.95rem;
      color: var(--neutral-600);
      margin-bottom: var(--space-3);
    }
    
    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-1);
    }
    
    .tag {
      font-size: 0.8rem;
      padding: var(--space-1) var(--space-2);
      background-color: var(--primary-50);
      color: var(--primary-500);
      border-radius: var(--radius-sm);
    }
    
    .see-more {
      margin-top: var(--space-6);
      text-align: center;
    }
    
    @media (max-width: 768px) {
      .project-card.featured {
        grid-column: span 1;
      }
      
      .featured .project-image {
        height: 200px;
      }
    }
  `
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Rentastico',
      description: 'Rentastico – Global Vacation Rental & Travel Booking Platform',
      image: 'https://www.egochi.com/wp-content/uploads/2023/07/online-travel-booking-9773fcdc59.jpg',
      tags: ['Angular', 'TypeScript', 'CSS3', 'HTML5','Ionic Frameworks','Github','Client Project'],
      category: 'Web App',
      link: '#',
      featured: true
    }, 
    {
      id: 5,
      title: 'Coffee Shop Website',
      description: 'Branding and website design for a local coffee shop with beautiful ambience.',
      image: 'https://smalltownwashington.com/wp-content/uploads/2020/12/shutterstock_1415138246-scaled.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Boostrap','Personal Project'],
      category: 'Web site',
      link: '#',
      featured: false
    },
    {
      id: 2,
      title: 'Presume',
      description: ' AI-Powered Resume Optimization Tool',
      image: 'https://finezcv.com/images/home/workspace.png',
      tags: ['Angular', 'TypeScript', 'CSS3', 'HTML5','Ionic Frameworks','Bit Bucket','Client Project'],
      category: 'Web App',
      link: '#',
      featured: true
    },
    {
      id: 4,
      title: 'E-KYC System',
      description: 'A blockchain-based E-KYC system that ensures secure, transparent, and privacy-preserving identity verification through decentralized data sharing and smart contracts.',
      image: 'https://rpacpc.com/wp-content/uploads/2022/12/kyc.jpg',
      tags: ['HTML', 'CSS', 'Javascript','Angular','Node.js','Personal Project'],
      category: 'Web site',
      link: '#',
      featured: false
    },
    {
      id: 3,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for managing online store operations with real-time analytics.',
      image: 'https://i0.wp.com/themes.svn.wordpress.org/clothing-store/3.0/screenshot.png?w=1144&strip=all',
      tags: ['Angular', 'TypeScript', 'CSS3', 'HTML5','Ionic Frameworks','Personal Project'],
      category: 'Web App',
      link: '#',
      featured: true
    },
    
    // {
    //   id: 3,
    //   title: 'Travel Blog',
    //   description: 'A responsive blog showcasing travel stories with a modern design and interactive maps.',
    //   image: 'https://images.pexels.com/photos/4507967/pexels-photo-4507967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   tags: ['HTML5', 'CSS3', 'JavaScript', 'Mapbox'],
    //   category: 'Website',
    //   link: '#',
    //   featured: false
    // },
    // {
    //   id: 4,
    //   title: 'Fitness Tracker',
    //   description: 'A workout tracking application with progress visualization and personal goal setting.',
    //   image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   tags: ['Angular', 'TypeScript', 'MongoDB', 'Node.js'],
    //   category: 'Web App',
    //   link: '#',
    //   featured: true
    // },
    
    // {
    //   id: 6,
    //   title: 'Weather Application',
    //   description: 'Real-time weather updates with location-based forecasts and interactive visualizations.',
    //   image: 'https://images.pexels.com/photos/7662511/pexels-photo-7662511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   tags: ['JavaScript', 'API Integration', 'CSS3'],
    //   category: 'Web App',
    //   link: '#',
    //   featured: false
    // }
  ];
  
  categories: string[] = Array.from(new Set(this.projects.map(project => project.category)));
  activeFilter = 'all';
  filteredProjects: Project[] = this.projects;
  
  setFilter(filter: string) {
    this.activeFilter = filter;
    
    if (filter === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === filter);
    }
  }
}