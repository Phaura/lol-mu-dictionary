document.addEventListener('DOMContentLoaded', () => {
    
    const state = {
            ally: null,
            enemy: null,
        
        };


    // Track currently selected cards for each side
    let selectedAllyCard = null;
    let selectedEnemyCard = null;
       
    
    const cards = document.querySelectorAll('.card-zone')

    const champ1E1 = document.querySelector('.champ1');
    const champ2E1 = document.querySelector('.champ2');
    const vsWindowE1 = document.querySelector('.vsWindow');



    function updateVSWindow() {
        // if state.ally exists, display it; otherwise default text
        champ1E1.textContent = state.ally || 'Your Champion';

        // if state.enemy exists, display it; otherwise default text
        champ2E1.textContent = state.enemy || 'Enemy Champion';
    
        
        // Champion Lock in State Block
        
        if (state.ally && state.enemy) {
            document.querySelector('.vsWindow').classList.add('ready');
            } else {
                document.querySelector('.vsWindow').classList.remove('ready');
            }
        
    }


    
    cards.forEach(card => {
        card.addEventListener('click', () => {
        
        
        const side = card.dataset.side;
        const champ = card.dataset.champion;
        const champName = 
            champ.charAt(0).toUpperCase() + champ.slice(1);

        if (side === 'ally') {
            
            if (selectedAllyCard === card) {
                state.ally = null;
                card.classList.remove('selected');
                selectedAllyCard = null;
            } else {
                state.ally = champName;

                if(selectedAllyCard) {
                    selectedAllyCard.classList.remove('selected');
                }
                card.classList.add('selected');
                selectedAllyCard = card;
            }
        } else if (side === 'enemy') {
            if (selectedEnemyCard === card) {
                state.enemy = null;
                card.classList.remove('selected');
                selectedEnemyCard = null;
            } else {
                state.enemy = champName;

                if (selectedEnemyCard) {
                    selectedEnemyCard.classList.remove('selected');
                }
                card.classList.add('selected');
                selectedEnemyCard = card
            }
        }

        console.log(state);
        updateVSWindow();
        });
    });

    updateVSWindow()
});




        



