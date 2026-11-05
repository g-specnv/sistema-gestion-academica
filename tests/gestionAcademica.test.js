const { SistemaGestionAcademica } = require("../src/gestionAcademica");

describe("Pruebas del sistema académico", () => {
    test("Debe registrar un estudiante y guardarlo en la colección", () => {
        const sistema = new SistemaGestionAcademica();
        const estudiante = sistema.registrarEstudiante("Ana Torres", "2026002", "ana@gmail.com");
        expect(estudiante.nombre).toBe("Ana Torres");
        expect(estudiante.estado).toBe("Registrado");
        expect(sistema.obtenerTodosLosEstudiantes().length).toBe(1);
    });

    test("Debe consultar un estudiante registrado", () => {
        const sistema = new SistemaGestionAcademica();
        sistema.registrarEstudiante("Luis Ramos", "2026003", "luis@gmail.com");
        const estudiante = sistema.consultarEstudiante("2026003");
        expect(estudiante.nombre).toBe("Luis Ramos");
        expect(estudiante.codigo).toBe("2026003");
    });

    test("Debe registrar calificaciones y calcular el promedio", () => {
        const sistema = new SistemaGestionAcademica();
        sistema.registrarEstudiante("Mario Diaz", "2026004", "mario@gmail.com");
        const estudiante = sistema.registrarCalificacion("2026004", 12, 14, 16);
        expect(estudiante.promedio).toBe(14);
        expect(estudiante.calificaciones[0]).toBe(12);
        expect(estudiante.calificaciones[1]).toBe(14);
        expect(estudiante.calificaciones[2]).toBe(16);
    });
});
