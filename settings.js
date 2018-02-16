const settingsForm = document.getElementById('settings-form');
settingsForm.addEventListener('submit', function () {
    event.preventDefault();
    const numItems = this['num-items'].value;
    const numRounds = this['num-rounds'].value;

    const settings = {numFish: numFish, numRounds: numRounds};
    localStorage.setItem('settings', JSON.stringify(settings));
});