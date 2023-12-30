const toggleSwitch = document.querySelector('.toggle-switch-checkbox');
const body = document.querySelector('body');

function switchTheme(event) {
	if (event.target.checked) {
		body.classList.add('dark-mode');
	} else {
		body.classList.remove('dark-mode');
	}
}

toggleSwitch.addEventListener('change', switchTheme);

const toggleSwitch1 = document.querySelector('.text-toggle-switch-checkbox');
const body1 = document.querySelector('body');

function switchMode(event1){
	if (event1.target.checked) {
		document.body.classList.add('text-only-mode');
	} 
    else {
		document.body.classList.remove('text-only-mode');
	}
}
toggleSwitch1.addEventListener('change', switchMode);


if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            const batterySaverMode = battery.level <= 0.1;
            if (batterySaverMode) {
                document.body.classList.add("battery-saver-mode");
				body.classList.add('dark-mode');
            }
        });
    }

	const toggleSwitch2 = document.querySelector('.battery-toggle-switch-checkbox');
	const body2 = document.querySelector('body');
	
	function switchBattery(event2){
		if (event2.target.checked) {
			document.body.classList.add("battery-saver-mode");
			body.classList.add('dark-mode');
		} 
		else {
			document.body.classList.remove("battery-saver-mode");
			body.classList.remove('dark-mode');
		}
	}
	toggleSwitch2.addEventListener('change', switchBattery);
		
    