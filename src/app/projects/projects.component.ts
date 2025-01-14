import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      name: 'Waste detection',
      description: `Computer Vision, Python, Tensorflow. Detection and classification of diverse type of waste as part of my semester project. Grade: 20/20. <br>
      <ul>
      <li>
      Developed a piece of code to test a pre-trained neural network (provided in checkpoints files), and evaluated its performances with classical metrics: 0.8 precision, 0.4 recall, 0.5 F1-score
      </li>
      <li>
      Built and cleaned a large dataset of∼ 4k pictures and implemented YOLO model (based on the oﬃcial research paper)
      </li>
      </ul>
      `,
      github: '',
      demo: '',
      doc: 'assets/docs/report.pdf'
    },
    {
      name: 'Text classifier',
      description: `NLP, Python, Scikit-Learn, Jupyter Notebook.
      <ul>
      <li>
      Explored various NLP tools & text preprocessing methods
      </li>
      <li>
      Compared several supervised models and picked the best one: obtained an accuracy > 95 %
      </li>
      </ul>`,
      github: 'https://github.com/thomasdiaconu/NLP_Project_Text_Classifier',
      demo: '',
      doc: ''
    },
    {
      name: 'Check the place',
      description: `Angular, TypeScript, JavaScript, HTML/CSS, Git.
      <ul>
      <li>
      Built an Angular web application for students where they can share places they visited
      </li>
      <li>
      Designed & implemented about 10 screens. Deployment on Azure Cloud for the presentation
      </li>
      </ul>`,
      github: 'https://github.com/thomasdiaconu/Web_Development_Project',
      demo: '',
      doc: ''
    },
    {
      name: 'Image labelling with VoTT',
      description: 'Python. A way to label images for computer vision using VoTT.',
      github: 'https://github.com/thomasdiaconu/Labelling_images_with_VoTT',
      demo: '',
      doc: ''
    },
    {
      name: 'Propagation of mechanical waves in muscles',
      description: `Python, LabView, Physics concepts.
      <ul>
      <li>
      Participated in the development of a software capable of analyzing the signal generated by the wave
      </li>
      <li>
      Measured the celerity of the wave & physically modelled the arm by a Melde rope
      </li>
      </ul>`,
      github: '',
      demo: '',
      doc: ''
    }
  ];

}
