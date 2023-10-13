function esconderData(){
    const soIdaRadio = document.getElementById('soIda');
    const idaVoltaRadio = document.getElementById('idaVolta')
    const divDataVolta = document.getElementById('dataDeVolta');

    soIdaRadio.addEventListener('change', () => {
        if (soIdaRadio.checked) {
            divDataVolta.style.display = 'none';
        }
    });                    
    idaVoltaRadio.addEventListener('change', () => {
        if (idaVoltaRadio.checked) {
            divDataVolta.style.display = 'block';
        }
    });
  }