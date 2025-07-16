
const malla = [
  {
    ciclo: "Ciclo 1",
    cursos: [
      { id: "biologia", nombre: "Biología Celular y Molecular", requisitos: [] },
      { id: "fisica", nombre: "Física Médica", requisitos: [] },
      { id: "filosofia", nombre: "Introducción a la Filosofía", requisitos: [] },
      { id: "matematica", nombre: "Matemática Médica", requisitos: [] },
      { id: "metodologia1", nombre: "Metodología de la Investigación Científica I", requisitos: [] },
      { id: "quimica", nombre: "Química Médica", requisitos: [] }
    ]
  },
  {
    ciclo: "Ciclo 2",
    cursos: [
      { id: "anatomia", nombre: "Anatomía Humana", requisitos: ["biologia"] },
      { id: "embriologia", nombre: "Embriología", requisitos: ["biologia"] },
      { id: "fisicoquimica", nombre: "Fisicoquímica", requisitos: ["quimica", "fisica", "matematica"] },
      { id: "iniciacion", nombre: "Iniciación a la Clínica", requisitos: [] },
      { id: "historia", nombre: "Introducción a la Historia", requisitos: [] },
      { id: "teologia", nombre: "Introducción a la Teología", requisitos: [] },
      { id: "persona", nombre: "Persona y Sociedad", requisitos: ["filosofia"] }
    ]
  },
  {
    ciclo: "Ciclo 3",
    cursos: [
      { id: "bioestadistica1", nombre: "Bioestadística I", requisitos: ["metodologia1", "matematica"] },
      { id: "bioquimica", nombre: "Bioquímica y Nutrición", requisitos: ["fisicoquimica", "biologia"] },
      { id: "etica", nombre: "Ética Ciudadana", requisitos: ["persona"] },
      { id: "genetica", nombre: "Genética", requisitos: ["embriologia"] },
      { id: "histologia", nombre: "Histología", requisitos: ["anatomia", "embriologia"] },
      { id: "neuro", nombre: "Introducción a la Neurociencia", requisitos: ["anatomia"] }
    ]
  },
  {
    ciclo: "Ciclo 4",
    cursos: [
      { id: "bioetica1", nombre: "Bioética I", requisitos: ["etica", "genetica"] },
      { id: "fisiologia", nombre: "Fisiología", requisitos: ["bioquimica", "histologia", "neuro", "genetica"] },
      { id: "micro", nombre: "Microbiología", requisitos: ["bioquimica", "histologia"] },
      { id: "parasito", nombre: "Parasitología", requisitos: ["bioquimica", "histologia"] },
      { id: "teologia2", nombre: "Teología y Vida Cristiana", requisitos: ["teologia"] }
    ]
  },
  {
    ciclo: "Ciclo 5",
    cursos: [
      { id: "deonto", nombre: "Deontología Médica y de los Servicios de Salud", requisitos: ["bioetica1", "teologia2"] },
      { id: "farmaco", nombre: "Farmacología", requisitos: ["fisiologia", "micro", "parasito"] },
      { id: "histmed", nombre: "Historia de la Medicina", requisitos: ["historia"] },
      { id: "psicopato", nombre: "Introducción a la Psicopatología", requisitos: ["neuro"] },
      { id: "labclinico", nombre: "Laboratorio Clínico", requisitos: ["fisiologia", "micro", "parasito"] },
      { id: "preventiva", nombre: "Medicina Preventiva y Comunitaria", requisitos: ["bioestadistica1", "micro", "parasito"] },
      { id: "metodologia2", nombre: "Metodología de la Investigación Científica II", requisitos: ["bioestadistica1"] }
    ]
  },
  {
    ciclo: "Ciclo 6",
    cursos: [
      { id: "aproximacion", nombre: "Aproximación al Diagnóstico Clínico", requisitos: ["farmaco", "labclinico", "deonto", "psicopato"] },
      { id: "imagenes", nombre: "Diagnóstico por Imágenes", requisitos: ["farmaco", "labclinico"] },
      { id: "clinica1", nombre: "Introducción a la Clínica Médica", requisitos: ["farmaco", "labclinico", "deonto", "psicopato", "iniciacion"] },
      { id: "patologia", nombre: "Patología General", requisitos: ["farmaco", "labclinico"] }
    ]
  },
  {
    ciclo: "Ciclo 7",
    cursos: [
      { id: "medica1", nombre: "Clínica Médica I", requisitos: ["clinica1", "aproximacion", "imagenes", "patologia", "metodologia2", "histmed"] },
      { id: "gerencia1", nombre: "Gerencia en Salud I", requisitos: ["clinica1", "aproximacion", "imagenes", "patologia", "preventiva"] }
    ]
  },
  {
    ciclo: "Ciclo 8",
    cursos: [
      { id: "medica2", nombre: "Clínica Médica II", requisitos: ["clinica1", "aproximacion", "imagenes", "patologia", "metodologia2", "histmed"] },
      { id: "gerencia2", nombre: "Gerencia en Salud II", requisitos: ["gerencia1"] }
    ]
  },
  {
    ciclo: "Ciclo 9",
    cursos: [
      { id: "bioestadistica2", nombre: "Bioestadística II", requisitos: ["medica1", "medica2"] },
      { id: "cirugia1", nombre: "Cirugía I", requisitos: ["medica1", "medica2"] },
      { id: "geriatria", nombre: "Geriatría", requisitos: ["medica1", "medica2"] },
      { id: "rehab", nombre: "Medicina Física y Rehabilitación", requisitos: ["medica1", "medica2"] },
      { id: "tesis1", nombre: "Tesis I", requisitos: ["medica1", "medica2"] }
    ]
  },
  {
    ciclo: "Ciclo 10",
    cursos: [
      { id: "cirugia2", nombre: "Cirugía II", requisitos: ["cirugia1", "rehab"] },
      { id: "epidemio", nombre: "Epidemiología", requisitos: ["bioestadistica2", "gerencia2"] },
      { id: "lengua1", nombre: "Lengua y Comunicación I", requisitos: ["tesis1"] },
      { id: "psiquiatria", nombre: "Psiquiatría", requisitos: ["medica1", "medica2", "geriatria"] }
    ]
  },
  {
    ciclo: "Ciclo 11",
    cursos: [
      { id: "bioetica2", nombre: "Bioética II", requisitos: ["tesis1"] },
      { id: "lengua2", nombre: "Lengua y Comunicación II", requisitos: ["lengua1"] },
      { id: "legal", nombre: "Medicina Legal", requisitos: ["lengua1", "psiquiatria", "cirugia2", "epidemio"] },
      { id: "pediatria", nombre: "Pediatría", requisitos: ["lengua1", "psiquiatria", "cirugia2", "epidemio"] }
    ]
  },
  {
    ciclo: "Ciclo 12",
    cursos: [
      { id: "comunidad", nombre: "Atención Integral a la Comunidad", requisitos: ["bioetica2", "legal", "pediatria"] },
      { id: "economia", nombre: "Economía de la Salud", requisitos: ["bioetica2", "legal", "pediatria"] },
      { id: "articulos", nombre: "Escritura de Artículos Científicos", requisitos: ["bioetica2", "lengua2"] },
      { id: "gineco", nombre: "Ginecología y Obstetricia", requisitos: ["bioetica2", "lengua2", "legal", "pediatria"] },
      { id: "tesis2", nombre: "Tesis II", requisitos: ["bioetica2", "lengua2"] }
    ]
  },
  {
    ciclo: "Ciclo 13",
    cursos: [
      { id: "internado1", nombre: "Internado I", requisitos: ["comunidad", "economia", "articulos", "gineco", "tesis2"] },
      { id: "internado2", nombre: "Internado II", requisitos: ["comunidad", "economia", "articulos", "gineco", "tesis2"] }
    ]
  },
  {
    ciclo: "Ciclo 14",
    cursos: [
      { id: "internado3", nombre: "Internado III", requisitos: ["internado1", "internado2"] },
      { id: "internado4", nombre: "Internado IV", requisitos: ["internado1", "internado2"] }
    ]
  }
];
