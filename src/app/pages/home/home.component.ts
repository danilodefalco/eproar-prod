import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AngularFireAuth } from "@angular/fire/auth";
import { NgBrazilValidators } from "ng-brazil";
import { utilsBr } from "js-brasil";
import { ToastrService } from "ngx-toastr";

import { Area } from "src/app/models/area.model";

import { AreaService } from "src/app/services/area.service";
import { CalculationService } from "src/app/services/calculation.service";

@Component({
	selector: "app-home",
	templateUrl: "home.component.html",
	styleUrls: ["home.component.css"],
})
export class HomeComponent implements OnInit {
	form: FormGroup;
	area: Area;
	MASKS = utilsBr.MASKS;

	model = "Vazio";
	model2 = "Vazio";

	calcarioCalciticoValidation: number = 100;
	calcarioCalciticoValidationResult: number = 100;

	calcarioDolomoticoValidation: number = 100;
	calcarioDolomoticoValidationResult: number = 100;

	gessoValidation: number = 100;
	gessoValidationResult: number = 100;

	ureiaValidation: number = 100;
	ureiaValidationResult: number = 100;

	map1Validation: number = 100;
	map1ValidationResult: number = 100;

	map2Validation: number = 100;
	map2ValidationResult: number = 100;

	dap1Validation: number = 100;
	dap1ValidationResult: number = 100;

	dap2Validation: number = 100;
	dap2ValidationResult: number = 100;

	nitratoAmonioValidation: number = 100;
	nitratoAmonioValidationResult: number = 100;

	uanValidation: number = 100;
	uanValidationResult: number = 100;

	amoniaAnidraValidation: number = 100;
	amoniaAnidraValidationResult: number = 100;

	sulfatoAmonioValidation: number = 100;
	sulfatoAmonioValidationResult: number = 100;

	canValidation: number = 100;
	canValidationResult: number = 100;

	sspValidation: number = 100;
	sspValidationResult: number = 100;

	tspValidation: number = 100;
	tspValidationResult: number = 100;

	kciValidation: number = 100;
	kciValidationResult: number = 100;

	vinhacaValidation: number = 100;
	vinhacaValidationResult: number = 100;

	tortaFiltroBaseUmidaValidation: number = 100;
	tortaFiltroBaseUmidaValidationResult: number = 100;

	cinzasFuligemBaseUmidaValidation: number = 100;
	cinzasFuligemBaseUmidaValidationResult: number = 100;

	dieselB8Validation: number = 100;
	dieselB8ValidationResult: number = 100;

	dieselB10Validation: number = 100;
	dieselB10ValidationResult: number = 100;

	dieselBxValidation: number = 100;
	dieselBxValidationResult: number = 100;

	dieselB20Validation: number = 100;
	dieselB20ValidationResult: number = 100;

	dieselB30Validation: number = 100;
	dieselB30ValidationResult: number = 100;

	biodieselB100Validation: number = 100;
	biodieselB100ValidationResult: number = 100;

	gasolinaValidation: number = 100;
	gasolinaValidationResult: number = 100;

	etanolValidation: number = 100;
	etanolValidationResult: number = 100;

	biometranoTerceirosValidation: number = 100;
	biometranoTerceirosValidationResult: number = 100;

	biometranoProprioValidation: number = 100;
	biometranoProprioValidationResult: number = 100;

	eletricidadeRedeValidation: number = 100;
	eletricidadeRedeValidationResult: number = 100;

	eletricidadePchValidation: number = 100;
	eletricidadePchValidationResult: number = 100;

	eletricidadeBiomassaValidation: number = 100;
	eletricidadeBiomassaValidationResult: number = 100;

	eletricidadeEolicaValidation: number = 100;
	eletricidadeEolicaValidationResult: number = 100;

	eletricidadeSolarValidation: number = 100;
	eletricidadeSolarValidationResult: number = 100;

	constructor(
		private afAuth: AngularFireAuth,
		private fb: FormBuilder,
		private areaService: AreaService,
		private toastrService: ToastrService,
		private calculationService: CalculationService
	) {
		this.form = this.fb.group({
			car: ["", Validators.required],
			nomeProdutor: ["", Validators.required],
			responsavel: ["", Validators.required],
			responsavelCpf: ["", NgBrazilValidators.cpf],
			nome_ap1: [" "],
			ap1: ["0"],
			ap2: ["0"],
			ap3: ["0"],
			ap4: ["0"],
			sistemaPlantio: ["convencional"],
			totalProduzido: ["0"],
			producaoHa: ["0"],
			aq1: ["0"],
			aq2: ["0"],
			aq3: ["0"],
			aq4: ["0"],
			porcentagemAreaQueimada: ["0"],
			calcarioCalcitico: ["0"],
			calcarioDolomotico: ["12"],
			gesso: ["5"],
			ureia: ["2"],
			map1: ["0"],
			map2: ["0"],
			dap1: ["0"],
			dap2: ["0"],
			nitratoAmonio: ["0"],
			uan: ["0"],
			amoniaAnidra: ["0"],
			sulfatoAmonio: ["0"],
			can: ["0"],
			ssp: ["1"],
			tsp: ["0"],
			kci: ["2"],
			vinhaca: ["1000"],
			tortaFiltroBaseUmida: ["42.8"],
			cinzasFuligemBaseUmida: ["10.1"],

			dieselB8: ["0"],
			dieselB10: ["6"],
			dieselBx: ["0"],
			dieselB20: ["0"],
			dieselB30: ["0"],
			biodieselB100: ["0"],
			gasolina: ["0"],
			etanol: ["0"],
			biometranoTerceiros: ["0"],
			biometranoProprio: ["0"],
			eletricidadeRede: ["0"],
			eletricidadePch: ["0"],
			eletricidadeBiomassa: ["0"],
			eletricidadeEolica: ["0"],
			eletricidadeSolar: ["0"],
			gradeP: ["0"],
			gradeB: ["0"],
			grade: ["0"],
			cFactor: ["0"],
			prod: ["0"],
			totalEtanolProduzidoLitros: ["0"],
			totalMj: ["0"],
			totalCreditoCarbono: ["0"],
		});
	}

	ngOnInit(): void {}

	insert() {
		const date = new Date();

		this.area = Object.assign({}, this.area, this.form.value);
		this.area.dataInsercao = date.toString();

		this.afAuth.user.subscribe((data) => {
			if (data) this.area.email = data.email;

			this.areaService
				.insert(this.area)
				.then(() => {
					this.success();
				})
				.catch((err) => {
					this.error();
				});
		});
	}

	success() {
		this.form.reset();
		this.toastrService.success("Sucesso", "Área inserida com sucesso!", {
			progressBar: true,
		});
	}

	error() {
		this.toastrService.error("Erro", "Erro ao inserir a área!", {
			progressBar: true,
		});
	}

	calculateHaProduction() {
		let ap1 = Number(this.form.controls.ap1.value);
		const ap2 = Number(this.form.controls.ap2.value);
		const ap3 = Number(this.form.controls.ap3.value);
		const ap4 = Number(this.form.controls.ap4.value);
		ap1 = ap1 == 0 ? ap3 : ap1;
		const productionHa = this.calculationService.calculateHa(
			ap1,
			ap2,
			ap3,
			ap4
		);

		if (ap1 == ap2 && ap1 == ap3 && ap1 == ap4) this.model = "Quadrado";
		else if (ap1 == ap3 && ap2 == ap4) this.model = "Retângulo";
		else this.model = "Trapezoidal";

		this.form.patchValue({
			producaoHa: productionHa.toString(),
		});
	}

	calculateBurnArea() {
		let aq1 = Number(this.form.controls.aq1.value);
		const aq2 = Number(this.form.controls.aq2.value);
		const aq3 = Number(this.form.controls.aq3.value);
		const aq4 = Number(this.form.controls.aq4.value);
		aq1 = aq1 == 0 ? aq3 : aq1;

		if (aq1 == aq2 && aq1 == aq3 && aq1 == aq4) this.model2 = "Quadrado";
		else if (aq1 == aq3 && aq2 == aq4) this.model2 = "Retângulo";
		else this.model2 = "Trapezoidal";

		const producaoHa = Number(this.form.controls.producaoHa.value);

		const result = this.calculationService.calculateBurnArea(
			aq1,
			aq2,
			aq3,
			aq4,
			producaoHa
		);

		this.form.patchValue({
			porcentagemAreaQueimada: result.toString(),
		});

		if (Number(result) > 100) {
			this.form.controls.porcentagemAreaQueimada.setErrors({
				invaliValue: true,
			});
		}
	}

	calculateCredit() {
		const str = this.form.controls.totalProduzido.value;
		const totalProduzido = this.numberFromString(str);

		const prod = 0.693;

		const tProduction = totalProduzido * prod;

		const gradeKg = this.calculateGrade();

		const cFactor = 21.35;

		const { mj, credit } = this.calculationService.calculateCredit(
			tProduction,
			gradeKg,
			cFactor
		);

		const grade = gradeKg;

		this.form.patchValue({
			totalMj: mj.toFixed(2),
			totalCreditoCarbono: credit.toFixed(2),
			cFactor: cFactor.toFixed(2),
			prod: prod.toFixed(2),
			grade: grade.toFixed(2),
			totalEtanolProduzidoLitros: tProduction.toFixed(2),
		});
	}

	calculateGrade(): number {
		const totalProduzido = this.numberFromString(
			this.form.controls.totalProduzido
		);
		const ocupTotal = 1000 / totalProduzido;
		const producaoHa = this.numberFromString(this.form.controls.producaoHa);
		const porcentagemAreaQueimada = this.numberFromString(
			this.form.controls.porcentagemAreaQueimada
		);
		const calcarioCalcitico = this.numberFromString(
			this.form.controls.calcarioCalcitico
		);
		const calcarioDolomotico = this.numberFromString(
			this.form.controls.calcarioDolomotico
		);
		const gesso = this.numberFromString(this.form.controls.gesso);
		const ureia = this.numberFromString(this.form.controls.ureia);
		const map1 = this.numberFromString(this.form.controls.map1);
		const map2 = this.numberFromString(this.form.controls.map2);
		const dap1 = this.numberFromString(this.form.controls.dap1);
		const dap2 = this.numberFromString(this.form.controls.dap2);
		const nitratoAmonio = this.numberFromString(
			this.form.controls.nitratoAmonio
		);
		const uan = this.numberFromString(this.form.controls.uan);
		const amoniaAnidra = this.numberFromString(this.form.controls.amoniaAnidra);
		const sulfatoAmonio = this.numberFromString(
			this.form.controls.sulfatoAmonio
		);
		const can = this.numberFromString(this.form.controls.can);
		const ssp = this.numberFromString(this.form.controls.ssp);
		const tsp = this.numberFromString(this.form.controls.tsp);
		const kci = this.numberFromString(this.form.controls.kci);
		const calcarioCalcitico_co2 = calcarioCalcitico * 36.83563798;
		const calcarioDolomotico_co2 = calcarioDolomotico * 36.83563798;
		const gesso_co2 = gesso * 2.828874328;
		const ureia_co2 = ureia * 3211.214236;
		const map1_co2 = map1 * 3262.505401;
		const map2_co2 = map2 * 1662.291328;
		const dap1_co2 = dap1 * 3369.912128;
		const dap2_co2 = dap2 * 1446.517986;
		const nitratoAmonio_co2 = nitratoAmonio * 8226.573955;
		const uan_co2 = uan * 5696.988524;
		const amoniaAnidra_co2 = amoniaAnidra * 1976.070208;
		const sulfatoAmonio_co2 = sulfatoAmonio * 1803.342554;
		const can_co2 = can * 8313.160793;
		const ssp_co2 = ssp * 2367.656417;
		const tsp_co2 = tsp * 1876.382174;
		const kci_co2 = kci * 455.2077609;
		const agrotoxico_co2 = ocupTotal * 11556.16278;
		const vinhaca = this.numberFromString(this.form.controls.vinhaca);
		const tortaFiltroBaseUmida = this.numberFromString(
			this.form.controls.tortaFiltroBaseUmida
		);
		const cinzasFuligemBaseUmida = this.numberFromString(
			this.form.controls.cinzasFuligemBaseUmida
		);
		const org_background_co2 =
			calcarioCalcitico_co2 +
			calcarioDolomotico_co2 +
			gesso_co2 +
			ureia_co2 +
			map1_co2 +
			map2_co2 +
			dap1_co2 +
			dap2_co2 +
			nitratoAmonio_co2 +
			uan_co2 +
			amoniaAnidra_co2 +
			sulfatoAmonio_co2 +
			can_co2 +
			ssp_co2 +
			tsp_co2 +
			kci_co2 +
			agrotoxico_co2;
		const dieselB8 = this.numberFromString(this.form.controls.dieselB8);
		const dieselB10 = this.numberFromString(this.form.controls.dieselB10);
		const dieselBx = this.numberFromString(this.form.controls.dieselBx);
		const dieselB20 = this.numberFromString(this.form.controls.dieselB20);
		const dieselB30 = this.numberFromString(this.form.controls.dieselB30);
		const biodieselB100 = this.numberFromString(
			this.form.controls.biodieselB100
		);
		const gasolina = this.numberFromString(this.form.controls.gasolina);
		const etanol = this.numberFromString(this.form.controls.etanol);
		const biometranoTerceiros = this.numberFromString(
			this.form.controls.biometranoTerceiros
		);
		const biometranoProprio = this.numberFromString(
			this.form.controls.biometranoProprio
		);
		const eletricidadeRede = this.numberFromString(
			this.form.controls.eletricidadeRede
		);
		const eletricidadePch = this.numberFromString(
			this.form.controls.eletricidadePch
		);
		const eletricidadeBiomassa = this.numberFromString(
			this.form.controls.eletricidadeBiomassa
		);
		const eletricidadeEolica = this.numberFromString(
			this.form.controls.eletricidadeEolica
		);
		const eletricidadeSolar = this.numberFromString(
			this.form.controls.eletricidadeSolar
		);

		//Dados Uteis
		const metanoFossil: number = 30;
		const metanoBiol: number = 20;
		const oxidoNitroso: number = 265;

		//Inicio do DE até o DO na planilha

		const dados_diesel = dieselB8 * 556.129305860248;
		const dados_gasolina = gasolina * 839.488351836803;
		const dados_eletricidademix = eletricidadeRede * 145.8018;
		const dados_eletricidadephc = eletricidadePch * 4.254212726;
		const dados_eletricidadebio = eletricidadeBiomassa * 79.29210189;
		const dados_eletricidadeeoli = eletricidadeEolica * 147.3816699;
		const dados_eletricidadesolar = eletricidadeSolar * 80.72776028;

		const sumDebyDo =
			dados_diesel +
			986.8901343925 +
			dados_gasolina +
			547.120383838285 +
			0 +
			7.5 +
			dados_eletricidademix +
			dados_eletricidadephc +
			dados_eletricidadebio +
			dados_eletricidadeeoli +
			dados_eletricidadesolar;

		//FIM do DE até o DO na planilha

		//Inicio BH6:CE6 na Planilha

		const dados_calcarioCal = calcarioCalcitico * 36.8356379790394;
		const dados_calcarioDolo = calcarioDolomotico * 36.8356379790394;
		const dados_gesso = gesso * 2.828874328;
		const dados_nureia = ureia * 3211.214236;
		const dados_mapfosfato = map1 * 3262.505401;
		const dados_mapmono = map2 * 1662.291328;
		const dados_dapfosfato = dap1 * 3369.912128;
		const dados_dapdiamonico = dap2 * 1446.517986;
		const dados_nitratoamonia = nitratoAmonio * 8226.573955;
		const dados_uan = uan * 5696.988524;
		const dados_amonioandro = amoniaAnidra * 1976.070208;
		const dados_sulfatoanomi = sulfatoAmonio * 1803.342554;
		const dados_can = can * 8313.160793;
		const dados_nitratocalcio = 2780.359537;
		const dados_ssp = ssp * 2367.656417;
		const dados_tsp = tsp * 1876.382174;
		const dados_kci = kci * 455.2077609;
		const dados_noutros = 3211.214236;
		const dados_p2outros = 2367.656417;
		const dados_k2outros = 455.2077609;
		const dados_vinhaca = 0;
		const dados_tortafiltro = 0;
		const dados_cinzasfuligem = 0;
		const dados_outrosfert = 0;

		//CE6 Agrotoxico
		const fatorproducao = (producaoHa / totalProduzido) * 100;
		const fatorMultiplicador = (1 / fatorproducao) * 1000;

		const fator_gisofato = 0.174118267490213;
		const fator_pesticidas = 0.510768020878643;
		const fator_hexazinona = 0.00737932248803828;
		const fator_tebuthiuron = 0.17491467014644;
		const fator_oxifluorfen = 0.00447231665941714;
		const fator_diuron = 0.0093173263737857;
		const fator_herbicida = 0.0465866318689285;
		const fator_hexaron = 0.0261630524575903;
		const fator_ametrina = 0.0465866318689285;
		const fator_thiamethoxan = 0.0093173263737857;
		const fator_mirex = 0.0000698799478033928;
		const fator_fipronil = 0.0340512013919095;
		const fator_regent = 0.00186346527475714;
		const fator_nortox = 0.0375488252863564;

		const dados_gisofato = fator_gisofato * 11505.70656 * fatorMultiplicador;
		const dados_pestiscidas =
			fator_pesticidas * 10742.52139 * fatorMultiplicador;
		const dados_hexazinona =
			fator_hexazinona * 10742.52139 * fatorMultiplicador;
		const dados_tebuthiuron =
			fator_tebuthiuron * 10742.52139 * fatorMultiplicador;
		const dados_oxifluorfen =
			fator_oxifluorfen * 10742.52139 * fatorMultiplicador;
		const dados_diuron = fator_diuron * 10742.52139 * fatorMultiplicador;
		const dados_herbicida = fator_herbicida * 10742.52139 * fatorMultiplicador;
		const dados_hexaron = fator_hexaron * 10742.52139 * fatorMultiplicador;
		const dados_ametrina = fator_ametrina * 10742.52139 * fatorMultiplicador;
		const dados_thiamethoxan =
			fator_thiamethoxan * 10742.52139 * fatorMultiplicador;
		const dados_mirex = fator_mirex * 10742.52139 * fatorMultiplicador;
		const dados_fipronil = fator_fipronil * 10742.52139 * fatorMultiplicador;
		const dados_regent = fator_regent * 10742.52139 * fatorMultiplicador;
		const dados_nortox = fator_nortox * 5081.67123 * fatorMultiplicador;

		const sumagrotoxico =
			dados_gisofato +
			dados_pestiscidas +
			dados_hexaron +
			dados_hexazinona +
			dados_herbicida +
			dados_tebuthiuron +
			dados_oxifluorfen +
			dados_diuron +
			dados_ametrina +
			dados_thiamethoxan +
			dados_mirex +
			dados_fipronil +
			dados_regent +
			dados_nortox;

		//Soma dos BH6:CE6
		const sumBh6byCE6 =
			dados_calcarioCal +
			dados_calcarioDolo +
			dados_gesso +
			dados_nureia +
			dados_mapfosfato +
			dados_mapmono +
			dados_dapfosfato +
			dados_dapdiamonico +
			dados_nitratoamonia +
			dados_uan +
			dados_amonioandro +
			dados_sulfatoanomi +
			dados_can +
			dados_nitratocalcio +
			dados_ssp +
			dados_tsp +
			dados_kci +
			dados_vinhaca +
			dados_tortafiltro +
			dados_cinzasfuligem +
			dados_outrosfert +
			dados_noutros +
			dados_p2outros +
			dados_k2outros +
			sumagrotoxico;

		//Soma DE ao DO + BH6:CE6
		const comb_background_co2 = sumDebyDo + sumBh6byCE6 / 1000;

		//Formulas da planilha etapas EC até EO

		const fator_d9sintéticos = 0.0370570475131098;
		const fator_d9organominerais = 0.00996026314953123;
		const fator_d9culturais = 0.0147567376273156;
		const fator_d9calcario = 5.51843203559511;
		const fator_d9ureia = 2.77692313760759;
		const fator_d9palha = 0.00360736196319018;
		const fator_d8palha = 0.139141104294479;
		const fator_d9diesel = 14.839553970901;
		const fator_d9biodisel = 0.00905481097006986;
		const fator_d9gasolina = 0;
		const fator_d9etanol = 0;
		const fator_d9etanolhidrat = 0;
		const fator_d9biometano = 0;

		const dados_d9sintéticos = fator_d9sintéticos * 1000 * oxidoNitroso;
		const dados_d9organominerais = fator_d9organominerais * 1000 * oxidoNitroso;
		const dados_d9culturais = fator_d9culturais * 1000 * oxidoNitroso;
		const dados_d9calcario = fator_d9calcario * 1000;
		const dados_d9ureia = fator_d9ureia * 1000;
		const dados_d9palha = fator_d9palha * 1000 * oxidoNitroso;
		const dados_d8palha = fator_d8palha * 1000 * metanoBiol;
		const dados_d9diesel = fator_d9diesel * 1000;
		const dados_d9biodisel = fator_d9biodisel * 1000;
		const dados_d9gasolina = fator_d9gasolina * 1000;
		const dados_d9etanol = fator_d9etanol * 1000;
		const dados_d9etanolhidrat = fator_d9etanolhidrat * 1000;
		const dados_d9biometano = fator_d9biometano * 1000;

		const gradeP =
			dados_d9biodisel +
			dados_d9biometano +
			dados_d9biometano +
			dados_d9calcario +
			dados_d9diesel +
			dados_d9sintéticos +
			dados_d9organominerais +
			dados_d9culturais +
			dados_d9ureia +
			dados_d9palha +
			dados_d8palha +
			dados_d9gasolina +
			dados_d9etanol +
			dados_d9etanolhidrat;

		const gradeB = org_background_co2 + comb_background_co2;
		const gradeKg = (gradeP + gradeB) / 1000;
		this.form.patchValue({
			gradeP: gradeP.toFixed(2),
			gradeB: gradeB.toFixed(2),
		});
		return gradeKg;
	}

	private numberFromString(str: any) {
		if (str.value) return Number(str.value.replace(".", ""));
		return Number(str.replace(".", ""));
	}

	calculateInputValuePorcentage(event: any) {
		if (event.target.id == "calcarioCalcitico") {
			const result = this.calculatePorcentage(
				this.calcarioCalciticoValidation,
				event.target.value
			);
			this.calcarioCalciticoValidationResult = result;
		} else if (event.target.id == "calcarioDolomotico") {
			const result = this.calculatePorcentage(
				this.calcarioDolomoticoValidation,
				event.target.value
			);
			this.calcarioDolomoticoValidationResult = result;
		} else if (event.target.id == "gesso") {
			const result = this.calculatePorcentage(
				this.gessoValidation,
				event.target.value
			);
			this.gessoValidationResult = result;
		} else if (event.target.id == "ureia") {
			const result = this.calculatePorcentage(
				this.ureiaValidation,
				event.target.value
			);
			this.ureiaValidationResult = result;
		} else if (event.target.id == "map1") {
			const result = this.calculatePorcentage(
				this.map1Validation,
				event.target.value
			);
			this.map1ValidationResult = result;
		} else if (event.target.id == "map2") {
			const result = this.calculatePorcentage(
				this.map2Validation,
				event.target.value
			);
			this.map2ValidationResult = result;
		} else if (event.target.id == "dap1") {
			const result = this.calculatePorcentage(
				this.dap1Validation,
				event.target.value
			);
			this.dap1ValidationResult = result;
		} else if (event.target.id == "dap2") {
			const result = this.calculatePorcentage(
				this.dap2Validation,
				event.target.value
			);
			this.dap2ValidationResult = result;
		} else if (event.target.id == "nitratoAmonio") {
			const result = this.calculatePorcentage(
				this.nitratoAmonioValidation,
				event.target.value
			);
			this.nitratoAmonioValidationResult = result;
		} else if (event.target.id == "uan") {
			const result = this.calculatePorcentage(
				this.uanValidation,
				event.target.value
			);
			this.uanValidationResult = result;
		} else if (event.target.id == "amoniaAnidra") {
			const result = this.calculatePorcentage(
				this.amoniaAnidraValidation,
				event.target.value
			);
			this.amoniaAnidraValidationResult = result;
		} else if (event.target.id == "sulfatoAmonio") {
			const result = this.calculatePorcentage(
				this.sulfatoAmonioValidation,
				event.target.value
			);
			this.sulfatoAmonioValidationResult = result;
		} else if (event.target.id == "can") {
			const result = this.calculatePorcentage(
				this.canValidation,
				event.target.value
			);
			this.canValidationResult = result;
		} else if (event.target.id == "ssp") {
			const result = this.calculatePorcentage(
				this.sspValidation,
				event.target.value
			);
			this.sspValidationResult = result;
		} else if (event.target.id == "tsp") {
			const result = this.calculatePorcentage(
				this.tspValidation,
				event.target.value
			);
			this.tspValidationResult = result;
		} else if (event.target.id == "kci") {
			const result = this.calculatePorcentage(
				this.kciValidation,
				event.target.value
			);
			this.kciValidationResult = result;
		} else if (event.target.id == "vinhaca") {
			const result = this.calculatePorcentage(
				this.vinhacaValidation,
				event.target.value
			);
			this.vinhacaValidationResult = result;
		} else if (event.target.id == "tortaFiltroBaseUmida") {
			const result = this.calculatePorcentage(
				this.tortaFiltroBaseUmidaValidation,
				event.target.value
			);
			this.tortaFiltroBaseUmidaValidationResult = result;
		} else if (event.target.id == "cinzasFuligemBaseUmida") {
			const result = this.calculatePorcentage(
				this.cinzasFuligemBaseUmidaValidation,
				event.target.value
			);
			this.cinzasFuligemBaseUmidaValidationResult = result;
		} else if (event.target.id == "dieselB8") {
			const result = this.calculatePorcentage(
				this.dieselB8Validation,
				event.target.value
			);
			this.dieselB8ValidationResult = result;
		}
		//
		else if (event.target.id == "dieselB10") {
			const result = this.calculatePorcentage(
				this.dieselB10Validation,
				event.target.value
			);
			this.dieselB10ValidationResult = result;
		} else if (event.target.id == "dieselBx") {
			const result = this.calculatePorcentage(
				this.dieselBxValidation,
				event.target.value
			);
			this.dieselBxValidationResult = result;
		} else if (event.target.id == "dieselB20") {
			const result = this.calculatePorcentage(
				this.dieselB20Validation,
				event.target.value
			);
			this.dieselB20ValidationResult = result;
		} else if (event.target.id == "dieselB30") {
			const result = this.calculatePorcentage(
				this.dieselB30Validation,
				event.target.value
			);
			this.dieselB30ValidationResult = result;
		} else if (event.target.id == "biodieselB100") {
			const result = this.calculatePorcentage(
				this.biodieselB100Validation,
				event.target.value
			);
			this.biodieselB100ValidationResult = result;
		} else if (event.target.id == "gasolina") {
			const result = this.calculatePorcentage(
				this.gasolinaValidation,
				event.target.value
			);
			this.gasolinaValidationResult = result;
		} else if (event.target.id == "etanol") {
			const result = this.calculatePorcentage(
				this.etanolValidation,
				event.target.value
			);
			this.etanolValidationResult = result;
		} else if (event.target.id == "biometranoTerceiros") {
			const result = this.calculatePorcentage(
				this.biometranoTerceirosValidation,
				event.target.value
			);
			this.biometranoTerceirosValidationResult = result;
		} else if (event.target.id == "biometranoProprio") {
			const result = this.calculatePorcentage(
				this.biometranoProprioValidation,
				event.target.value
			);
			this.biometranoProprioValidationResult = result;
		} else if (event.target.id == "eletricidadeRede") {
			const result = this.calculatePorcentage(
				this.eletricidadeRedeValidation,
				event.target.value
			);
			this.eletricidadeRedeValidationResult = result;
		} else if (event.target.id == "eletricidadePch") {
			const result = this.calculatePorcentage(
				this.eletricidadePchValidation,
				event.target.value
			);
			this.eletricidadePchValidationResult = result;
		} else if (event.target.id == "eletricidadeBiomassa") {
			const result = this.calculatePorcentage(
				this.eletricidadeBiomassaValidation,
				event.target.value
			);
			this.eletricidadeBiomassaValidationResult = result;
		} else if (event.target.id == "eletricidadeEolica") {
			const result = this.calculatePorcentage(
				this.eletricidadeEolicaValidation,
				event.target.value
			);
			this.eletricidadeEolicaValidationResult = result;
		} else if (event.target.id == "eletricidadeSolar") {
			const result = this.calculatePorcentage(
				this.eletricidadeSolarValidation,
				event.target.value
			);
			this.eletricidadeSolarValidationResult = result;
		}
	}

	calculatePorcentage(n1: number, n2: number): number {
		const mul = n2 * 100;
		return mul / n1;
	}
}
