import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculationService {

    calculateHa(km1: number, km2: number, km3: number, km4: number) {
        const productionHa = this.getArea(km1, km3, km2, km4);
        return productionHa;
    }

    private getArea(km1: number, km3: number, km2: number, km4: number) {
        const base = (km1 + km3) / 2;
        const height = (km2 + km4) / 2;
        const resultVal = base * height;
        const area = resultVal * 100;
        return area;
    }

    calculateBurnArea(km1: number, km2: number, km3: number, km4: number, totalHa: number) {
        const burnedAreaHa = this.getArea(km1, km3, km2, km4);
        const percentage = (burnedAreaHa / totalHa) * 100;
        return percentage.toFixed(2);
    }

    calculateCredit(etanol: number, cFactor: number, grade: number) {
        const mj = etanol * cFactor;
        const certification = mj * grade;
        const result = certification / 1000000;
        return { mj, credit: result};
    }

    
}