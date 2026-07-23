import ociCert from '../assets/certificates/oci.png'
import oneTechCert from '../assets/certificates/one-tech-advanced.jpg'
import dataEverywhereCert from '../assets/certificates/data-everywhere.jpg'
import gitGithubCert from '../assets/certificates/git-github.jpg'
import jsProfesionalCert from '../assets/certificates/js-profesional.jpg'
import promptEngineeringCert from '../assets/certificates/prompt-engineering.png'
import machineLearningCert from '../assets/certificates/machine-learning.jpg'
import pythonDataScienceCert from '../assets/certificates/python-data-science.jpg'

export const academic = {
  es: {
    institution: 'Tecnológico Nacional de México, Campus Celaya',
    degree: 'Ingeniería en Sistemas Computacionales',
  },
  en: {
    institution: 'Tecnológico Nacional de México, Campus Celaya',
    degree: 'Computer Systems Engineering',
  },
}

export const certifications = [
  { 
    id: 'cert-1', 
    provider: 'Oracle', 
    es: 'Oracle Cloud Infrastructure Certified Foundations Associate', 
    en: 'Oracle Cloud Infrastructure Certified Foundations Associate',
    image: ociCert,
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=8235771040327E8819C41D2ED360ED2EAC2BC533BBF2E85D18416B614A04293F'
  },
  { 
    id: 'cert-2', 
    provider: 'Alura Latam', 
    es: 'Programa ONE Tech Advanced', 
    en: 'ONE Tech Advanced Program',
    image: oneTechCert,
    link: 'https://app.aluracursos.com/program/certificate/b69a50a5-7618-4576-8b59-c5f744285c5c?lang'
  },
  { 
    id: 'cert-3', 
    provider: 'Coursera (Google)', 
    es: 'Foundations: Data, Data, Everywhere', 
    en: 'Foundations: Data, Data, Everywhere',
    image: dataEverywhereCert,
    link: 'https://www.coursera.org/account/accomplishments/verify/QMHJV4MGHALA'
  },
  { 
    id: 'cert-4', 
    provider: 'Desafío Latam', 
    es: 'Bases de GIT, GITHUB', 
    en: 'GIT, GITHUB Basics',
    image: gitGithubCert,
    link: 'https://cursos.desafiolatam.com/certificates/xqdfdhmgvq'
  },
  { 
    id: 'cert-5', 
    provider: 'Código Facilito', 
    es: 'Curso profesional de JavaScript', 
    en: 'Professional JavaScript Course',
    image: jsProfesionalCert,
    link: 'https://codigofacilito.com/certificates/fa55b4a6-6430-4185-bb4b-f82e0a222584'
  },
  { 
    id: 'cert-6', 
    provider: 'DeepLearning.AI', 
    es: 'ChatGPT Prompt Engineering for Developers!', 
    en: 'ChatGPT Prompt Engineering for Developers!',
    image: promptEngineeringCert,
    link: 'https://learn.deeplearning.ai/accomplishments/88b68e9f-4f10-453e-9d64-9122259e6d66?usp=sharing'
  },
  { 
    id: 'cert-7', 
    provider: 'Alura Latam', 
    es: 'Clasificación: aprendiendo a clasificar datos con Machine Learning', 
    en: 'Classification: learning to classify data with Machine Learning',
    image: machineLearningCert,
    link: 'https://app.aluracursos.com/user/Omarbg32/course/clasificacion-aprendiendo-clasificar-datos-machine-learning/certificate'
  },
  { 
    id: 'cert-8', 
    provider: 'Alura Latam', 
    es: 'Practicando Python para Data Science', 
    en: 'Practicing Python for Data Science',
    image: pythonDataScienceCert,
    link: 'https://app.aluracursos.com/user/Omarbg32/course/python-data-science-challenge-alura-store/certificate'
  },
]
