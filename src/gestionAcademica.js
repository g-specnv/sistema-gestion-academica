const { registrarEstudiante } = require("./estudiante");
const { calcularPromedio } = require("./promedio");

class SistemaGestionAcademica {
    constructor() {
        this.estudiantes = [];
    }

    registrarEstudiante(nombre, codigo, correo) {
        const estudiante = registrarEstudiante(nombre, codigo, correo);
        const existente = this.estudiantes.find(item => item.codigo === codigo);

        if (existente) {
            throw new Error("El estudiante ya está registrado");
        }

        this.estudiantes.push({ ...estudiante, calificaciones: [] });
        return estudiante;
    }

    consultarEstudiante(codigo) {
        const estudiante = this.estudiantes.find(item => item.codigo === codigo);
        if (!estudiante) throw new Error("Estudiante no encontrado");
        return estudiante;
    }

    registrarCalificacion(codigo, nota1, nota2, nota3) {
        const estudiante = this.consultarEstudiante(codigo);
        const promedio = calcularPromedio(nota1, nota2, nota3);
        estudiante.calificaciones = [nota1, nota2, nota3];
        estudiante.promedio = promedio;
        return estudiante;
    }

    obtenerTodosLosEstudiantes() {
        return this.estudiantes;
    }
}

module.exports = { SistemaGestionAcademica };
