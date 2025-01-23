//inputboxes
const inputBoxMetric = document.querySelector('.metric');
const inputBoxImperialUS = document.querySelector('.imperialUS');
const inputBoxImperialUK = document.querySelector('.imperialUK');

//all checkboxes
const metricCheckbox = document.getElementById('checkbox-metric');
const imperialUSCheckbox = document.getElementById('checkbox-imperialUS');
const imperialUKCheckbox = document.getElementById('checkbox-imperialUK');

const checkBoxes = [metricCheckbox, imperialUSCheckbox, imperialUKCheckbox];
const inputBoxes = [inputBoxMetric, inputBoxImperialUS, inputBoxImperialUK];

//metric box inputs
const heightMetric = document.getElementById('height-metric');
const weightMetric = document.getElementById('weight-metric');

//imperialUS box inputs
const heightImperialUSft = document.getElementById('height-imperialUS-ft');
const heightImperialUSin = document.getElementById('height-imperialUS-in');
const weightImperialUS = document.getElementById('weight-imperialUS');

//imperialUK box inputs
const heightImperialUKft = document.getElementById('height-imperialUK-ft');
const heightImperialUKin = document.getElementById('height-imperialUK-in');
const weightImperialUKst = document.getElementById('weight-imperialUK-st');
const weightImperialUKibs = document.getElementById('weight-imperialUK-ibs');

//resultbox
const resultBox = document.querySelector('.result-box');
const resultNumber = document.querySelector('.result-box--number');
const resultInfo = document.querySelector('.result-box--info');
const resultMeaning = document.querySelector('.result-meaning');
const classification = document.querySelector('.classification');

const maxRange = document.querySelector('.range--max');
const minRange = document.querySelector('.range--min');

//adcive section
const adviceOne = document.querySelector('.advice-one');
const adviceTwo = document.querySelector('.advice-two');
const adviceThree = document.querySelector('.advice-three');

//countBtn
const countBtn = document.querySelector('.countBtn');

//invisible sections

function handleCheckboxChange(event) {
	checkBoxes.forEach((checkbox, index) => {
		if (checkbox === event.target) {
			if (checkbox.checked) {
				inputBoxes[index].classList.remove('hidden');
			} else {
				inputBoxes[index].classList.add('hidden');
			}
		} else {
			checkbox.checked = false;
			inputBoxes[index].classList.add('hidden');
		}
	});
}

const bmiDescriptions = {
	underweight: {
		classification: "You're under the healthy range. ",
		resultMeaning: `"A BMI below 18.5 is considered underweight."
To maintain a healthy weight, consider increasing your caloric intake with nutrient-rich foods like whole grains, nuts, and healthy fats. Include protein sources such as lean meat, eggs, and dairy, and aim to eat frequent, balanced meals. Consulting a healthcare professional can provide tailored advice.`,
		advice: {
			first: {
				icon: `<i class="fa-solid fa-bowl-food"></i>`,
				title: `Balanced Diet`,
				text: `Focus on calorie-dense foods rich in nutrients, such as nuts, avocados, and whole grains, to gain weight healthily.`,
			},
			second: {
				icon: `<i class="fa-solid fa-dumbbell gym"></i>`,
				title: `Strength Training`,
				text: `Incorporate light strength exercises to build muscle mass and improve your overall weight.`,
			},
			third: {
				icon: `<i class="fa-solid fa-clock clock"></i>`,
				title: `Regular Meals`,
				text: `Eat at least three nutrient-rich meals daily, supplemented by snacks, to meet your caloric needs.`,
			},
		},
	},
	healthy: {
		classification: "You're in good shape. ",
		resultMeaning: `"A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'"
To sustain your current weight, focus on a balanced diet with plenty of fruits, vegetables, and lean proteins. Regular physical activity, such as walking or yoga, will help maintain your fitness. Stay hydrated and ensure you're getting enough sleep to support overall well-being.`,
		advice: {
			first: {
				icon: `<i class="fa-solid fa-bowl-food"></i>`,
				title: `Maintain Balance`,
				text: `Ensure your diet is rich in fruits, vegetables, lean proteins, and whole grains to support your healthy weight.`,
			},
			second: {
				icon: `<i class="fa-solid fa-person-running active"></i>`,
				title: `Stay Active`,
				text: `Engage in regular physical activity, such as yoga, jogging, or cycling, to maintain your fitness.`,
			},
			third: {
				icon: `<i class="fa-solid fa-glass-water water"></i>`,
				title: `Stay Hydrated`,
				text: `Drink enough water daily to promote digestion, energy levels, and overall well-being.`,
			},
		},
	},
	overweight: {
		classification: "You're slightly above the healthy range. ",
		resultMeaning: `"A BMI between 25.0 and 29.9 is considered overweight."
Small changes like reducing portion sizes and limiting sugary snacks can make a difference. Incorporate more vegetables and whole grains into your diet, and aim for at least 30 minutes of moderate exercise, like brisk walking, five days a week.`,
		advice: {
			first: {
				icon: `<i class="fa-solid fa-cookie-bite cookie"></i>`,
				title: `Portion Control`,
				text: `Reduce portion sizes and focus on nutrient-dense, low-calorie foods like fruits and vegetables.`,
			},
			second: {
				icon: `<i class="fa-solid fa-person-walking walk"></i>`,
				title: `Increase Activity`,
				text: `Start with simple exercises like walking for 30 minutes daily to burn calories effectively.`,
			},
			third: {
				icon: `<i class="fa-solid fa-check-double routine"></i>`,
				title: `Consistent Routine`,
				text: `Stick to regular meal times and avoid late-night snacking to support weight management.`,
			},
		},
	},
	obesity1: {
		classification: "You're in the obesity range. ",
		resultMeaning: `"A BMI of 30.0 to 34.9 falls in the obesity range."
Consider creating a structured meal plan focused on nutrient-dense foods with reduced fats and sugars. Gradually increase your physical activity, starting with low-impact exercises like swimming or cycling. Seeking advice from a healthcare provider can help with long-term strategies.`,
		advice: {
			first: {
				icon: `<i class="fa-solid fa-utensils cook"></i>`,
				title: `Cook at Home`,
				text: `Preparing meals at home lets you control portions and choose healthier ingredients.`,
			},
			second: {
				icon: `<i class="fa-solid fa-shoe-prints low-effort-sport"></i>`,
				title: `Low-Impact Exercise`,
				text: `Activities like swimming or cycling are great ways to burn calories without stressing your joints.`,
			},
			third: {
				icon: `<i class="fa-regular fa-pen-to-square notebook"></i>`,
				title: `Keep a Journal`,
				text: `Track your meals and physical activity to stay accountable and identify patterns.`,
			},
		},
	},
	obesity2: {
		classification: "You're significantly above the healthy range. ",
		resultMeaning: `"A BMI of 35.0 to 39.9 indicates significant obesity."
It's important to prioritize lifestyle changes, such as cooking meals at home and avoiding processed foods. Look into group fitness classes or activities that you enjoy to stay motivated. A dietitian or doctor can guide you toward sustainable weight management options.`,
		advice: {
			first: {
				icon: `<i class="fa-solid fa-burger burger"></i>`,
				title: `Avoid Processed Foods`,
				text: `Replace sugary snacks and processed foods with whole foods to improve your diet quality.`,
			},
			second: {
				icon: `<i class="fa-solid fa-bullseye goal"></i>`,
				title: `Set Realistic Goals`,
				text: `Focus on achievable goals like losing 1/2 pounds per week for sustainable progress.`,
			},
			third: {
				icon: `<i class="fa-solid fa-user-doctor doctor"></i>`,
				title: `Consult a Specialist`,
				text: `Work with a dietitian or doctor to develop a personalized weight-loss strategy.`,
			},
		},
	},
	severeObesity: {
		classification:
			"You're in a very high range. Professional support is strongly recommended.",
		resultMeaning: `"A BMI of 40.0 or above is considered severe obesity."
Professional support is key at this stage, including personalized dietary plans and physical activity suited to your abilities. Focus on small, manageable goals, such as walking a few extra steps daily. Behavioral therapy or medical interventions may also be helpful.`,
		advice: {
			first: {
				icon: `<i class="fa-solid fa-seedling"></i>`,
				title: `Mindful Eating`,
				text: `Eat slowly and pay attention to your hunger cues to prevent overeating.`,
			},
			second: {
				icon: `<i class="fa-solid fa-hand-holding-medical nurse"></i>`,
				title: `Medical Support`,
				text: `Seek professional help for tailored interventions, such as therapy or medical treatments.`,
			},
			third: {
				icon: `<i class="fa-solid fa-hourglass slow"></i>`,
				title: `Start Small`,
				text: `Begin with short walks or simple activities to gradually increase your mobility and stamina.`,
			},
		},
	},
};

const generateAdviceHTML = advice => `
    <div class="advice-item--icon food">
        ${advice.icon}
    </div>
    <div class="flex-group">
        <p class="advice-item--title">${advice.title}</p>
        <p class="advice-item--text">${advice.text}</p>
    </div>
`;

const resultDescription = bmi => {
	const categories = [
		{ min: 0, max: 18.4, key: 'underweight' },
		{ min: 18.5, max: 24.9, key: 'healthy' },
		{ min: 25.0, max: 29.9, key: 'overweight' },
		{ min: 30.0, max: 34.9, key: 'obesity1' },
		{ min: 35.0, max: 39.9, key: 'obesity2' },
		{ min: 40.0, max: Infinity, key: 'severeObesity' },
	];

	const category = categories.find(c => bmi >= c.min && bmi <= c.max);

	if (category) {
		const {
			classification: cls,
			resultMeaning: meaning,
			advice,
		} = bmiDescriptions[category.key];

		classification.textContent = cls;
		resultMeaning.textContent = meaning;
		adviceOne.innerHTML = generateAdviceHTML(advice.first);
		adviceTwo.innerHTML = generateAdviceHTML(advice.second);
		adviceThree.innerHTML = generateAdviceHTML(advice.third);
	}
};

const handleResult = () => {
	let bmi = 0;

	if (
		metricCheckbox.checked &&
		heightMetric.value !== '' &&
		weightMetric.value !== ''
	) {
		const hMet = parseFloat(heightMetric.value);
		const wMet = parseFloat(weightMetric.value);

		bmi = wMet / (hMet / 100) ** 2;
		const minRangeVal = 18.5 * (hMet / 100) ** 2;
		const maxRangeVal = 24.9 * (hMet / 100) ** 2;

		minRange.textContent = `${minRangeVal.toFixed(0)}kg`;
		maxRange.textContent = `${maxRangeVal.toFixed(0)}kg`;
	} else if (
		imperialUSCheckbox.checked &&
		heightImperialUSft.value !== '' &&
		heightImperialUSin.value !== '' &&
		weightImperialUS.value !== ''
	) {
		const hImpUS =
			parseFloat(heightImperialUSft.value) * 12 +
			parseFloat(heightImperialUSin.value);
		const wImpUS = parseFloat(weightImperialUS.value);

		bmi = (wImpUS * 703) / hImpUS ** 2;

		const minRangeVal = (18.5 * hImpUS ** 2) / 703;
		const maxRangeVal = (24.9 * hImpUS ** 2) / 703;

		minRange.textContent = `${minRangeVal.toFixed(0)} Ibs`;
		maxRange.textContent = `${maxRangeVal.toFixed(0)} Ibs`;
	} else if (
		imperialUKCheckbox.checked &&
		heightImperialUKft.value !== '' &&
		heightImperialUKin.value !== '' &&
		weightImperialUKst.value !== '' &&
		weightImperialUKibs.value !== ''
	) {
		const hImpUK =
			parseFloat(heightImperialUKft.value) * 12 +
			parseFloat(heightImperialUKin.value);
		const wImpUK =
			parseFloat(weightImperialUKst.value) * 14 +
			parseFloat(weightImperialUKibs.value);

		bmi = (wImpUK * 703) / hImpUK ** 2;

		const minRangeVal = (18.5 * hImpUK ** 2) / 703;
		const maxRangeVal = (24.9 * hImpUK ** 2) / 703;

		const minStone = Math.floor(minRangeVal / 14);
		const minPounds = Math.round(minRangeVal % 14);

		const maxStone = Math.floor(maxRangeVal / 14);
		const maxPounds = Math.round(maxRangeVal % 14);

		minRange.textContent = `${minStone}st ${minPounds}lbs`;
		maxRange.textContent = `${maxStone}st ${maxPounds}lbs`;
	}

	if (bmi > 0) {
		resultNumber.textContent = bmi.toFixed(1);
		resultDescription(bmi);
	} else {
		resultNumber.textContent = 'N/A';
		classification.textContent =
			'Please enter valid values to calculate your BMI.';
	}

	resultBox.style.opacity = '1';
	resultBox.style.visibility = 'visible';
	resultBox.style.display = 'flex';
};

checkBoxes.forEach(checkbox => {
	checkbox.addEventListener('change', handleCheckboxChange);
});

countBtn.addEventListener('click', handleResult);
countBtn.addEventListener('click', () => {
	const resultBoxPosition = resultBox.offsetTop;

	window.scrollTo({
		top: resultBoxPosition,
		behaviour: 'smooth',
	});
});

const inputConfig = [
	{ element: heightMetric, maxLength: 3 },
	{ element: weightMetric, maxLength: 3 },
	{ element: heightImperialUSft, maxLength: 1 },
	{ element: heightImperialUSin, maxLength: 2 },
	{ element: heightImperialUKft, maxLength: 1 },
	{ element: heightImperialUKin, maxLength: 2 },
	{ element: weightImperialUS, maxLength: 3 },
	{ element: weightImperialUKibs, maxLength: 3 },
	{ element: weightImperialUKst, maxLength: 3 },
];

inputConfig.forEach(config => {
	config.element.addEventListener('input', function () {
		if (this.value.length > config.maxLength) {
			this.value = this.value.slice(0, config.maxLength);
		}
	});
});
