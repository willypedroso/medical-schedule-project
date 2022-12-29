import { doctors } from "./data"

var option: HTMLSelectElement = <HTMLSelectElement>document.getElementById('option');

window.onload = function() {
	option.value = '';
	option.focus();
   }

    var res = <HTMLDivElement>document.getElementById('res');
    var click = 0;

    function show() {
	
	if(option.value == 'all') {
	    res.innerHTML = `<ul id='docsList'>${doctors.map((doctor) => `<li>${doctor.name}</li><ul>${(`<li>${doctor.specialty}</li><li>${doctor.weekDays}</li>`).replace(/,/g, ', ')}</ul>`).join('')}</ul>`;
	} else if (option.value == 'doctor') {
	    res.innerHTML = `<select id='option2' onchange='docs()'><option value='' selected disabled hidden>Selecione</option>
				${doctors.map(doctor => `<option value='${doctor.name}'>${doctor.name}</option>`)}
				</select>`;
	} else if (option.value == 'specialty') {
	    res.innerHTML = `<select id='option3' onchange='specialtys()'>
				<option value='' selected disabled hidden>Selecione</option>
				<option value='Acupuncture'>Acupuncture</option>
				<option value='Cardiology'>Cardiology</option>
				<option value='Child Endocrinology'>Child Endocrinology</option>
				<option value='Child Neurology'>Child Neurology</option>
				<option value='Child Pulmonology'>Child Pulmonology</option>
				<option value='Dermatology'>Dermatology</option>
				<option value='Endocrinology'>Endocrinology</option>
				<option value='gastroenterologia'>Gastroenterologia</option>
				<option value='Geriatrics'>Geriatrics</option>
				<option value='Gynecology'>Gynecology</option>
				<option value='Neurology'>Neurology</option>
				<option value='Ophthalmology'>Ophthalmology</option>
				<option value='Orthopedics'>Orthopedics</option>
				<option value='Otolaryngology'>Otolaryngology</option>
				<option value='Pediatrics'>Pediatrics</option>
				<option value='Rheumatology'>Rheumatology</option>
				<option value='Speech Therapy'>Speech Therapy</option>
				<option value='Urology'>Urology</option>
				<option value='Vascular'>Vascular</option>
			     </select>`;
	} else if (option.value == 'days') {
	    res.innerHTML = `<select id='option4' onchange='days()'>
				<option value='' selected disabled hidden>Selecione</option>
				<option value='monday'>monday</option>
				<option value='tuesday'>Terça</option>
				<option value='wednesday'>wednesday</option>
				<option value='thursday'>thursday</option>
				<option value='friday'>friday</option>
			     </select>`;
	}
    }

    function docs() {
	var option2 = <HTMLSelectElement>document.getElementById('option2');
	if(option2.value == '') {
	    alert("Select an option.");
	} else {
	var docs = doctors.filter(doc => doc.name == option2.value);
	res.innerHTML = `<select id='option2' onchange='docs()'><option value='' selected disabled hidden>Selecione</option>
				${doctors.map(doctor => `<option value='${doctor.name}'>${doctor.name}</option>`)}
				</select>`;
	res.innerHTML += `<ul id='docsList'>${docs.map((doctor) => `<li>${doctor.name}</li><ul>${(`<li>${doctor.specialty}</li><li>${doctor.weekDays}</li>`).replace(/,/g, ', ')}</ul>`).join('')}</ul>`;
	}
    }

    function specialtys() {
	var option3 = <HTMLSelectElement>document.getElementById('option3');
	if(option3.value == '') {
	    alert("Select an option.");
	} else {
	var specialtydoc = doctors.filter(doc => doc.specialty.includes(option3.value.toUpperCase()));
	res.innerHTML = `<select id='option3' onchange='specialtys()'>
				<option value='' selected disabled hidden>Selecione</option>
				<option value='Acupuncture'>Acupuncture</option>
				<option value='Cardiology'>Cardiology</option>
				<option value='Child Endocrinology'>Child Endocrinology</option>
				<option value='Child Neurology'>Child Neurology</option>
				<option value='Child Pulmonology'>Child Pulmonology</option>
				<option value='Dermatology'>Dermatology</option>
				<option value='Endocrinology'>Endocrinology</option>
				<option value='Geriatrics'>Geriatrics</option>
				<option value='Gynecology'>Gynecology</option>
				<option value='Neurology'>Neurology</option>
				<option value='Ophthalmology'>Ophthalmology</option>
				<option value='Orthopedics'>Orthopedics</option>
				<option value='Otolaryngology'>Otolaryngology</option>
				<option value='Pediatrics'>Pediatrics</option>
				<option value='Rheumatology'>Rheumatology</option>
				<option value='Speech Therapy'>Speech Therapy</option>
				<option value='Urology'>Urology</option>
				<option value='Vascular'>Vascular</option>
			     </select>`;
	res.innerHTML += `<h3>${option3.value.toUpperCase()}</h3><ul id='docsList'>${specialtydoc.map((doctor) => `<li>${doctor.name}</li><ul>${(`<li>${doctor.weekDays}</li>`).replace(/,/g, ', ')}</ul>`).join('')}</ul>`;
	}
    }

    function days() {
	let docweekDays = [];
	var option4 = <HTMLSelectElement>document.getElementById('option4');
	switch(option4.value){
	    case 'monday':
		docweekDays = doctors.filter(doctor => doctor.weekDays.includes('Monday'));
		res.innerHTML = `<select id='option4' onchange='days()'>
				     <option value='' selected disabled hidden>Selecione</option>
				     <option value='monday'>Monday</option>
				     <option value='tuesday'>Tuesday</option>
				     <option value='wednesday'>Wednesday</option>
				     <option value='thursday'>Thursday</option>
				     <option value='friday'>Friday</option>
			         </select>
			         <h3>MONDAY</h3>
				 <ul>${docweekDays.map(doctor => `<li>${doctor.name}</li><ul><li>${doctor.specialty}</li></ul>`).join('')}</ul>`;
		break;
	    case 'tuesday':
		docweekDays = doctors.filter(doctor => doctor.weekDays.includes('Tuesday'));
		res.innerHTML = `<select id='option4' onchange='days()'>
				     <option value='' selected disabled hidden>Selecione</option>
				     <option value='monday'>Monday</option>
				     <option value='tuesday'>Tuesday</option>
				     <option value='wednesday'>Wednesday</option>
				     <option value='thursday'>Thursday</option>
				     <option value='friday'>Friday</option>
			         </select>
				 <h3>TUESDAY</h3>
				 <ul>${docweekDays.map(doctor => `<li>${doctor.name}</li><ul><li>${doctor.specialty}</li></ul>`).join('')}</ul>`;
		break;
	    case 'wednesday':
		docweekDays = doctors.filter(doctor => doctor.weekDays.includes('Wednesday'));
		res.innerHTML = `<select id='option4' onchange='days()'>
				     <option value='' selected disabled hidden>Selecione</option>
				     <option value='monday'>Monday</option>
				     <option value='tuesday'>Tuesday</option>
				     <option value='wednesday'>Wednesday</option>
				     <option value='thursday'>thursday</option>
				     <option value='friday'>friday</option>
			         </select>
				 <h3>WEDNESDAY</h3>
				 <ul>${docweekDays.map(doctor => `<li>${doctor.name}</li><ul>${(`<li>${doctor.specialty}</li>`).replace(/,/g, ', ')}</ul>`).join('')}</ul>`;
		break;
	    case 'thursday':
		docweekDays = doctors.filter(doctor => doctor.weekDays.includes('Thursday'));
		res.innerHTML = `<select id='option4' onchange='days()'>
				     <option value='' selected disabled hidden>Selecione</option>
				     <option value='monday'>Monday</option>
				     <option value='tuesday'>Tuesday</option>
				     <option value='wednesday'>Wednesday</option>
				     <option value='thursday'>Thursday</option>
				     <option value='friday'>friday</option>
			         </select>
				 <h3>THURSDAY</h3>
				 <ul>${docweekDays.map(doctor => `<li>${doctor.name}</li><ul>${(`<li>${doctor.specialty}</li>`).replace(/,/g, ', ')}</ul>`).join('')}</ul>`;
		break;
	    case 'friday':
		docweekDays = doctors.filter(doctor => doctor.weekDays.includes('Friday'));
		res.innerHTML = `<select id='option4' onchange='days()'>
				     <option value='' selected disabled hidden>Selecione</option>
				     <option value='Monday'>monday</option>
				     <option value='Tuesday'>Terça</option>
				     <option value='Wednesday'>wednesday</option>
				     <option value='Thursday'>thursday</option>
				     <option value='Friday'>friday</option>
			         </select>
				 <h3>FRIDAY</h3>
				 <ul>${docweekDays.map(doctor => `<li>${doctor.name}</li><ul><li>${doctor.specialty}</li></ul>`).join('')}</ul>`;
	}
    }