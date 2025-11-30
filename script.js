document.addEventListener('DOMContentLoaded', () => {
    
    const state = {
            ally: null,
            enemy: null,
        };
    
    const cards = document.querySelectorAll('.card-zone')

    
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
        const side = card.dataset.side;
        const champ = card.dataset.champion;

        if (side === 'ally') {
            state.ally = champ.charAt(0).toUpperCase() + champ.slice(1);

            if (selectedAllyCard) selectedAllyCard.classList.remove('selected');
            card.classList.add('selected');

            selectedAllyCard = card;

        } else if (side === 'enemy') {
            state.enemy = champ.charAt(0).toUpperCase() + champ.slice(1);

            if (selectedEnemyCard) selectedEnemyCard.classList.remove('selected');
            card.classList.add('selected');
            selectedEnemyCard = card;
        }

        console.log(state);

        updateVSWindow();

        });
    });

    const champ1E1 = document.querySelector('.champ1');
    const champ2E1 = document.querySelector('.champ2');

    function updateVSWindow() {
        // if state.ally exists, display it; otherwise default text
        champ1E1.textContent = state.ally || 'Your Champion';

        // if state.enemy exists, display it; otherwise default text
        champ2E1.textContent = state.enemy || 'Enemy Champion';
    }


    let selectedAllyCard = null;
    let selectedEnemyCard = null;


});




        



