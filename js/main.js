function calc() {
	let damage, chance, crit, shotgun, mob, pb, // Показатели рун/кол-во ВЗ

			maxDamage, maxCrit, littleDamage, littleCrit, // Большой/маленький урон/крит

			maxChanceDamage, maxChanceCrit, maxChanceLittleDamage, maxChanceLittleCrit, // Шанс большого/маленького урона/крита при 10 ПКМ выстрелах
			full,

			maxChanceDamage100, maxChanceCrit100, maxChanceLittleDamage100, maxChanceLittleCrit100, // Шанс большого/маленького урона/крита при 100 ПКМ выстрелах
			full100,

			// ------------- ВЗ

			maxDamagePB, maxCritPB, littleDamagePB, littleCritPB, // Большой/Маленький урон/крит с ВЗ

			maxChanceDamage100PB, maxChanceCrit100PB, maxChanceLittleDamage100PB, maxChanceLittleCrit100PB, // Шанс большого/маленького урона/крита при 100 ПКМ выстрелах с ВЗ
			full100PB,
			full100PBSum;


	let maxHeadDamage, maxNeckDamage, maxBodyDamage,
			maxHeadCrit, maxNeckCrit, maxBodyCrit,

			maxChanceHeadDamage, maxChanceHeadCrit, maxChanceNeckDamage, maxChanceNeckCrit, maxChanceBodyDamage, maxChanceBodyCrit,
			fullHead, fullNeck, fullBody,

			maxChanceHeadDamage100, maxChanceHeadCrit100, maxChanceNeckDamage100, maxChanceNeckCrit100, maxChanceBodyDamage100, maxChanceBodyCrit100,
			fullHead100, fullNeck100, fullBody100

			// ------------- ВЗ

			maxHeadDamagePB, maxNeckDamagePB, maxBodyDamagePB,
			maxHeadCritPB, maxNeckCritPB, maxBodyCritPB,

			maxChanceHeadDamage100PB, maxChanceHeadCrit100PB, maxChanceNeckDamage100PB, maxChanceNeckCrit100PB, maxChanceBodyDamage100PB, maxChanceBodyCrit100PB,
			fullHead100PB, fullNeck100PB, fullBody100PB,
			fullHead100PBSum, fullNeck100PBSum, fullBody100PBSum;

	damage = document.getElementById('damage').value;
	damage = parseFloat(damage);

	chance = document.getElementById('chance').value;
	chance = parseFloat(chance) + 1;

	crit = document.getElementById('crit').value;
	crit = parseInt(crit);

	shotgun = document.getElementById('shotgun').value;
	shotgun = parseInt(shotgun);

	mob = document.getElementById('mob').value;
	mob = parseInt(mob);

	pb = document.getElementById('pb').value;
	pb = parseInt(pb) * 2;


//---------------------------------ПКМ---------------------------------//


	document.getElementById('pkm').innerHTML = "Расчёт по ПКМ:";
					// ----------------- Аннотация ----------------- //
	if (pb > 0) {
		document.getElementById("promptPkm").innerHTML = `<span class="ann">*при условии, что ${shotgun}% + ${mob}% = ${shotgun + mob}%</span><br><br>
																										<p class="annP">МЧУ: 100 + ${damage}% + (${shotgun}% + ${mob}%)</p>
																										<p class="annP crit">МКУ: 100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)</p>
																										<p class="annP">МЧУп: 49 + ${damage}% + ${mob}%</p>
																										<p class="annP crit">МКУп: 49 + ${damage}% + ${mob}% + (150% + ${crit}%)</p><br>

																										<p class="annP">МЧУ<span class='PB'>ВЗ</span>: (100 + ${damage}% + (${shotgun}% + ${mob}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP crit">МКУ<span class='PB'>ВЗ</span>: (100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP">МЧУп<span class='PB'>ВЗ</span>: (49 + ${damage}% + ${mob}%) * <span class='PB'>2.5</span></p>
																										<p class="annP crit">МКУп<span class='PB'>ВЗ</span>: (49 + ${damage}% + ${mob}% + (150% + ${crit}%)) * <span class='PB'>2.5</span></p>`;
	} else {
		document.getElementById("promptPkm").innerHTML = `<span class="ann">*при условии, что ${shotgun}% + ${mob}% = ${shotgun + mob}%</span><br><br>
																										<p class="annP">МЧУ: 100 + ${damage}% + (${shotgun}% + ${mob}%)</p>
																										<p class="annP crit">МКУ: 100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)</p>
																										<p class="annP">МЧУп: 49 + ${damage}% + ${mob}%</p>
																										<p class="annP crit">МКУп: 49 + ${damage}% + ${mob}% + (150% + ${crit}%)</p>`;
	}
	


	maxDamage = 100 + damage + ((100 + damage) * ((shotgun + mob) * 0.01));
	document.getElementById('maxDamage').innerHTML = "Максимальный чистый урон: " + parseInt(maxDamage);

	maxCrit = maxDamage + (maxDamage * (1.5 + (crit * 0.01)));
	document.getElementById('maxCrit').innerHTML = "Максимальный критический урон: " + parseInt(maxCrit);

	littleDamage = (49 + (49 * (damage * 0.01))) + ((49 + (49 * (damage * 0.01))) * (mob * 0.01));
	document.getElementById('littleDamage').innerHTML = "Максимальный чистый урон от первого взрыва: " + parseInt(littleDamage);

	littleCrit = littleDamage + (littleDamage * (1.5 + (crit * 0.01)));
	document.getElementById('littleCrit').innerHTML = "Максимальный критический урон от первого взрыва: " + parseInt(littleCrit);

	// ----------------------- ВЗ ПКМ -------------------------- //

	if (pb > 0) {
		maxDamagePB = maxDamage * 2.5;
		document.getElementById('maxDamagePB').innerHTML = "Максимальный чистый урон с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxDamagePB);

		maxCritPB = maxCrit * 2.5;
		document.getElementById('maxCritPB').innerHTML = "Максимальный критический урон с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxCritPB);


		littleDamagePB = littleDamage * 2.5;
		document.getElementById('littleDamagePB').innerHTML = "Максимальный чистый урон от первого взрыва с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(littleDamagePB);

		littleCritPB = littleCrit * 2.5;
		document.getElementById('littleCritPB').innerHTML = "Максимальный критический урон от первого взрыва с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(littleCritPB);
	} else {
		document.getElementById('maxDamagePB').innerHTML = "";
		document.getElementById('maxCritPB').innerHTML = "";
		document.getElementById('littleDamagePB').innerHTML = "";
		document.getElementById('littleCritPB').innerHTML = "";
	}

		

	// -----------------------        -------------------------- //



//==============// ШАНС ПКМ //==============//


// ----------------------------- 10 --------------------------------------
	
	document.getElementById('break10pkm').innerHTML = "расчёт на 10 выстрелов*";
					// ----------------- Аннотация ----------------- //
	document.getElementById("prompt10Pkm").innerHTML = `<span class="ann">*при условии, что ${chance - 1}% + 1% = ${chance}%</span><br><br>
																									<p class="annP">СЧУ10ПКМ: ${maxDamage.toFixed(3)} * (30 - (${chance - 1}% + 1%)</p>
																									<p class="annP crit">СКУ10ПКМ: ${maxCrit.toFixed(3)} * (30 * (${chance - 1}% + 1%)</p>
																									<p class="annP">СЧУп10ПКМ: ${littleDamage.toFixed(3)} * (10 - (${chance - 1}% + 1%)</p>
																									<p class="annP crit">СКУп10ПКМ: ${littleCrit.toFixed(3)} * (10 * (${chance - 1}% + 1%)</p>`;

// <p class="annP">СЧУ10ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%)) * (30 - (${chance - 1}% + 1%)</p>
// <p class="annP crit">СКУ10ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * (30 * (${chance - 1}% + 1%)</p>
// <p class="annP">СЧУп10ПКМ: (49 + ${damage}% + ${mob}%) * (10 - (${chance - 1}% + 1%)</p>
// <p class="annP crit">СКУп10ПКМ: (49 + ${damage}% + ${mob}%) + (150% + ${crit}%)) * (10 * (${chance - 1}% + 1%)</p>


	maxChanceDamage = maxDamage * (30 - ((30 * (chance * 0.01))));
	document.getElementById('maxChanceDamage').innerHTML = "Средний чистый урон за 10 выстрелов ПКМ: " + parseInt(maxChanceDamage);

	maxChanceCrit = maxCrit * (30 * (chance * 0.01));
	document.getElementById('maxChanceCrit').innerHTML = "Средний критический урон за 10 выстрелов ПКМ: " + parseInt(maxChanceCrit);


	maxChanceLittleDamage = littleDamage * (10 - (chance * 0.1));
	document.getElementById('maxChanceLittleDamage').innerHTML = "Средний чистый урон от первого взрыва за 10 выстрелов ПКМ: " + parseInt(maxChanceLittleDamage);

	maxChanceLittleCrit = littleCrit * (chance * 0.1);
	document.getElementById('maxChanceLittleCrit').innerHTML = "Средний критический урон от первого взрыва за 10 выстрелов ПКМ: " + parseInt(maxChanceLittleCrit);


	full = parseInt(maxChanceDamage + maxChanceCrit + maxChanceLittleDamage + maxChanceLittleCrit);
	document.getElementById('full').innerHTML = "Суммарный урон за 10 выстрелов ПКМ: " + full;




// ----------------------------- 100 -------------------------------------


		document.getElementById('break100pkm').innerHTML = "расчёт на 100 выстрелов*";
						// ----------------- Аннотация ----------------- //
		if (pb > 0) {
			document.getElementById("prompt100Pkm").innerHTML = `<span class="ann">*при условии, что ${chance - 1}% + 1% = ${chance}%</span><br><br>
																													<p class="annP">СЧУ100ПКМ: ${maxDamage.toFixed(3)} * (300 - (${chance - 1}% + 1%) - <span class='PB'>${maxDamage.toFixed(3)} * (300 * ${pb}% - (${chance - 1}% + 1%))</span></p>
																													<p class="annP crit">СКУ100ПКМ: ${maxCrit.toFixed(3)} * (300 * (${chance - 1}% + 1%) - <span class='PB'>${maxCrit.toFixed(3)} * (300 * ${pb}% * (${chance - 1}% + 1%))</span></p>
																													<p class="annP">СЧУп100ПКМ: ${littleDamage.toFixed(3)} * (100 - (${chance - 1}% + 1%) - <span class='PB'>${littleDamage.toFixed(3)} * (100 * ${pb}% - (${chance - 1}% + 1%))</span></p>
																													<p class="annP crit">СКУп100ПКМ: ${littleCrit.toFixed(3)} * (100 * (${chance - 1}% + 1%) - <span class='PB'>${littleCrit.toFixed(3)} * (100 * ${pb}% * (${chance - 1}% + 1%))</span></p><br>

																													<p class="annP">СЧУ100ПКМ<span class='PB'>ВЗ</span>: ${maxDamagePB.toFixed(3)} * (300 * <span class='PB'>${pb}%</span> - (${chance - 1}% + 1%))</p>
																													<p class="annP crit">СКУ100ПКМ<span class='PB'>ВЗ</span>: ${maxCritPB.toFixed(3)} * (300 * <span class='PB'>${pb}%</span> * (${chance - 1}% + 1%))</p>
																													<p class="annP">СЧУп100ПКМ<span class='PB'>ВЗ</span>: ${littleDamagePB.toFixed(3)} * (100 * <span class='PB'>${pb}%</span> - (${chance - 1}% + 1%))</p>
																													<p class="annP crit">СКУп100ПКМ<span class='PB'>ВЗ</span>: ${littleCritPB.toFixed(3)} * (100 * <span class='PB'>${pb}%</span> * (${chance - 1}% + 1%))</p>`;

// <p class="annP">СЧУ100ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%)) * (300 - (${chance - 1}% + 1%) - <span class='PB'>((100 + ${damage}% + (${shotgun}% + ${mob}%)) * (300 * ${pb}% - (${chance - 1}% + 1%)))</span></p>
// <p class="annP crit">СКУ100ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * (300 * (${chance - 1}% + 1%) - <span class='PB'>((100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * (300 * ${pb}% - (${chance - 1}% + 1%)))</span></p>
// <p class="annP">СЧУп100ПКМ: (49 + ${damage}% + ${mob}%) * (100 - (${chance - 1}% + 1%) - <span class='PB'>((100 + ${damage}% + ${mob}%) * (100 * ${pb}% - (${chance - 1}% + 1%)))</span></p>
// <p class="annP crit">СКУп100ПКМ: (49 + ${damage}% + ${mob}% + (150% + ${crit}%)) * (100 * (${chance - 1}% + 1%) - <span class='PB'>((100 + ${damage}% + ${mob}% + (150% + ${crit}%)) * (100 * ${pb}% - (${chance - 1}% + 1%)))</span></p><br>

// <p class="annP">СЧУ100ПКМ<span class='PB'>ВЗ</span>: ((100 + ${damage}% + (${shotgun}% + ${mob}%)) * <span class='PB'>2.5</span>) * (300 * <span class='PB'>${pb}%</span> - (${chance - 1}% + 1%))</p>
// <p class="annP crit">СКУ100ПКМ<span class='PB'>ВЗ</span>: ((100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * <span class='PB'>2.5</span>) * (300 * <span class='PB'>${pb}%</span> * (${chance - 1}% + 1%))</p>
// <p class="annP">СЧУп100ПКМ<span class='PB'>ВЗ</span>: ((49 + ${damage}% + ${mob}%) * <span class='PB'>2.5</span>) * (100 * <span class='PB'>${pb}%</span> - (${chance - 1}% + 1%))</p>
// <p class="annP crit">СКУп100ПКМ<span class='PB'>ВЗ</span>: ((49 + ${damage}% + ${mob}% + (150% + ${crit}%)) * <span class='PB'>2.5</span>) * (100 * <span class='PB'>${pb}%</span> * (${chance - 1}% + 1%))</p>
		}else {
			document.getElementById("prompt100Pkm").innerHTML = `<span class="ann">*при условии, что ${chance - 1}% + 1% = ${chance}%</span><br><br>
																													<p class="annP">СЧУ100ПКМ: ${maxDamage.toFixed(3)} * (300 - (${chance - 1}% + 1%)</p>
																													<p class="annP crit">СКУ100ПКМ: ${maxCrit.toFixed(3)} * (300 * (${chance - 1}% + 1%)</p>
																													<p class="annP">СЧУп100ПКМ: ${littleDamage.toFixed(3)} * (100 - (${chance - 1}% + 1%)</p>
																													<p class="annP crit">СКУп100ПКМ: ${littleCrit.toFixed(3)} * (100 * (${chance - 1}% + 1%)</p>`;

// <p class="annP">СЧУ100ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%)) * (300 - (${chance - 1}% + 1%)</p>
// <p class="annP crit">СКУ100ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * (300 * (${chance - 1}% + 1%)</p>
// <p class="annP">СЧУп100ПКМ: (49 + ${damage}% + ${mob}%) * (100 - (${chance - 1}% + 1%)</p>
// <p class="annP crit">СКУп100ПКМ: (49 + ${damage}% + ${mob}%) + (150% + ${crit}%)) * (100 * (${chance - 1}% + 1%)</p>
		}

		if (pb > 0) {    // ------------------- ПКМ с ВЗ ---------------------



			// --------------- ВЗ --------------- //

			maxChanceDamage100PB = maxDamagePB * ((300 * (pb * 0.01)) - (300 * (pb * 0.01)) * (chance * 0.01));
			document.getElementById('maxChanceDamage100PB').innerHTML = "Средний чистый урон за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceDamage100PB);
		
			maxChanceCrit100PB = maxCritPB * ((300 * (pb * 0.01)) * (chance * 0.01));
			document.getElementById('maxChanceCrit100PB').innerHTML = "Средний критический урон за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceCrit100PB);

			maxChanceLittleDamage100PB = littleDamagePB * (pb - (pb * (chance * 0.01)));
			document.getElementById('maxChanceLittleDamage100PB').innerHTML = "Средний чистый урон от первого взрыва за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceLittleDamage100PB);

			maxChanceLittleCrit100PB = littleCritPB * (pb * (chance * 0.01));
			document.getElementById('maxChanceLittleCrit100PB').innerHTML = "Средний критический урон от первого взрыва за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceLittleCrit100PB);
		
			full100PB = parseInt(maxChanceDamage100PB + maxChanceCrit100PB + maxChanceLittleDamage100PB + maxChanceLittleCrit100PB);
			document.getElementById('full100PB').innerHTML = "Суммарный урон за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + full100PB;

			// ---------------------------------- //


			maxChanceDamage100 = maxDamage * (300 - ((300 * (chance * 0.01))));
			maxChanceDamage100 = maxChanceDamage100 - maxDamage * (maxChanceDamage100PB / maxDamagePB);
			document.getElementById('maxChanceDamage100').innerHTML = "Средний чистый урон за 100 выстрелов ПКМ: " + parseInt(maxChanceDamage100);

			maxChanceCrit100 = maxCrit * (300 * (chance * 0.01));
			maxChanceCrit100 = maxChanceCrit100 - maxCrit * (maxChanceCrit100PB / maxCritPB);
			document.getElementById('maxChanceCrit100').innerHTML = "Средний критический урон за 100 выстрелов ПКМ: " + parseInt(maxChanceCrit100);

			maxChanceLittleDamage100 = littleDamage * (100 - (100 * (chance * 0.01)));
			maxChanceLittleDamage100 = maxChanceLittleDamage100 - littleDamage * (maxChanceLittleDamage100PB / littleDamagePB);
			document.getElementById('maxChanceLittleDamage100').innerHTML = "Средний чистый урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleDamage100);

			maxChanceLittleCrit100 = littleCrit * (100 * (chance * 0.01));
			maxChanceLittleCrit100 = maxChanceLittleCrit100 - littleCrit * (maxChanceLittleCrit100PB / littleCritPB);
			document.getElementById('maxChanceLittleCrit100').innerHTML = "Средний критический урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleCrit100);

			full100 = parseInt(maxChanceDamage100 + maxChanceCrit100 + maxChanceLittleDamage100 + maxChanceLittleCrit100);
			document.getElementById('full100').innerHTML = "Суммарный урон за 100 выстрелов ПКМ: " + full100;


			full100PBSum = parseInt(full100 + full100PB);
			document.getElementById('full100PBSum').innerHTML = "Полный суммарный урон за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + full100PBSum; // Если есть ВЗ


		} else {			// ------------------- ПКМ без ВЗ ---------------------

			maxChanceDamage100 = maxDamage * (300 - ((300 * (chance * 0.01))));
			document.getElementById('maxChanceDamage100').innerHTML = "Средний чистый урон за 100 выстрелов ПКМ: " + parseInt(maxChanceDamage100);

			maxChanceCrit100 = maxCrit * (300 * (chance * 0.01));
			document.getElementById('maxChanceCrit100').innerHTML = "Средний критический урон за 100 выстрелов ПКМ: " + parseInt(maxChanceCrit100);

			maxChanceLittleDamage100 = littleDamage * (100 - (100 * (chance * 0.01)));
			document.getElementById('maxChanceLittleDamage100').innerHTML = "Средний чистый урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleDamage100);

			maxChanceLittleCrit100 = littleCrit * (100 * (chance * 0.01));
			document.getElementById('maxChanceLittleCrit100').innerHTML = "Средний критический урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleCrit100);

			full100 = parseInt(maxChanceDamage100 + maxChanceCrit100 + maxChanceLittleDamage100 + maxChanceLittleCrit100);
			document.getElementById('full100').innerHTML = "Суммарный урон за 100 выстрелов ПКМ: " + full100;



			document.getElementById('maxChanceDamage100PB').innerHTML = "";
			document.getElementById('maxChanceCrit100PB').innerHTML = "";
			document.getElementById('maxChanceLittleDamage100PB').innerHTML = "";
			document.getElementById('maxChanceLittleCrit100PB').innerHTML = "";
			document.getElementById('full100PB').innerHTML = "";
			document.getElementById('full100PBSum').innerHTML = "";

			document.getElementById('full100').innerHTML = "Суммарный урон за 100 выстрелов ПКМ: " + full100;
			document.getElementById('full100PBSum').innerHTML = ""; // Если нет ВЗ

		}
		
		

		// --------------------------------------------




//---------------------------------ЛКМ---------------------------------//


	document.getElementById('lkm').innerHTML = "Расчёт по ЛКМ:";
					// ----------------- Аннотация ----------------- //
	if (pb > 0) {
		document.getElementById("promptLkm").innerHTML = `<span class="ann">*при условии, что ${shotgun}% + ${mob}% = ${shotgun + mob}%</span><br><br>
																										<p class="annP">МЧУГ: 58 + ${damage}% + (${shotgun}% + ${mob}%)</p>
																										<p class="annP crit">МКУГ: 58 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)</p>
																										<p class="annP">МЧУШ: 34 + ${damage}% + (${shotgun}% + ${mob}%)</p>
																										<p class="annP crit">МКУШ: 34 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)</p>
																										<p class="annP">МЧУТ: 29 + ${damage}% + (${shotgun}% + ${mob}%)</p>
																										<p class="annP crit">МКУТ: 29 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)</p><br>
																										
																										<p class="annP">МЧУГ<span class='PB'>ВЗ</span>: (58 + ${damage}% + (${shotgun}% + ${mob}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP crit">МКУГ<span class='PB'>ВЗ</span>: (58 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP">МЧУШ:<span class='PB'>ВЗ</span> (34 + ${damage}% + (${shotgun}% + ${mob}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP crit">МКУШ<span class='PB'>ВЗ</span>: (34 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP">МЧУТ<span class='PB'>ВЗ</span>: (29 + ${damage}% + (${shotgun}% + ${mob}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP crit">МКУТ<span class='PB'>ВЗ</span>: (29 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * <span class='PB'>2.5</span></p>`;
																										
	} else {
		document.getElementById("promptLkm").innerHTML = `<span class="ann">*при условии, что ${shotgun}% + ${mob}% = ${shotgun + mob}%</span><br><br>
																										<p class="annP">МЧУГ: 58 + ${damage}% + (${shotgun}% + ${mob}%)</p>
																										<p class="annP crit">МКУГ: 58 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)</p>
																										<p class="annP">МЧУШ: 34 + ${damage}% + (${shotgun}% + ${mob}%)</p>
																										<p class="annP crit">МКУШ: 34 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)</p>
																										<p class="annP">МЧУТ: 29 + ${damage}% + (${shotgun}% + ${mob}%)</p>
																										<p class="annP crit">МКУТ: 29 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)</p>`;
	}


	maxHeadDamage = 58 + (58 * (damage * 0.01)) + ((58 + (58 * (damage * 0.01))) * ((shotgun + mob) * 0.01));
	document.getElementById('maxHeadDamage').innerHTML = "Максимальный чистый урон в голову: " + parseInt(maxHeadDamage);

	maxHeadCrit = maxHeadDamage + (maxHeadDamage * (1.5 + (crit * 0.01)));
	document.getElementById('maxHeadCrit').innerHTML = "Максимальный критический урон в голову: " + parseInt(maxHeadCrit);



	maxNeckDamage = 34 + (34 * (damage * 0.01)) + ((34 + (34 * (damage * 0.01))) * ((shotgun + mob) * 0.01));
	document.getElementById('maxNeckDamage').innerHTML = "Максимальный чистый урон в шею: " + parseInt(maxNeckDamage);

	maxNeckCrit = maxNeckDamage + (maxNeckDamage * (1.5 + (crit * 0.01)));
	document.getElementById('maxNeckCrit').innerHTML = "Максимальный критический урон в шею: " + parseInt(maxNeckCrit);



	maxBodyDamage = 29 + (29 * (damage * 0.01)) + ((29 + (29 * (damage * 0.01))) * ((shotgun + mob) * 0.01));
	document.getElementById('maxBodyDamage').innerHTML = "Максимальный чистый урон в тело: " + parseInt(maxBodyDamage);

	maxBodyCrit = maxBodyDamage + (maxBodyDamage * (1.5 + (crit * 0.01)));
	document.getElementById('maxBodyCrit').innerHTML = "Максимальный критический урон в тело: " + parseInt(maxBodyCrit);




	// ----------------------- ВЗ ЛКМ -------------------------- //

	if (pb > 0) {

		maxHeadDamagePB = maxHeadDamage * 2.5;
		document.getElementById('maxHeadDamagePB').innerHTML = "Максимальный чистый урон в голову c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxHeadDamagePB);

		maxHeadCritPB = maxHeadCrit * 2.5;
		document.getElementById('maxHeadCritPB').innerHTML = "Максимальный критический урон в голову c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxHeadCritPB);



		maxNeckDamagePB = maxNeckDamage * 2.5;
		document.getElementById('maxNeckDamagePB').innerHTML = "Максимальный чистый урон в шею c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxNeckDamagePB);

		maxNeckCritPB = maxNeckCrit * 2.5;
		document.getElementById('maxNeckCritPB').innerHTML = "Максимальный критический урон в шею c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxNeckCritPB);



		maxBodyDamagePB = maxBodyDamage * 2.5;
		document.getElementById('maxBodyDamagePB').innerHTML = "Максимальный чистый урон в тело c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxBodyDamagePB);

		maxBodyCritPB = maxBodyCrit * 2.5;
		document.getElementById('maxBodyCritPB').innerHTML = "Максимальный критический урон в тело c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxBodyCritPB);

	} else {
		document.getElementById('maxHeadDamagePB').innerHTML = "";
		document.getElementById('maxHeadCritPB').innerHTML = "";
		document.getElementById('maxNeckDamagePB').innerHTML = "";
		document.getElementById('maxNeckCritPB').innerHTML = "";
		document.getElementById('maxBodyDamagePB').innerHTML = "";
		document.getElementById('maxBodyCritPB').innerHTML = "";
	}

		

	// -----------------------        -------------------------- //



//==============// ШАНС ЛКМ //==============//

// ----------------------------- 10 --------------------------------------

	document.getElementById('break10lkm').innerHTML = "расчёт на 10 выстрелов*";
					// ----------------- Аннотация ----------------- //
	document.getElementById("prompt10Lkm").innerHTML = `<span class="ann">*при условии, что ${chance - 1}% + 1% = ${chance}%</span><br><br>
																									<p class="annP">СЧУГ10ЛКМ: ${maxHeadDamage.toFixed(3)} * (80 - (${chance - 1}% + 1%)</p>
																									<p class="annP crit">СКУГ10ЛКМ: ${maxHeadCrit.toFixed(3)} * (80 * (${chance - 1}% + 1%)</p><br>
																									<p class="annP">СЧУШ10ЛКМ: ${maxNeckDamage.toFixed(3)} * (80 - (${chance - 1}% + 1%)</p>
																									<p class="annP crit">СКУШ10ЛКМ: ${maxNeckCrit.toFixed(3)} * (80 * (${chance - 1}% + 1%)</p><br>
																									<p class="annP">СЧУТ10ЛКМ: ${maxBodyDamage.toFixed(3)} * (80 - (${chance - 1}% + 1%)</p>
																									<p class="annP crit">СКУТ10ЛКМ: ${maxBodyCrit.toFixed(3)} * (80 * (${chance - 1}% + 1%)</p>`;

	maxChanceHeadDamage = maxHeadDamage * (80 - ((80 * (chance * 0.01))));
	document.getElementById('maxChanceHeadDamage').innerHTML = "Средний чистый урон за 10 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadDamage);

	maxChanceHeadCrit = maxHeadCrit * (80 * (chance * 0.01));
	document.getElementById('maxChanceHeadCrit').innerHTML = "Средний критический урон за 10 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadCrit);



	maxChanceNeckDamage = maxNeckDamage * (80 - ((80 * (chance * 0.01))));
	document.getElementById('maxChanceNeckDamage').innerHTML = "Средний чистый урон за 10 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckDamage);

	maxChanceNeckCrit = maxNeckCrit * (80 * (chance * 0.01));
	document.getElementById('maxChanceNeckCrit').innerHTML = "Средний критический урон за 10 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckCrit);



	maxChanceBodyDamage = maxBodyDamage * (80 - ((80 * (chance * 0.01))));
	document.getElementById('maxChanceBodyDamage').innerHTML = "Средний чистый урон за 10 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyDamage);

	maxChanceBodyCrit = maxBodyCrit * (80 * (chance * 0.01));
	document.getElementById('maxChanceBodyCrit').innerHTML = "Средний критический урон за 10 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyCrit);



	fullHead = parseInt(maxChanceHeadDamage + maxChanceHeadCrit);
	document.getElementById('fullHead').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в голову: " + fullHead;

	fullNeck = parseInt(maxChanceNeckDamage + maxChanceNeckCrit);
	document.getElementById('fullNeck').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в шею: " + fullNeck;

	fullBody = parseInt(maxChanceBodyDamage + maxChanceBodyCrit);
	document.getElementById('fullBody').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в тело: " + fullBody;




// ----------------------------- 100 -------------------------------------


	document.getElementById('break100lkm').innerHTML = "расчёт на 100 выстрелов*";
						// ----------------- Аннотация ----------------- //
	if (pb > 0) {
		document.getElementById("prompt100Lkm").innerHTML = `<span class="ann">*при условии, что ${chance - 1}% + 1% = ${chance}%</span><br><br>
																												<p class="annP">СЧУГ100ЛКМ: ${maxHeadDamage.toFixed(3)} * (800 - (${chance - 1}% + 1%) - <span class='PB'>${maxHeadDamage.toFixed(3)} * (800 * ${pb}% - (${chance - 1}% + 1%))</span></p>
																												<p class="annP crit">СКУГ100ЛКМ: ${maxHeadCrit.toFixed(3)} * (800 * (${chance - 1}% + 1%) - <span class='PB'>${maxHeadCrit.toFixed(3)} * (800 * ${pb}% * (${chance - 1}% + 1%))</span></p><br>
																												<p class="annP">СЧУШ100ЛКМ: ${maxNeckDamage.toFixed(3)} * (800 - (${chance - 1}% + 1%) - <span class='PB'>${maxNeckDamage.toFixed(3)} * (800 * ${pb}% - (${chance - 1}% + 1%))</span></p>
																												<p class="annP crit">СКУШ100ЛКМ: ${maxNeckCrit.toFixed(3)} * (800 * (${chance - 1}% + 1%) - <span class='PB'>${maxNeckCrit.toFixed(3)} * (800 * ${pb}% * (${chance - 1}% + 1%))</span></p><br>
																												<p class="annP">СЧУТ100ЛКМ: ${maxBodyDamage.toFixed(3)} * (800 - (${chance - 1}% + 1%) - <span class='PB'>${maxBodyDamage.toFixed(3)} * (800 * ${pb}% - (${chance - 1}% + 1%))</span></p>
																												<p class="annP crit">СКУТ100ЛКМ: ${maxBodyCrit.toFixed(3)} * (800 * (${chance - 1}% + 1%) - <span class='PB'>${maxBodyCrit.toFixed(3)} * (800 * ${pb}% * (${chance - 1}% + 1%))</span></p><br>

																												<p class="annP">СЧУГ100ПКМ<span class='PB'>ВЗ</span>: ${maxHeadDamagePB.toFixed(3)} * (800 * <span class='PB'>${pb}%</span> - (${chance - 1}% + 1%))</p>
																												<p class="annP crit">СКУГ100ПКМ<span class='PB'>ВЗ</span>: ${maxHeadCritPB.toFixed(3)} * (800 * <span class='PB'>${pb}%</span> * (${chance - 1}% + 1%))</p>
																												<p class="annP">СЧУШ100ПКМ<span class='PB'>ВЗ</span>: ${maxNeckDamagePB.toFixed(3)} * (800 * <span class='PB'>${pb}%</span> - (${chance - 1}% + 1%))</p>
																												<p class="annP crit">СКУШ100ПКМ<span class='PB'>ВЗ</span>: ${maxNeckCritPB.toFixed(3)} * (800 * <span class='PB'>${pb}%</span> * (${chance - 1}% + 1%))</p>
																												<p class="annP">СЧУТ100ПКМ<span class='PB'>ВЗ</span>: ${maxBodyDamagePB.toFixed(3)} * (800 * <span class='PB'>${pb}%</span> - (${chance - 1}% + 1%))</p>
																												<p class="annP crit">СКУТ100ПКМ<span class='PB'>ВЗ</span>: ${maxBodyCritPB.toFixed(3)} * (800 * <span class='PB'>${pb}%</span> * (${chance - 1}% + 1%))</p>`;

	}else {
		document.getElementById("prompt100Lkm").innerHTML = `<span class="ann">*при условии, что ${chance - 1}% + 1% = ${chance}%</span><br><br>
																												<p class="annP">СЧУГ10ЛКМ: ${maxHeadDamage.toFixed(3)} * (800 - (${chance - 1}% + 1%)</p>
																												<p class="annP crit">СКУГ10ЛКМ: ${maxHeadCrit.toFixed(3)} * (800 * (${chance - 1}% + 1%)</p><br>
																												<p class="annP">СЧУШ10ЛКМ: ${maxNeckDamage.toFixed(3)} * (800 - (${chance - 1}% + 1%)</p>
																												<p class="annP crit">СКУШ10ЛКМ: ${maxNeckCrit.toFixed(3)} * (800 * (${chance - 1}% + 1%)</p><br>
																												<p class="annP">СЧУТ10ЛКМ: ${maxBodyDamage.toFixed(3)} * (800 - (${chance - 1}% + 1%)</p>
																												<p class="annP crit">СКУТ10ЛКМ: ${maxBodyCrit.toFixed(3)} * (800 * (${chance - 1}% + 1%)</p>`;
	}

	if (pb > 0) {    // ------------------- ВЗ ---------------------


		// ------------------- ВЗ выстрелы ---------------------


		maxChanceHeadDamage100PB = maxHeadDamagePB * ((800 * (pb * 0.01)) - (800 * (pb * 0.01)) * (chance * 0.01));
		document.getElementById('maxChanceHeadDamage100PB').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в голову с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceHeadDamage100PB);

		maxChanceHeadCrit100PB = maxHeadCritPB * (800 * (pb * 0.01)) * (chance * 0.01);
		document.getElementById('maxChanceHeadCrit100PB').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в голову с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceHeadCrit100PB);

		fullHead100PB = parseInt(maxChanceHeadDamage100PB + maxChanceHeadCrit100PB);
		document.getElementById('fullHead100PB').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в голову с " + "<span class='PB'>ВЗ</span>" + ": " + fullHead100PB;



		maxChanceNeckDamage100PB = maxNeckDamagePB * ((800 * (pb * 0.01)) - (800 * (pb * 0.01)) * (chance * 0.01));
		document.getElementById('maxChanceNeckDamage100PB').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в шею с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceNeckDamage100PB);

		maxChanceNeckCrit100PB = maxNeckCritPB * (800 * (pb * 0.01)) * (chance * 0.01);
		document.getElementById('maxChanceNeckCrit100PB').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в шею с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceNeckCrit100PB);

		fullNeck100PB = parseInt(maxChanceNeckDamage100PB + maxChanceNeckCrit100PB);
		document.getElementById('fullNeck100PB').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в шею с " + "<span class='PB'>ВЗ</span>" + ": " + fullNeck100PB;



		maxChanceBodyDamage100PB = maxBodyDamagePB * ((800 * (pb * 0.01)) - (800 * (pb * 0.01)) * (chance * 0.01));
		document.getElementById('maxChanceBodyDamage100PB').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в тело с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceBodyDamage100PB);

		maxChanceBodyCrit100PB = maxBodyCritPB * (800 * (pb * 0.01)) * (chance * 0.01);
		document.getElementById('maxChanceBodyCrit100PB').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в тело с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceBodyCrit100PB);

		fullBody100PB = parseInt(maxChanceBodyDamage100PB + maxChanceBodyCrit100PB);
		document.getElementById('fullBody100PB').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в тело с " + "<span class='PB'>ВЗ</span>" + ": " + fullBody100PB;




		// ------------------- не ВЗ выстрелы ---------------------

		maxChanceHeadDamage100 = maxHeadDamage * (800 - ((800 * (chance * 0.01))));
		maxChanceHeadDamage100 = maxChanceHeadDamage100 - maxHeadDamage * (maxChanceHeadDamage100PB / maxHeadDamagePB);
		document.getElementById('maxChanceHeadDamage100').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadDamage100);

		maxChanceHeadCrit100 = maxHeadCrit * (800 * (chance * 0.01));
		maxChanceHeadCrit100 = maxChanceHeadCrit100 - maxHeadCrit * (maxChanceHeadCrit100PB / maxHeadCritPB);
		document.getElementById('maxChanceHeadCrit100').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadCrit100);




		maxChanceNeckDamage100 = maxNeckDamage * (800 - ((800 * (chance * 0.01))));
		maxChanceNeckDamage100 = maxChanceNeckDamage100 - maxNeckDamage * (maxChanceNeckDamage100PB / maxNeckDamagePB);
		document.getElementById('maxChanceNeckDamage100').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckDamage100);

		maxChanceNeckCrit100 = maxNeckCrit * (800 * (chance * 0.01));
		maxChanceNeckCrit100 = maxChanceNeckCrit100 - maxNeckCrit * (maxChanceNeckCrit100PB / maxNeckCritPB);
		document.getElementById('maxChanceNeckCrit100').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckCrit100);




		maxChanceBodyDamage100 = maxBodyDamage * (800 - ((800 * (chance * 0.01))));
		maxChanceBodyDamage100 = maxChanceBodyDamage100 - maxBodyDamage * (maxChanceBodyDamage100PB / maxBodyDamagePB);
		document.getElementById('maxChanceBodyDamage100').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyDamage100);

		maxChanceBodyCrit100 = maxBodyCrit * (800 * (chance * 0.01));
		maxChanceBodyCrit100 = maxChanceBodyCrit100 - maxBodyCrit * (maxChanceBodyCrit100PB / maxBodyCritPB);
		document.getElementById('maxChanceBodyCrit100').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyCrit100);



		fullHead100 = parseInt(maxChanceHeadDamage100 + maxChanceHeadCrit100);

		fullNeck100 = parseInt(maxChanceNeckDamage100 + maxChanceNeckCrit100);

		fullBody100 = parseInt(maxChanceBodyDamage100 + maxChanceBodyCrit100);




		// fullHead100 = parseInt(fullHead100 - (maxHeadDamage * (8 * (pb - (pb * (chance * 0.01))))));
		// fullHead100 = parseInt(fullHead100 - (maxHeadCrit * (8 * (pb * (chance * 0.01)))));

		document.getElementById('fullHead100').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в голову: " + fullHead100;

		// fullNeck100 = parseInt(fullNeck100 - (maxNeckDamage * (8 * (pb - (pb * (chance * 0.01))))));
		// fullNeck100 = parseInt(fullNeck100 - (maxNeckCrit * (8 * (pb * (chance * 0.01)))));

		document.getElementById('fullNeck100').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в шею: " + fullNeck100;

		// fullBody100 = parseInt(fullBody100 - (maxBodyDamage * (8 * (pb - (pb * (chance * 0.01))))));
		// fullBody100 = parseInt(fullBody100 - (maxBodyCrit * (8 * (pb * (chance * 0.01)))));

		document.getElementById('fullBody100').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в тело: " + fullBody100;





		fullHead100PBSum = parseInt(fullHead100 + fullHead100PB);
		document.getElementById('fullHead100PBSum').innerHTML = "Полный суммарный урон за 100 выстрелов ЛКМ в голову с " + "<span class='PB'>ВЗ</span>" + ": " + fullHead100PBSum; // Если есть ВЗ

		fullNeck100PBSum = parseInt(fullNeck100 + fullNeck100PB);
		document.getElementById('fullNeck100PBSum').innerHTML = "Полный суммарный урон за 100 выстрелов ЛКМ в шею с " + "<span class='PB'>ВЗ</span>" + ": " + fullNeck100PBSum; // Если есть ВЗ

		fullBody100PBSum = parseInt(fullBody100 + fullBody100PB);
		document.getElementById('fullBody100PBSum').innerHTML = "Полный суммарный урон за 100 выстрелов ЛКМ в тело с " + "<span class='PB'>ВЗ</span>" + ": " + fullBody100PBSum; // Если есть ВЗ


	} else {    // ------------------- Без ВЗ ---------------------

		maxChanceHeadDamage100 = maxHeadDamage * (800 - ((800 * (chance * 0.01))));
		document.getElementById('maxChanceHeadDamage100').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadDamage100);

		maxChanceHeadCrit100 = maxHeadCrit * (800 * (chance * 0.01));
		document.getElementById('maxChanceHeadCrit100').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadCrit100);




		maxChanceNeckDamage100 = maxNeckDamage * (800 - ((800 * (chance * 0.01))));
		document.getElementById('maxChanceNeckDamage100').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckDamage100);

		maxChanceNeckCrit100 = maxNeckCrit * (800 * (chance * 0.01));
		document.getElementById('maxChanceNeckCrit100').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckCrit100);




		maxChanceBodyDamage100 = maxBodyDamage * (800 - ((800 * (chance * 0.01))));
		document.getElementById('maxChanceBodyDamage100').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyDamage100);

		maxChanceBodyCrit100 = maxBodyCrit * (800 * (chance * 0.01));
		document.getElementById('maxChanceBodyCrit100').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyCrit100);



		fullHead100 = parseInt(maxChanceHeadDamage100 + maxChanceHeadCrit100);

		fullNeck100 = parseInt(maxChanceNeckDamage100 + maxChanceNeckCrit100);

		fullBody100 = parseInt(maxChanceBodyDamage100 + maxChanceBodyCrit100);


		document.getElementById('maxChanceHeadDamage100PB').innerHTML = "";
		document.getElementById('maxChanceHeadCrit100PB').innerHTML = "";
		document.getElementById('maxChanceNeckDamage100PB').innerHTML = "";
		document.getElementById('maxChanceNeckCrit100PB').innerHTML = "";
		document.getElementById('maxChanceBodyDamage100PB').innerHTML = "";
		document.getElementById('maxChanceBodyCrit100PB').innerHTML = "";

		document.getElementById('fullHead100PB').innerHTML = "";
		document.getElementById('fullNeck100PB').innerHTML = "";
		document.getElementById('fullBody100PB').innerHTML = "";

		document.getElementById('fullHead100').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в голову: " + fullHead100;
		document.getElementById('fullNeck100').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в шею: " + fullNeck100;
		document.getElementById('fullBody100').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в тело: " + fullBody100;

		document.getElementById('fullHead100PBSum').innerHTML = ""; // Если нет ВЗ
		document.getElementById('fullNeck100PBSum').innerHTML = ""; // Если нет ВЗ
		document.getElementById('fullBody100PBSum').innerHTML = ""; // Если нет ВЗ

	}



}













function calc_1() {
	let damage_1, chance_1, crit_1, shotgun_1, mob_1, pb_1,
			maxDamage_1, maxCrit_1, littleDamage_1, littleCrit_1,
			maxChanceDamage_1, maxChanceCrit_1, maxChanceLittleDamage_1, maxChanceLittleCrit_1,
			full_1,

			maxChanceDamage100_1, maxChanceCrit100_1, maxChanceLittleDamage100_1, maxChanceLittleCrit100_1,
			full100_1,

			// ------------- ВЗ

			maxDamagePB_1, maxCritPB_1, littleDamagePB_1, littleCritPB_1, // Большой/Маленький урон/крит с ВЗ

			maxChanceDamage100PB_1, maxChanceCrit100PB_1, maxChanceLittleDamage100PB_1, maxChanceLittleCrit100PB_1, // Шанс большого/маленького урона/крита при 100 ПКМ выстрелах с ВЗ
			full100PB_1,
			full100PBSum_1;

	let maxHeadDamage_1, maxNeckDamage_1, maxBodyDamage_1,
			maxHeadCrit_1, maxNeckCrit_1, maxBodyCrit_1,
			maxChanceHeadDamage_1, maxChanceHeadCrit_1, maxChanceNeckDamage_1, maxChanceNeckCrit_1, maxChanceBodyDamage_1, maxChanceBodyCrit_1,
			fullHead_1, fullNeck_1, fullBody_1,

			maxChanceHeadDamage100_1, maxChanceHeadCrit100_1, maxChanceNeckDamage100_1, maxChanceNeckCrit100_1, maxChanceBodyDamage100_1, maxChanceBodyCrit100_1,
			fullHead100_1, fullNeck100_1, fullBody100_1;

			// ------------- ВЗ

			maxHeadDamagePB_1, maxNeckDamagePB_1, maxBodyDamagePB_1,
			maxHeadCritPB_1, maxNeckCritPB_1, maxBodyCritPB_1,

			maxChanceHeadDamage100PB_1, maxChanceHeadCrit100PB_1, maxChanceNeckDamage100PB_1, maxChanceNeckCrit100PB_1, maxChanceBodyDamage100PB_1, maxChanceBodyCrit100PB_1,
			fullHead100PB_1, fullNeck100PB_1, fullBody100PB_1,
			fullHead100PBSum_1, fullNeck100PBSum_1, fullBody100PBSum_1;

	damage_1 = document.getElementById('damage_1').value;
	damage_1 = parseFloat(damage_1);

	chance_1 = document.getElementById('chance_1').value;
	chance_1 = parseFloat(chance_1) + 1;

	crit_1 = document.getElementById('crit_1').value;
	crit_1 = parseInt(crit_1);

	shotgun_1 = document.getElementById('shotgun_1').value;
	shotgun_1 = parseInt(shotgun_1);

	mob_1 = document.getElementById('mob_1').value;
	mob_1 = parseInt(mob_1);

	pb_1 = document.getElementById('pb_1').value;
	pb_1 = parseInt(pb_1) * 2;


//---------------------------------ПКМ---------------------------------//

	document.getElementById('pkm_1').innerHTML = "Расчёт по ПКМ:";
					// ----------------- Аннотация ----------------- //
	if (pb_1 > 0) {
		document.getElementById("promptPkm_1").innerHTML = `<span class="ann">*при условии, что ${shotgun_1}% + ${mob_1}% = ${shotgun_1 + mob_1}%</span><br><br>
																										<p class="annP">МЧУ: 100 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)</p>
																										<p class="annP crit">МКУ: 100 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)</p>
																										<p class="annP">МЧУп: 49 + ${damage_1}% + ${mob_1}%</p>
																										<p class="annP crit">МКУп: 49 + ${damage_1}% + ${mob_1}% + (150% + ${crit_1}%)</p><br>

																										<p class="annP">МЧУ<span class='PB'>ВЗ</span>: (100 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP crit">МКУ<span class='PB'>ВЗ</span>: (100 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP">МЧУп<span class='PB'>ВЗ</span>: (49 + ${damage_1}% + ${mob_1}%) * <span class='PB'>2.5</span></p>
																										<p class="annP crit">МКУп<span class='PB'>ВЗ</span>: (49 + ${damage_1}% + ${mob_1}% + (150% + ${crit_1}%)) * <span class='PB'>2.5</span></p>`;
	} else {
		document.getElementById("promptPkm_1").innerHTML = `<span class="ann">*при условии, что ${shotgun_1}% + ${mob_1}% = ${shotgun_1 + mob_1}%</span><br><br>
																										<p class="annP">МЧУ: 100 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)</p>
																										<p class="annP crit">МКУ: 100 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)</p>
																										<p class="annP">МЧУп: 49 + ${damage_1}% + ${mob_1}%</p>
																										<p class="annP crit">МКУп: 49 + ${damage_1}% + ${mob_1}% + (150% + ${crit_1}%)</p>`;
	}


	maxDamage_1 = 100 + damage_1 + ((100 + damage_1) * ((shotgun_1 + mob_1) * 0.01));
	document.getElementById('maxDamage_1').innerHTML = "Максимальный чистый урон: " + parseInt(maxDamage_1);

	maxCrit_1 = maxDamage_1 + (maxDamage_1 * (1.5 + (crit_1 * 0.01)));
	document.getElementById('maxCrit_1').innerHTML = "Максимальный критический урон: " + parseInt(maxCrit_1);



	littleDamage_1 = (49 + (49 * (damage_1 * 0.01))) + ((49 + (49 * (damage_1 * 0.01))) * (mob_1 * 0.01));
	document.getElementById('littleDamage_1').innerHTML = "Максимальный чистый урон от первого взрыва: " + parseInt(littleDamage_1);

	littleCrit_1 = littleDamage_1 + (littleDamage_1 * (1.5 + (crit_1 * 0.01)));
	document.getElementById('littleCrit_1').innerHTML = "Максимальный критический урон от первого взрыва: " + parseInt(littleCrit_1);


	// ----------------------- ВЗ ПКМ -------------------------- //

	if (pb_1 > 0) {
		maxDamagePB_1 = maxDamage_1 * 2.5;
		document.getElementById('maxDamagePB_1').innerHTML = "Максимальный чистый урон с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxDamagePB_1);

		maxCritPB_1 = maxCrit_1 * 2.5;
		document.getElementById('maxCritPB_1').innerHTML = "Максимальный критический урон с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxCritPB_1);


		littleDamagePB_1 = littleDamage_1 * 2.5;
		document.getElementById('littleDamagePB_1').innerHTML = "Максимальный чистый урон от первого взрыва с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(littleDamagePB_1);

		littleCritPB_1 = littleCrit_1 * 2.5;
		document.getElementById('littleCritPB_1').innerHTML = "Максимальный критический урон от первого взрыва с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(littleCritPB_1);
	} else {
		document.getElementById('maxDamagePB_1').innerHTML = "";
		document.getElementById('maxCritPB_1').innerHTML = "";
		document.getElementById('littleDamagePB_1').innerHTML = "";
		document.getElementById('littleCritPB_1').innerHTML = "";
	}

		

	// -----------------------        -------------------------- //



//==============// ШАНС ПКМ //==============//


// --------------------------- 10 ----------------------------

	document.getElementById('break10pkm_1').innerHTML = "расчёт на 10 выстрелов*";
					// ----------------- Аннотация ----------------- //
	document.getElementById("prompt10Pkm_1").innerHTML = `<span class="ann">*при условии, что ${chance_1 - 1}% + 1% = ${chance_1}%</span><br><br>
																									<p class="annP">СЧУ10ПКМ: ${maxDamage_1.toFixed(3)} * (30 - (${chance_1 - 1}% + 1%)</p>
																									<p class="annP crit">СКУ10ПКМ: ${maxCrit_1.toFixed(3)} * (30 * (${chance_1 - 1}% + 1%)</p>
																									<p class="annP">СЧУп10ПКМ: ${littleDamage_1.toFixed(3)} * (10 - (${chance_1 - 1}% + 1%)</p>
																									<p class="annP crit">СКУп10ПКМ: ${littleCrit_1.toFixed(3)} * (10 * (${chance_1 - 1}% + 1%)</p>`;

// <p class="annP">СЧУ10ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%)) * (30 - (${chance - 1}% + 1%)</p>
// <p class="annP crit">СКУ10ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * (30 * (${chance - 1}% + 1%)</p>
// <p class="annP">СЧУп10ПКМ: (49 + ${damage}% + ${mob}%) * (10 - (${chance - 1}% + 1%)</p>
// <p class="annP crit">СКУп10ПКМ: (49 + ${damage}% + ${mob}%) + (150% + ${crit}%)) * (10 * (${chance - 1}% + 1%)</p>


	maxChanceDamage_1 = maxDamage_1 * (30 - ((30 * (chance_1 * 0.01))));
	document.getElementById('maxChanceDamage_1').innerHTML = "Средний чистый урон за 10 выстрелов ПКМ: " + parseInt(maxChanceDamage_1);

	maxChanceCrit_1 = maxCrit_1 * (30 * (chance_1 * 0.01));
	document.getElementById('maxChanceCrit_1').innerHTML = "Средний критический урон за 10 выстрелов ПКМ: " + parseInt(maxChanceCrit_1);



	maxChanceLittleDamage_1 = littleDamage_1 * (10 - (chance_1 * 0.1));
	document.getElementById('maxChanceLittleDamage_1').innerHTML = "Средний чистый урон от первого взрыва за 10 выстрелов ПКМ: " + parseInt(maxChanceLittleDamage_1);

	maxChanceLittleCrit_1 = littleCrit_1 * (chance_1 * 0.1);
	document.getElementById('maxChanceLittleCrit_1').innerHTML = "Средний критический урон от первого взрыва за 10 выстрелов ПКМ: " + parseInt(maxChanceLittleCrit_1);


	full_1 = parseInt(maxChanceDamage_1 + maxChanceCrit_1 + maxChanceLittleDamage_1 + maxChanceLittleCrit_1);
	document.getElementById('full_1').innerHTML = "Суммарный урон за 10 выстрелов ПКМ: " + full_1;




// -------------------------- 100 ----------------------------


		document.getElementById('break100pkm_1').innerHTML = "расчёт на 100 выстрелов*";
						// ----------------- Аннотация ----------------- //
		if (pb_1 > 0) {
			document.getElementById("prompt100Pkm_1").innerHTML = `<span class="ann">*при условии, что ${chance_1 - 1}% + 1% = ${chance_1}%</span><br><br>
																													<p class="annP">СЧУ100ПКМ: ${maxDamage_1.toFixed(3)} * (300 - (${chance_1 - 1}% + 1%) - <span class='PB'>${maxDamage_1.toFixed(3)} * (300 * ${pb_1}% - (${chance_1 - 1}% + 1%))</span></p>
																													<p class="annP crit">СКУ100ПКМ: ${maxCrit_1.toFixed(3)} * (300 * (${chance_1 - 1}% + 1%) - <span class='PB'>${maxCrit_1.toFixed(3)} * (300 * ${pb_1}% * (${chance_1 - 1}% + 1%))</span></p>
																													<p class="annP">СЧУп100ПКМ: ${littleDamage_1.toFixed(3)} * (100 - (${chance_1 - 1}% + 1%) - <span class='PB'>${littleDamage_1.toFixed(3)} * (100 * ${pb_1}% - (${chance_1 - 1}% + 1%))</span></p>
																													<p class="annP crit">СКУп100ПКМ: ${littleCrit_1.toFixed(3)} * (100 * (${chance_1 - 1}% + 1%) - <span class='PB'>${littleCrit_1.toFixed(3)} * (100 * ${pb_1}% * (${chance_1 - 1}% + 1%))</span></p><br>

																													<p class="annP">СЧУ100ПКМ<span class='PB'>ВЗ</span>: ${maxDamagePB_1.toFixed(3)} * (300 * <span class='PB'>${pb_1}%</span> - (${chance_1 - 1}% + 1%))</p>
																													<p class="annP crit">СКУ100ПКМ<span class='PB'>ВЗ</span>: ${maxCritPB_1.toFixed(3)} * (300 * <span class='PB'>${pb_1}%</span> * (${chance_1 - 1}% + 1%))</p>
																													<p class="annP">СЧУп100ПКМ<span class='PB'>ВЗ</span>: ${littleDamagePB_1.toFixed(3)} * (100 * <span class='PB'>${pb_1}%</span> - (${chance_1 - 1}% + 1%))</p>
																													<p class="annP crit">СКУп100ПКМ<span class='PB'>ВЗ</span>: ${littleCritPB_1.toFixed(3)} * (100 * <span class='PB'>${pb_1}%</span> * (${chance_1 - 1}% + 1%))</p>`;

// <p class="annP">СЧУ100ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%)) * (300 - (${chance - 1}% + 1%) - <span class='PB'>((100 + ${damage}% + (${shotgun}% + ${mob}%)) * (300 * ${pb}% - (${chance - 1}% + 1%)))</span></p>
// <p class="annP crit">СКУ100ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * (300 * (${chance - 1}% + 1%) - <span class='PB'>((100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * (300 * ${pb}% - (${chance - 1}% + 1%)))</span></p>
// <p class="annP">СЧУп100ПКМ: (49 + ${damage}% + ${mob}%) * (100 - (${chance - 1}% + 1%) - <span class='PB'>((100 + ${damage}% + ${mob}%) * (100 * ${pb}% - (${chance - 1}% + 1%)))</span></p>
// <p class="annP crit">СКУп100ПКМ: (49 + ${damage}% + ${mob}% + (150% + ${crit}%)) * (100 * (${chance - 1}% + 1%) - <span class='PB'>((100 + ${damage}% + ${mob}% + (150% + ${crit}%)) * (100 * ${pb}% - (${chance - 1}% + 1%)))</span></p><br>

// <p class="annP">СЧУ100ПКМ<span class='PB'>ВЗ</span>: ((100 + ${damage}% + (${shotgun}% + ${mob}%)) * <span class='PB'>2.5</span>) * (300 * <span class='PB'>${pb}%</span> - (${chance - 1}% + 1%))</p>
// <p class="annP crit">СКУ100ПКМ<span class='PB'>ВЗ</span>: ((100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * <span class='PB'>2.5</span>) * (300 * <span class='PB'>${pb}%</span> * (${chance - 1}% + 1%))</p>
// <p class="annP">СЧУп100ПКМ<span class='PB'>ВЗ</span>: ((49 + ${damage}% + ${mob}%) * <span class='PB'>2.5</span>) * (100 * <span class='PB'>${pb}%</span> - (${chance - 1}% + 1%))</p>
// <p class="annP crit">СКУп100ПКМ<span class='PB'>ВЗ</span>: ((49 + ${damage}% + ${mob}% + (150% + ${crit}%)) * <span class='PB'>2.5</span>) * (100 * <span class='PB'>${pb}%</span> * (${chance - 1}% + 1%))</p>
		}else {
			document.getElementById("prompt100Pkm_1").innerHTML = `<span class="ann">*при условии, что ${chance_1 - 1}% + 1% = ${chance_1}%</span><br><br>
																													<p class="annP">СЧУ100ПКМ: ${maxDamage_1.toFixed(3)} * (300 - (${chance_1 - 1}% + 1%)</p>
																													<p class="annP crit">СКУ100ПКМ: ${maxCrit_1.toFixed(3)} * (300 * (${chance_1 - 1}% + 1%)</p>
																													<p class="annP">СЧУп100ПКМ: ${littleDamage_1.toFixed(3)} * (100 - (${chance_1 - 1}% + 1%)</p>
																													<p class="annP crit">СКУп100ПКМ: ${littleCrit_1.toFixed(3)} * (100 * (${chance_1 - 1}% + 1%)</p>`;

// <p class="annP">СЧУ100ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%)) * (300 - (${chance - 1}% + 1%)</p>
// <p class="annP crit">СКУ100ПКМ: (100 + ${damage}% + (${shotgun}% + ${mob}%) + (150% + ${crit}%)) * (300 * (${chance - 1}% + 1%)</p>
// <p class="annP">СЧУп100ПКМ: (49 + ${damage}% + ${mob}%) * (100 - (${chance - 1}% + 1%)</p>
// <p class="annP crit">СКУп100ПКМ: (49 + ${damage}% + ${mob}%) + (150% + ${crit}%)) * (100 * (${chance - 1}% + 1%)</p>
		}

		if (pb_1 > 0) {    // ------------------- ПКМ с ВЗ ---------------------



			// --------------- ВЗ --------------- //

			maxChanceDamage100PB_1 = maxDamagePB_1 * ((300 * (pb_1 * 0.01)) - (300 * (pb_1 * 0.01)) * (chance_1 * 0.01));
			document.getElementById('maxChanceDamage100PB_1').innerHTML = "Средний чистый урон за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceDamage100PB_1);
		
			maxChanceCrit100PB_1 = maxCritPB_1 * ((300 * (pb_1 * 0.01)) * (chance_1 * 0.01));
			document.getElementById('maxChanceCrit100PB_1').innerHTML = "Средний критический урон за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceCrit100PB_1);

			maxChanceLittleDamage100PB_1 = littleDamagePB_1 * (pb_1 - (pb_1 * (chance_1 * 0.01)));
			document.getElementById('maxChanceLittleDamage100PB_1').innerHTML = "Средний чистый урон от первого взрыва за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceLittleDamage100PB_1);

			maxChanceLittleCrit100PB_1 = littleCritPB_1 * (pb_1 * (chance_1 * 0.01));
			document.getElementById('maxChanceLittleCrit100PB_1').innerHTML = "Средний критический урон от первого взрыва за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceLittleCrit100PB_1);
		
			full100PB_1 = parseInt(maxChanceDamage100PB_1 + maxChanceCrit100PB_1 + maxChanceLittleDamage100PB_1 + maxChanceLittleCrit100PB_1);
			document.getElementById('full100PB_1').innerHTML = "Суммарный урон за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + full100PB_1;

			// ---------------------------------- //


			maxChanceDamage100_1 = maxDamage_1 * (300 - ((300 * (chance_1 * 0.01))));
			maxChanceDamage100_1 = maxChanceDamage100_1 - maxDamage_1 * (maxChanceDamage100PB_1 / maxDamagePB_1);
			document.getElementById('maxChanceDamage100_1').innerHTML = "Средний чистый урон за 100 выстрелов ПКМ: " + parseInt(maxChanceDamage100_1);

			maxChanceCrit100_1 = maxCrit_1 * (300 * (chance_1 * 0.01));
			maxChanceCrit100_1 = maxChanceCrit100_1 - maxCrit_1 * (maxChanceCrit100PB_1 / maxCritPB_1);
			document.getElementById('maxChanceCrit100_1').innerHTML = "Средний критический урон за 100 выстрелов ПКМ: " + parseInt(maxChanceCrit100_1);

			maxChanceLittleDamage100_1 = littleDamage_1 * (100 - (100 * (chance_1 * 0.01)));
			maxChanceLittleDamage100_1 = maxChanceLittleDamage100_1 - littleDamage_1 * (maxChanceLittleDamage100PB_1 / littleDamagePB_1);
			document.getElementById('maxChanceLittleDamage100_1').innerHTML = "Средний чистый урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleDamage100_1);

			maxChanceLittleCrit100_1 = littleCrit_1 * (100 * (chance_1 * 0.01));
			maxChanceLittleCrit100_1 = maxChanceLittleCrit100_1 - littleCrit_1 * (maxChanceLittleCrit100PB_1 / littleCritPB_1);
			document.getElementById('maxChanceLittleCrit100_1').innerHTML = "Средний критический урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleCrit100_1);

			full100_1 = parseInt(maxChanceDamage100_1 + maxChanceCrit100_1 + maxChanceLittleDamage100_1 + maxChanceLittleCrit100_1);
			document.getElementById('full100_1').innerHTML = "Суммарный урон за 100 выстрелов ПКМ: " + full100_1;


			full100PBSum_1 = parseInt(full100_1 + full100PB_1);
			document.getElementById('full100PBSum_1').innerHTML = "Полный суммарный урон за 100 выстрелов ПКМ с " + "<span class='PB'>ВЗ</span>" + ": " + full100PBSum_1; // Если есть ВЗ



		} else {			// ------------------- ПКМ без ВЗ ---------------------

			maxChanceDamage100_1 = maxDamage_1 * (300 - ((300 * (chance_1 * 0.01))));
			document.getElementById('maxChanceDamage100_1').innerHTML = "Средний чистый урон за 100 выстрелов ПКМ: " + parseInt(maxChanceDamage100_1);

			maxChanceCrit100_1 = maxCrit_1 * (300 * (chance_1 * 0.01));
			document.getElementById('maxChanceCrit100_1').innerHTML = "Средний критический урон за 100 выстрелов ПКМ: " + parseInt(maxChanceCrit100_1);

			maxChanceLittleDamage100_1 = littleDamage_1 * (100 - (100 * (chance_1 * 0.01)));
			document.getElementById('maxChanceLittleDamage100_1').innerHTML = "Средний чистый урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleDamage100_1);

			maxChanceLittleCrit100_1 = littleCrit_1 * (100 * (chance_1 * 0.01));
			document.getElementById('maxChanceLittleCrit100_1').innerHTML = "Средний критический урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleCrit100_1);

			full100_1 = parseInt(maxChanceDamage100_1 + maxChanceCrit100_1 + maxChanceLittleDamage100_1 + maxChanceLittleCrit100_1);
			document.getElementById('full100_1').innerHTML = "Суммарный урон за 100 выстрелов ПКМ: " + full100_1;


			document.getElementById('maxChanceDamage100PB_1').innerHTML = "";
			document.getElementById('maxChanceCrit100PB_1').innerHTML = "";
			document.getElementById('maxChanceLittleDamage100PB_1').innerHTML = "";
			document.getElementById('maxChanceLittleCrit100PB_1').innerHTML = "";
			document.getElementById('full100PB_1').innerHTML = "";
			document.getElementById('full100PBSum_1').innerHTML = "";

			document.getElementById('full100_1').innerHTML = "Суммарный урон за 100 выстрелов ПКМ: " + full100_1;
			document.getElementById('full100PBSum_1').innerHTML = ""; // Если нет ВЗ
		}
		

		// -------------------------------------------------------------------




	//---------------------------------ЛКМ---------------------------------//


	document.getElementById('lkm_1').innerHTML = "Расчёт по ЛКМ:";
					// ----------------- Аннотация ----------------- //
	if (pb_1 > 0) {
		document.getElementById("promptLkm_1").innerHTML = `<span class="ann">*при условии, что ${shotgun_1}% + ${mob_1}% = ${shotgun_1 + mob_1}%</span><br><br>
																										<p class="annP">МЧУГ: 58 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)</p>
																										<p class="annP crit">МКУГ: 58 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)</p>
																										<p class="annP">МЧУШ: 34 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)</p>
																										<p class="annP crit">МКУШ: 34 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)</p>
																										<p class="annP">МЧУТ: 29 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)</p>
																										<p class="annP crit">МКУТ: 29 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)</p><br>
																										
																										<p class="annP">МЧУГ<span class='PB'>ВЗ</span>: (58 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP crit">МКУГ<span class='PB'>ВЗ</span>: (58 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP">МЧУШ:<span class='PB'>ВЗ</span> (34 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP crit">МКУШ<span class='PB'>ВЗ</span>: (34 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP">МЧУТ<span class='PB'>ВЗ</span>: (29 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)) * <span class='PB'>2.5</span></p>
																										<p class="annP crit">МКУТ<span class='PB'>ВЗ</span>: (29 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)) * <span class='PB'>2.5</span></p>`;
																										
	} else {
		document.getElementById("promptLkm_1").innerHTML = `<span class="ann">*при условии, что ${shotgun_1}% + ${mob_1}% = ${shotgun_1 + mob_1}%</span><br><br>
																										<p class="annP">МЧУГ: 58 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)</p>
																										<p class="annP crit">МКУГ: 58 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)</p>
																										<p class="annP">МЧУШ: 34 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)</p>
																										<p class="annP crit">МКУШ: 34 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)</p>
																										<p class="annP">МЧУТ: 29 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%)</p>
																										<p class="annP crit">МКУТ: 29 + ${damage_1}% + (${shotgun_1}% + ${mob_1}%) + (150% + ${crit_1}%)</p>`;
	}

	maxHeadDamage_1 = 58 + (58 * (damage_1 * 0.01)) + ((58 + (58 * (damage_1 * 0.01))) * ((shotgun_1 + mob_1) * 0.01));
	document.getElementById('maxHeadDamage_1').innerHTML = "Максимальный чистый урон в голову: " + parseInt(maxHeadDamage_1);

	maxHeadCrit_1 = maxHeadDamage_1 + (maxHeadDamage_1 * (1.5 + (crit_1 * 0.01)));
	document.getElementById('maxHeadCrit_1').innerHTML = "Максимальный критический урон в голову: " + parseInt(maxHeadCrit_1);



	maxNeckDamage_1 = 34 + (34 * (damage_1 * 0.01)) + ((34 + (34 * (damage_1 * 0.01))) * ((shotgun_1 + mob_1) * 0.01));
	document.getElementById('maxNeckDamage_1').innerHTML = "Максимальный чистый урон в шею: " + parseInt(maxNeckDamage_1);

	maxNeckCrit_1 = maxNeckDamage_1 + (maxNeckDamage_1 * (1.5 + (crit_1 * 0.01)));
	document.getElementById('maxNeckCrit_1').innerHTML = "Максимальный критический урон в шею: " + parseInt(maxNeckCrit_1);



	maxBodyDamage_1 = 29 + (29 * (damage_1 * 0.01)) + ((29 + (29 * (damage_1 * 0.01))) * ((shotgun_1 + mob_1) * 0.01));
	document.getElementById('maxBodyDamage_1').innerHTML = "Максимальный чистый урон в тело: " + parseInt(maxBodyDamage_1);

	maxBodyCrit_1 = maxBodyDamage_1 + (maxBodyDamage_1 * (1.5 + (crit_1 * 0.01)));
	document.getElementById('maxBodyCrit_1').innerHTML = "Максимальный критический урон в тело: " + parseInt(maxBodyCrit_1);


	// ----------------------- ВЗ ЛКМ -------------------------- //

	if (pb_1 > 0) {

		maxHeadDamagePB_1 = maxHeadDamage_1 * 2.5;
		document.getElementById('maxHeadDamagePB_1').innerHTML = "Максимальный чистый урон в голову c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxHeadDamagePB_1);

		maxHeadCritPB_1 = maxHeadCrit_1 * 2.5;
		document.getElementById('maxHeadCritPB_1').innerHTML = "Максимальный критический урон в голову c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxHeadCritPB_1);



		maxNeckDamagePB_1 = maxNeckDamage_1 * 2.5;
		document.getElementById('maxNeckDamagePB_1').innerHTML = "Максимальный чистый урон в шею c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxNeckDamagePB_1);

		maxNeckCritPB_1 = maxNeckCrit_1 * 2.5;
		document.getElementById('maxNeckCritPB_1').innerHTML = "Максимальный критический урон в шею c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxNeckCritPB_1);



		maxBodyDamagePB_1 = maxBodyDamage_1 * 2.5;
		document.getElementById('maxBodyDamagePB_1').innerHTML = "Максимальный чистый урон в тело c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxBodyDamagePB_1);

		maxBodyCritPB_1 = maxBodyCrit_1 * 2.5;
		document.getElementById('maxBodyCritPB_1').innerHTML = "Максимальный критический урон в тело c " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxBodyCritPB_1);

	} else {
		document.getElementById('maxHeadDamagePB_1').innerHTML = "";
		document.getElementById('maxHeadCritPB_1').innerHTML = "";
		document.getElementById('maxNeckDamagePB_1').innerHTML = "";
		document.getElementById('maxNeckCritPB_1').innerHTML = "";
		document.getElementById('maxBodyDamagePB_1').innerHTML = "";
		document.getElementById('maxBodyCritPB_1').innerHTML = "";
	}

		

	// -----------------------        -------------------------- //



//==============// ШАНС ЛКМ //==============//



// -------------------------------- 10 -------------------------------

	document.getElementById('break10lkm_1').innerHTML = "расчёт на 10 выстрелов*";
					// ----------------- Аннотация ----------------- //
	document.getElementById("prompt10Lkm_1").innerHTML = `<span class="ann">*при условии, что ${chance_1 - 1}% + 1% = ${chance_1}%</span><br><br>
																									<p class="annP">СЧУГ10ЛКМ: ${maxHeadDamage_1.toFixed(3)} * (80 - (${chance_1 - 1}% + 1%)</p>
																									<p class="annP crit">СКУГ10ЛКМ: ${maxHeadCrit_1.toFixed(3)} * (80 * (${chance_1 - 1}% + 1%)</p><br>
																									<p class="annP">СЧУШ10ЛКМ: ${maxNeckDamage_1.toFixed(3)} * (80 - (${chance_1 - 1}% + 1%)</p>
																									<p class="annP crit">СКУШ10ЛКМ: ${maxNeckCrit_1.toFixed(3)} * (80 * (${chance_1 - 1}% + 1%)</p><br>
																									<p class="annP">СЧУТ10ЛКМ: ${maxBodyDamage_1.toFixed(3)} * (80 - (${chance_1 - 1}% + 1%)</p>
																									<p class="annP crit">СКУТ10ЛКМ: ${maxBodyCrit_1.toFixed(3)} * (80 * (${chance_1 - 1}% + 1%)</p>`;

	maxChanceHeadDamage_1 = maxHeadDamage_1 * (80 - ((80 * (chance_1 * 0.01))));
	document.getElementById('maxChanceHeadDamage_1').innerHTML = "Средний чистый урон за 10 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadDamage_1);

	maxChanceHeadCrit_1 = maxHeadCrit_1 * (80 * (chance_1 * 0.01));
	document.getElementById('maxChanceHeadCrit_1').innerHTML = "Средний критический урон за 10 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadCrit_1);



	maxChanceNeckDamage_1 = maxNeckDamage_1 * (80 - ((80 * (chance_1 * 0.01))));
	document.getElementById('maxChanceNeckDamage_1').innerHTML = "Средний чистый урон за 10 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckDamage_1);

	maxChanceNeckCrit_1 = maxNeckCrit_1 * (80 * (chance_1 * 0.01));
	document.getElementById('maxChanceNeckCrit_1').innerHTML = "Средний критический урон за 10 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckCrit_1);



	maxChanceBodyDamage_1 = maxBodyDamage_1 * (80 - ((80 * (chance_1 * 0.01))));
	document.getElementById('maxChanceBodyDamage_1').innerHTML = "Средний чистый урон за 10 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyDamage_1);

	maxChanceBodyCrit_1 = maxBodyCrit_1 * (80 * (chance_1 * 0.01));
	document.getElementById('maxChanceBodyCrit_1').innerHTML = "Средний критический урон за 10 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyCrit_1);



	fullHead_1 = parseInt(maxChanceHeadDamage_1 + maxChanceHeadCrit_1);
	document.getElementById('fullHead_1').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в голову: " + fullHead_1;

	fullNeck_1 = parseInt(maxChanceNeckDamage_1 + maxChanceNeckCrit_1);
	document.getElementById('fullNeck_1').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в шею: " + fullNeck_1;

	fullBody_1 = parseInt(maxChanceBodyDamage_1 + maxChanceBodyCrit_1);
	document.getElementById('fullBody_1').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в тело: " + fullBody_1;



// ----------------------------- 100 -----------------------------------


	document.getElementById('break100lkm_1').innerHTML = "расчёт на 100 выстрелов*";
						// ----------------- Аннотация ----------------- //
	if (pb_1 > 0) {
		document.getElementById("prompt100Lkm_1").innerHTML = `<span class="ann">*при условии, что ${chance_1 - 1}% + 1% = ${chance_1}%</span><br><br>
																												<p class="annP">СЧУГ100ЛКМ: ${maxHeadDamage_1.toFixed(3)} * (800 - (${chance_1 - 1}% + 1%) - <span class='PB'>${maxHeadDamage_1.toFixed(3)} * (800 * ${pb_1}% - (${chance_1 - 1}% + 1%))</span></p>
																												<p class="annP crit">СКУГ100ЛКМ: ${maxHeadCrit_1.toFixed(3)} * (800 * (${chance_1 - 1}% + 1%) - <span class='PB'>${maxHeadCrit_1.toFixed(3)} * (800 * ${pb_1}% * (${chance_1 - 1}% + 1%))</span></p><br>
																												<p class="annP">СЧУШ100ЛКМ: ${maxNeckDamage_1.toFixed(3)} * (800 - (${chance_1 - 1}% + 1%) - <span class='PB'>${maxNeckDamage_1.toFixed(3)} * (800 * ${pb_1}% - (${chance_1 - 1}% + 1%))</span></p>
																												<p class="annP crit">СКУШ100ЛКМ: ${maxNeckCrit_1.toFixed(3)} * (800 * (${chance_1 - 1}% + 1%) - <span class='PB'>${maxNeckCrit_1.toFixed(3)} * (800 * ${pb_1}% * (${chance_1 - 1}% + 1%))</span></p><br>
																												<p class="annP">СЧУТ100ЛКМ: ${maxBodyDamage_1.toFixed(3)} * (800 - (${chance_1 - 1}% + 1%) - <span class='PB'>${maxBodyDamage_1.toFixed(3)} * (800 * ${pb_1}% - (${chance_1 - 1}% + 1%))</span></p>
																												<p class="annP crit">СКУТ100ЛКМ: ${maxBodyCrit_1.toFixed(3)} * (800 * (${chance_1 - 1}% + 1%) - <span class='PB'>${maxBodyCrit_1.toFixed(3)} * (800 * ${pb_1}% * (${chance_1 - 1}% + 1%))</span></p><br>

																												<p class="annP">СЧУГ100ПКМ<span class='PB'>ВЗ</span>: ${maxHeadDamagePB_1.toFixed(3)} * (800 * <span class='PB'>${pb_1}%</span> - (${chance_1 - 1}% + 1%))</p>
																												<p class="annP crit">СКУГ100ПКМ<span class='PB'>ВЗ</span>: ${maxHeadCritPB_1.toFixed(3)} * (800 * <span class='PB'>${pb_1}%</span> * (${chance_1 - 1}% + 1%))</p>
																												<p class="annP">СЧУШ100ПКМ<span class='PB'>ВЗ</span>: ${maxNeckDamagePB_1.toFixed(3)} * (800 * <span class='PB'>${pb_1}%</span> - (${chance_1 - 1}% + 1%))</p>
																												<p class="annP crit">СКУШ100ПКМ<span class='PB'>ВЗ</span>: ${maxNeckCritPB_1.toFixed(3)} * (800 * <span class='PB'>${pb_1}%</span> * (${chance_1 - 1}% + 1%))</p>
																												<p class="annP">СЧУТ100ПКМ<span class='PB'>ВЗ</span>: ${maxBodyDamagePB_1.toFixed(3)} * (800 * <span class='PB'>${pb_1}%</span> - (${chance_1 - 1}% + 1%))</p>
																												<p class="annP crit">СКУТ100ПКМ<span class='PB'>ВЗ</span>: ${maxBodyCritPB_1.toFixed(3)} * (800 * <span class='PB'>${pb_1}%</span> * (${chance_1 - 1}% + 1%))</p>`;

	}else {
		document.getElementById("prompt100Lkm_1").innerHTML = `<span class="ann">*при условии, что ${chance_1 - 1}% + 1% = ${chance_1}%</span><br><br>
																												<p class="annP">СЧУГ10ЛКМ: ${maxHeadDamage_1.toFixed(3)} * (800 - (${chance_1 - 1}% + 1%)</p>
																												<p class="annP crit">СКУГ10ЛКМ: ${maxHeadCrit_1.toFixed(3)} * (800 * (${chance_1 - 1}% + 1%)</p><br>
																												<p class="annP">СЧУШ10ЛКМ: ${maxNeckDamage_1.toFixed(3)} * (800 - (${chance_1 - 1}% + 1%)</p>
																												<p class="annP crit">СКУШ10ЛКМ: ${maxNeckCrit_1.toFixed(3)} * (800 * (${chance_1 - 1}% + 1%)</p><br>
																												<p class="annP">СЧУТ10ЛКМ: ${maxBodyDamage_1.toFixed(3)} * (800 - (${chance_1 - 1}% + 1%)</p>
																												<p class="annP crit">СКУТ10ЛКМ: ${maxBodyCrit_1.toFixed(3)} * (800 * (${chance_1 - 1}% + 1%)</p>`;
	}


		
	if (pb_1 > 0) {    // ------------------- ВЗ ---------------------


		// ------------------- ВЗ выстрелы ---------------------


		maxChanceHeadDamage100PB_1 = maxHeadDamagePB_1 * ((800 * (pb_1 * 0.01)) - (800 * (pb_1 * 0.01)) * (chance_1 * 0.01));
		document.getElementById('maxChanceHeadDamage100PB_1').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в голову с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceHeadDamage100PB_1);

		maxChanceHeadCrit100PB_1 = maxHeadCritPB_1 * (800 * (pb_1 * 0.01)) * (chance_1 * 0.01);
		document.getElementById('maxChanceHeadCrit100PB_1').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в голову с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceHeadCrit100PB_1);

		fullHead100PB_1 = parseInt(maxChanceHeadDamage100PB_1 + maxChanceHeadCrit100PB_1);
		document.getElementById('fullHead100PB_1').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в голову с " + "<span class='PB'>ВЗ</span>" + ": " + fullHead100PB_1;



		maxChanceNeckDamage100PB_1 = maxNeckDamagePB_1 * ((800 * (pb_1 * 0.01)) - (800 * (pb_1 * 0.01)) * (chance_1 * 0.01));
		document.getElementById('maxChanceNeckDamage100PB_1').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в шею с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceNeckDamage100PB_1);

		maxChanceNeckCrit100PB_1 = maxNeckCritPB_1 * (800 * (pb_1 * 0.01)) * (chance_1 * 0.01);
		document.getElementById('maxChanceNeckCrit100PB_1').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в шею с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceNeckCrit100PB_1);

		fullNeck100PB_1 = parseInt(maxChanceNeckDamage100PB_1 + maxChanceNeckCrit100PB_1);
		document.getElementById('fullNeck100PB_1').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в шею с " + "<span class='PB'>ВЗ</span>" + ": " + fullNeck100PB_1;



		maxChanceBodyDamage100PB_1 = maxBodyDamagePB_1 * ((800 * (pb_1 * 0.01)) - (800 * (pb_1 * 0.01)) * (chance_1 * 0.01));
		document.getElementById('maxChanceBodyDamage100PB_1').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в тело с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceBodyDamage100PB_1);

		maxChanceBodyCrit100PB_1 = maxBodyCritPB_1 * (800 * (pb_1 * 0.01)) * (chance_1 * 0.01);
		document.getElementById('maxChanceBodyCrit100PB_1').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в тело с " + "<span class='PB'>ВЗ</span>" + ": " + parseInt(maxChanceBodyCrit100PB_1);

		fullBody100PB_1 = parseInt(maxChanceBodyDamage100PB_1 + maxChanceBodyCrit100PB_1);
		document.getElementById('fullBody100PB_1').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в тело с " + "<span class='PB'>ВЗ</span>" + ": " + fullBody100PB_1;




		// ------------------- не ВЗ выстрелы ---------------------

		maxChanceHeadDamage100_1 = maxHeadDamage_1 * (800 - ((800 * (chance_1 * 0.01))));
		maxChanceHeadDamage100_1 = maxChanceHeadDamage100_1 - maxHeadDamage_1 * (maxChanceHeadDamage100PB_1 / maxHeadDamagePB_1);
		document.getElementById('maxChanceHeadDamage100_1').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadDamage100_1);

		maxChanceHeadCrit100_1 = maxHeadCrit_1 * (800 * (chance_1 * 0.01));
		maxChanceHeadCrit100_1 = maxChanceHeadCrit100_1 - maxHeadCrit_1 * (maxChanceHeadCrit100PB_1 / maxHeadCritPB_1);
		document.getElementById('maxChanceHeadCrit100_1').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadCrit100_1);




		maxChanceNeckDamage100_1 = maxNeckDamage_1 * (800 - ((800 * (chance_1 * 0.01))));
		maxChanceNeckDamage100_1 = maxChanceNeckDamage100_1 - maxNeckDamage_1 * (maxChanceNeckDamage100PB_1 / maxNeckDamagePB_1);
		document.getElementById('maxChanceNeckDamage100_1').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckDamage100_1);

		maxChanceNeckCrit100_1 = maxNeckCrit_1 * (800 * (chance_1 * 0.01));
		maxChanceNeckCrit100_1 = maxChanceNeckCrit100_1 - maxNeckCrit_1 * (maxChanceNeckCrit100PB_1 / maxNeckCritPB_1);
		document.getElementById('maxChanceNeckCrit100_1').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckCrit100_1);




		maxChanceBodyDamage100_1 = maxBodyDamage_1 * (800 - ((800 * (chance_1 * 0.01))));
		maxChanceBodyDamage100_1 = maxChanceBodyDamage100_1 - maxBodyDamage_1 * (maxChanceBodyDamage100PB_1 / maxBodyDamagePB_1);
		document.getElementById('maxChanceBodyDamage100_1').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyDamage100_1);

		maxChanceBodyCrit100_1 = maxBodyCrit_1 * (800 * (chance_1 * 0.01));
		maxChanceBodyCrit100_1 = maxChanceBodyCrit100_1 - maxBodyCrit_1 * (maxChanceBodyCrit100PB_1 / maxBodyCritPB_1);
		document.getElementById('maxChanceBodyCrit100_1').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyCrit100_1);



		fullHead100_1 = parseInt(maxChanceHeadDamage100_1 + maxChanceHeadCrit100_1);

		fullNeck100_1 = parseInt(maxChanceNeckDamage100_1 + maxChanceNeckCrit100_1);

		fullBody100_1 = parseInt(maxChanceBodyDamage100_1 + maxChanceBodyCrit100_1);









		// fullHead100_1 = parseInt(fullHead100_1 - (maxHeadDamage_1 * (8 * (pb_1 - (pb_1 * (chance_1 * 0.01))))));
		// fullHead100_1 = parseInt(fullHead100_1 - (maxHeadCrit_1 * (8 * (pb_1 * (chance_1 * 0.01)))));

		document.getElementById('fullHead100_1').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в голову: " + fullHead100_1;

		// fullNeck100_1 = parseInt(fullNeck100_1 - (maxNeckDamage_1 * (8 * (pb_1 - (pb_1 * (chance_1 * 0.01))))));
		// fullNeck100_1 = parseInt(fullNeck100_1 - (maxNeckCrit_1 * (8 * (pb_1 * (chance_1 * 0.01)))));

		document.getElementById('fullNeck100_1').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в шею: " + fullNeck100_1;

		// fullBody100_1 = parseInt(fullBody100_1 - (maxBodyDamage_1 * (8 * (pb_1 - (pb_1 * (chance_1 * 0.01))))));
		// fullBody100_1 = parseInt(fullBody100_1 - (maxBodyCrit_1 * (8 * (pb_1 * (chance_1 * 0.01)))));

		document.getElementById('fullBody100_1').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в тело: " + fullBody100_1;





		fullHead100PBSum_1 = parseInt(fullHead100_1 + fullHead100PB_1);
		document.getElementById('fullHead100PBSum_1').innerHTML = "Полный суммарный урон за 100 выстрелов ЛКМ в голову с " + "<span class='PB'>ВЗ</span>" + ": " + fullHead100PBSum_1; // Если есть ВЗ

		fullNeck100PBSum_1 = parseInt(fullNeck100_1 + fullNeck100PB_1);
		document.getElementById('fullNeck100PBSum_1').innerHTML = "Полный суммарный урон за 100 выстрелов ЛКМ в шею с " + "<span class='PB'>ВЗ</span>" + ": " + fullNeck100PBSum_1; // Если есть ВЗ

		fullBody100PBSum_1 = parseInt(fullBody100_1 + fullBody100PB_1);
		document.getElementById('fullBody100PBSum_1').innerHTML = "Полный суммарный урон за 100 выстрелов ЛКМ в тело с " + "<span class='PB'>ВЗ</span>" + ": " + fullBody100PBSum_1; // Если есть ВЗ


	} else {    // ------------------- Без ВЗ ---------------------

		document.getElementById('break100lkm_1').innerHTML = "расчёт на 100 выстрелов*";

		maxChanceHeadDamage100_1 = maxHeadDamage_1 * (800 - ((800 * (chance_1 * 0.01))));
		document.getElementById('maxChanceHeadDamage100_1').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadDamage100_1);

		maxChanceHeadCrit100_1 = maxHeadCrit_1 * (800 * (chance_1 * 0.01));
		document.getElementById('maxChanceHeadCrit100_1').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в голову: " + parseInt(maxChanceHeadCrit100_1);




		maxChanceNeckDamage100_1 = maxNeckDamage_1 * (800 - ((800 * (chance_1 * 0.01))));
		document.getElementById('maxChanceNeckDamage100_1').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckDamage100_1);

		maxChanceNeckCrit100_1 = maxNeckCrit_1 * (800 * (chance_1 * 0.01));
		document.getElementById('maxChanceNeckCrit100_1').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в шею: " + parseInt(maxChanceNeckCrit100_1);




		maxChanceBodyDamage100_1 = maxBodyDamage_1 * (800 - ((800 * (chance_1 * 0.01))));
		document.getElementById('maxChanceBodyDamage100_1').innerHTML = "Средний чистый урон за 100 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyDamage100_1);

		maxChanceBodyCrit100_1 = maxBodyCrit_1 * (800 * (chance_1 * 0.01));
		document.getElementById('maxChanceBodyCrit100_1').innerHTML = "Средний критический урон за 100 выстрелов ЛКМ в тело: " + parseInt(maxChanceBodyCrit100_1);



		fullHead100_1 = parseInt(maxChanceHeadDamage100_1 + maxChanceHeadCrit100_1);

		fullNeck100_1 = parseInt(maxChanceNeckDamage100_1 + maxChanceNeckCrit100_1);

		fullBody100_1 = parseInt(maxChanceBodyDamage100_1 + maxChanceBodyCrit100_1);


		document.getElementById('maxChanceHeadDamage100PB_1').innerHTML = "";
		document.getElementById('maxChanceHeadCrit100PB_1').innerHTML = "";
		document.getElementById('maxChanceNeckDamage100PB_1').innerHTML = "";
		document.getElementById('maxChanceNeckCrit100PB_1').innerHTML = "";
		document.getElementById('maxChanceBodyDamage100PB_1').innerHTML = "";
		document.getElementById('maxChanceBodyCrit100PB_1').innerHTML = "";

		document.getElementById('fullHead100PB_1').innerHTML = "";
		document.getElementById('fullNeck100PB_1').innerHTML = "";
		document.getElementById('fullBody100PB_1').innerHTML = "";

		document.getElementById('fullHead100_1').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в голову: " + fullHead100_1;
		document.getElementById('fullNeck100_1').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в шею: " + fullNeck100_1;
		document.getElementById('fullBody100_1').innerHTML = "Суммарный урон за 100 выстрелов ЛКМ в тело: " + fullBody100_1;

		document.getElementById('fullHead100PBSum_1').innerHTML = ""; // Если нет ВЗ
		document.getElementById('fullNeck100PBSum_1').innerHTML = ""; // Если нет ВЗ
		document.getElementById('fullBody100PBSum_1').innerHTML = ""; // Если нет ВЗ

	}

}