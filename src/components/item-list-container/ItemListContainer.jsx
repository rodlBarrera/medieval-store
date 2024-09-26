import { useState } from 'react';
import sword from '../../assets/sword.png';
import tarot from '../../assets/tarot.png';
import flag from '../../assets/flag.png';
import './ItemListContainer.css';

function ItemListContainer() {

    const greeting = 'Bienvenido al Mercadillo Medieval';
    const [armor, setArmor] = useState(false);
    const [wizard, setWizard] = useState(false);

    const handleClickArmor = () => {
        setArmor(true);
        setWizard(false);
    }

    const handleClickWizard = () => {
        setWizard(true);
        setArmor(false);
    }
    

    const imageSelected = () => {
        if (armor === true) {
            return sword;
        } else if (wizard === true) {
            return tarot;
        } else {
            return flag;
        }
    }

    return (
        <main>
            <h1>{greeting}</h1>
            <p>¿Que te interesa ver?</p>
            <img src={imageSelected()} alt='image-selected'/>
            <div className="categoryBtns">
                <button onClick={handleClickArmor}>Armaduras</button>
                <button onClick={handleClickWizard}>Magos</button>
            </div>
        </main>
    );
}

export default ItemListContainer;