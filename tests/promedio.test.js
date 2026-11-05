const { calcularPromedio } = require("../src/promedio");

describe("Pruebas del cálculo de promedio", () => {
    test("Debe calcular correctamente el promedio", () => {
        expect(calcularPromedio(14, 16, 18)).toBe(16);
    });

    test("Debe rechazar notas superiores a 20", () => {
        expect(() => calcularPromedio(15, 21, 18)).toThrow();
    });

    test("Debe rechazar notas negativas", () => {
        expect(() => calcularPromedio(15, -2, 18)).toThrow();
    });
});
