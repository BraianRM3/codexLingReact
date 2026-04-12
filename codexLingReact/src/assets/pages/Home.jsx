import CourseCard from "../components/CourseCard";

function Home({ setPage }) {
  return (
    <div className="courses-container">

      <CourseCard
        title="HTML"
        icon="fab fa-html5"
        description="PROGRAMACIÓN ENFOCADA EN HIPERTEXTO"
        onClick={() => setPage("html")}
        type="html"
      />

      <CourseCard
        title="PYTHON"
        icon="fab fa-python"
        description="IA Y ANALISIS DE DATOS"
        onClick={() => setPage("python")}
        type="python"
      />

      <CourseCard
        title="JAVA"
        icon="fab fa-java"
        description="APLICACIONES EMPRESARIALES"
        onClick={() => setPage("java")}
        type="java"
      />

      <CourseCard
        title="PHP"
        icon="fab fa-php"
        description="BACKEND Y BASES DE DATOS"
        onClick={() => setPage("php")}
        type="php"
      />

    </div>
  );
}

export default Home;