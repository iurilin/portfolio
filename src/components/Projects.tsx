import ProjectCard from "./ProjectCard";

const Projects = () => {
  // Dados de exemplo - você pode substituir pelos seus projetos reais
  const projects = [
    {
      id: "1",
      title: "Biblioteca Pessoal",
      description: "Biblioteca pessoal desenvolvida para arquivar livros",
      longDescription: "Uma aplicação completa desenvolvida com Spring Boot no backend e React no frontend. Inclui funcionalidades como salvar livros e alterar seus status de 'lido', 'lendo' e 'quero ler'. Uma API foi desenvolvida para consumir outra API do Google 'Google Books', em seguida foi feito o tratamento de dados dos livros trazidos pela api, junto de todo um desenvolvimento de endpoints para todo tipo de busca e salvamento dos livros no bando de dados.",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
      githubUrl: "https://github.com/iurilin/react-library"
    },
    {
      id: "2",
      title: "Banco de Tintas",
      description: "Sistema de coleta e doacao de tintas para pessoas carentes e orgaos publicos",
      longDescription: "Sistema desenvolvido como atividade curricular feito em grupo. O sistema oferece uma solução prática e funcional para usuários e administradores. Também possui funcionalidade de cadastros de usuários, funções para retirar tintas que estão disponíveis no catálogo e realizar doações. Sistema completo para administradores, podendo aceitar pedidos de retirada e autorizar doações.",
      technologies: ["PHP", "JavaScript", "phpMyAdmin"],
      githubUrl: "https://github.com/iurilin/Banco-de-Tintas"
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          Meus Projetos
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Conheça alguns dos projetos que desenvolvi utilizando diferentes tecnologias e arquiteturas
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;