function calc() {
	let damage, chance, crit, shotgun, mob,
			maxDamage, maxCrit, littleDamage, littleCrit,
			maxChanceDamage, maxChanceCrit, maxChanceLittleDamage, maxChanceLittleCrit,
			full,

			maxChanceDamage100, maxChanceCrit100, maxChanceLittleDamage100, maxChanceLittleCrit100,
			full100;

	let maxHeadDamage, maxNeckDamage, maxBodyDamage,
			maxHeadCrit, maxNeckCrit, maxBodyCrit,
			maxChanceHeadDamage, maxChanceHeadCrit, maxChanceNeckDamage, maxChanceNeckCrit, maxChanceBodyDamage, maxChanceBodyCrit,
			fullHead, fullNeck, fullBody,

			maxChanceHeadDamage100, maxChanceHeadCrit100, maxChanceNeckDamage100, maxChanceNeckCrit100, maxChanceBodyDamage100, maxChanceBodyCrit100,
			fullHead100, fullNeck100, fullBody100;

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


//---------------------------------ПКМ---------------------------------//


	document.getElementById('pkm').innerHTML = "Расчёт по ПКМ:";

	maxDamage = 100 + damage + ((100 + damage) * ((shotgun + mob) * 0.01));
	document.getElementById('maxDamage').innerHTML = "Максимальный чистый урон: " + parseInt(maxDamage);

	maxCrit = maxDamage + (maxDamage * (1.5 + (crit * 0.01)));
	document.getElementById('maxCrit').innerHTML = "Максимальный критический урон: " + parseInt(maxCrit);


	littleDamage = (49 + (49 * (damage * 0.01))) + ((49 + (49 * (damage * 0.01))) * (mob * 0.01));
	document.getElementById('littleDamage').innerHTML = "Максимальный чистый урон от первого взрыва: " + parseInt(littleDamage);

	littleCrit = littleDamage + (littleDamage * (1.5 + (crit * 0.01)));
	document.getElementById('littleCrit').innerHTML = "Максимальный критический урон от первого взрыва: " + parseInt(littleCrit);



//==============// ШАНС ПКМ //==============//


	
	document.getElementById('break10pkm').innerHTML = "расчёт на 10 выстрелов*";

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





	document.getElementById('break100pkm').innerHTML = "расчёт на 100 выстрелов*";

	maxChanceDamage100 = maxDamage * (300 - ((300 * (chance * 0.01))));
	document.getElementById('maxChanceDamage100').innerHTML = "Средний чистый урон за 100 выстрелов ПКМ: " + parseInt(maxChanceDamage100);

	maxChanceCrit100 = maxCrit * (300 * (chance * 0.01));
	document.getElementById('maxChanceCrit100').innerHTML = "Средний критический урон за 100 выстрелов ПКМ: " + parseInt(maxChanceCrit100);



	maxChanceLittleDamage100 = littleDamage * (100 - (chance * 0.1));
	document.getElementById('maxChanceLittleDamage100').innerHTML = "Средний чистый урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleDamage100);

	maxChanceLittleCrit100 = littleCrit * (chance * 0.1);
	document.getElementById('maxChanceLittleCrit100').innerHTML = "Средний критический урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleCrit100);

	full100 = parseInt(maxChanceDamage100 + maxChanceCrit100 + maxChanceLittleDamage100 + maxChanceLittleCrit100);
	document.getElementById('full100').innerHTML = "Суммарный урон за 100 выстрелов ПКМ: " + full100;


//---------------------------------ЛКМ---------------------------------//


	document.getElementById('lkm').innerHTML = "Расчёт по ЛКМ:";

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



//==============// ШАНС ЛКМ //==============//


	document.getElementById('break10lkm').innerHTML = "расчёт на 10 выстрелов*";

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



	document.getElementById('break100lkm').innerHTML = "расчёт на 100 выстрелов*";

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
	document.getElementById('fullHead100').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в голову: " + fullHead100;

	fullNeck100 = parseInt(maxChanceNeckDamage100 + maxChanceNeckCrit100);
	document.getElementById('fullNeck100').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в шею: " + fullNeck100;

	fullBody100 = parseInt(maxChanceBodyDamage100 + maxChanceBodyCrit100);
	document.getElementById('fullBody100').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в тело: " + fullBody100;


}













function calc_1() {
	let damage_1, chance_1, crit_1, shotgun_1, mob_1,
			maxDamage_1, maxCrit_1, littleDamage_1, littleCrit_1,
			maxChanceDamage_1, maxChanceCrit_1, maxChanceLittleDamage_1, maxChanceLittleCrit_1,
			full_1,

			maxChanceDamage100_1, maxChanceCrit100_1, maxChanceLittleDamage100_1, maxChanceLittleCrit100_1,
			full100_1;

	let maxHeadDamage_1, maxNeckDamage_1, maxBodyDamage_1,
			maxHeadCrit_1, maxNeckCrit_1, maxBodyCrit_1,
			maxChanceHeadDamage_1, maxChanceHeadCrit_1, maxChanceNeckDamage_1, maxChanceNeckCrit_1, maxChanceBodyDamage_1, maxChanceBodyCrit_1,
			fullHead_1, fullNeck_1, fullBody_1,

			maxChanceHeadDamage100_1, maxChanceHeadCrit100_1, maxChanceNeckDamage100_1, maxChanceNeckCrit100_1, maxChanceBodyDamage100_1, maxChanceBodyCrit100_1,
			fullHead100_1, fullNeck100_1, fullBody100_1;		

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



//---------------------------------ПКМ---------------------------------//

	document.getElementById('pkm_1').innerHTML = "Расчёт по ПКМ:";

	maxDamage_1 = 100 + damage_1 + ((100 + damage_1) * ((shotgun_1 + mob_1) * 0.01));
	document.getElementById('maxDamage_1').innerHTML = "Максимальный чистый урон: " + parseInt(maxDamage_1);

	maxCrit_1 = maxDamage_1 + (maxDamage_1 * (1.5 + (crit_1 * 0.01)));
	document.getElementById('maxCrit_1').innerHTML = "Максимальный критический урон: " + parseInt(maxCrit_1);



	littleDamage_1 = (49 + (49 * (damage_1 * 0.01))) + ((49 + (49 * (damage_1 * 0.01))) * (mob_1 * 0.01));
	document.getElementById('littleDamage_1').innerHTML = "Максимальный чистый урон от первого взрыва: " + parseInt(littleDamage_1);

	littleCrit_1 = littleDamage_1 + (littleDamage_1 * (1.5 + (crit_1 * 0.01)));
	document.getElementById('littleCrit_1').innerHTML = "Максимальный критический урон от первого взрыва: " + parseInt(littleCrit_1);



//==============// ШАНС ПКМ //==============//

	
	document.getElementById('break10pkm_1').innerHTML = "расчёт на 10 выстрелов*";

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




	document.getElementById('break100pkm_1').innerHTML = "расчёт на 100 выстрелов*";

	maxChanceDamage100_1 = maxDamage_1 * (300 - ((300 * (chance_1 * 0.01))));
	document.getElementById('maxChanceDamage100_1').innerHTML = "Средний чистый урон за 100 выстрелов ПКМ: " + parseInt(maxChanceDamage100_1);

	maxChanceCrit100_1 = maxCrit_1 * (300 * (chance_1 * 0.01));
	document.getElementById('maxChanceCrit100_1').innerHTML = "Средний критический урон за 100 выстрелов ПКМ: " + parseInt(maxChanceCrit100_1);



	maxChanceLittleDamage100_1 = littleDamage_1 * (100 - (chance_1 * 0.1));
	document.getElementById('maxChanceLittleDamage100_1').innerHTML = "Средний чистый урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleDamage100_1);

	maxChanceLittleCrit100_1 = littleCrit_1 * (chance_1 * 0.1);
	document.getElementById('maxChanceLittleCrit100_1').innerHTML = "Средний критический урон от первого взрыва за 100 выстрелов ПКМ: " + parseInt(maxChanceLittleCrit100_1);

	full100_1 = parseInt(maxChanceDamage100_1 + maxChanceCrit100_1 + maxChanceLittleDamage100_1 + maxChanceLittleCrit100_1);
	document.getElementById('full100_1').innerHTML = "Суммарный урон за 100 выстрелов ПКМ: " + full100_1;




	//---------------------------------ЛКМ---------------------------------//


	document.getElementById('lkm_1').innerHTML = "Расчёт по ЛКМ:";

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



//==============// ШАНС ЛКМ //==============//


	document.getElementById('break10lkm_1').innerHTML = "расчёт на 10 выстрелов*";

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
	document.getElementById('fullHead100_1').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в голову: " + fullHead100_1;

	fullNeck100_1 = parseInt(maxChanceNeckDamage100_1 + maxChanceNeckCrit100_1);
	document.getElementById('fullNeck100_1').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в шею: " + fullNeck100_1;

	fullBody100_1 = parseInt(maxChanceBodyDamage100_1 + maxChanceBodyCrit100_1);
	document.getElementById('fullBody100_1').innerHTML = "Суммарный урон за 10 выстрелов ЛКМ в тело: " + fullBody100_1;

}
