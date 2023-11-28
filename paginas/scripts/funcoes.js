function esconderData(){
    const soIdaRadio = document.getElementById('soIda');
    const idaVoltaRadio = document.getElementById('idaVolta')
    const divDataVolta = document.getElementById('dataDeVolta');
    const divDataIda = document.getElementById('dataDeIda')

    soIdaRadio.addEventListener('change', () => {
        if (soIdaRadio.checked) {
            divDataVolta.style.display = 'none';
            divDataIda.classList.remove('col-md-2')
            divDataIda.classList.remove('col-sm-6')
            divDataIda.classList.add('col-md-4')
            divDataIda.classList.add('col-sm-12')
        }
    });                    
    idaVoltaRadio.addEventListener('change', () => {
        if (idaVoltaRadio.checked) {
            divDataVolta.style.display = 'block';
            divDataIda.classList.remove('col-md-4')
            divDataIda.classList.remove('col-sm-12')
            divDataIda.classList.add('col-md-2')
            divDataIda.classList.add('col-sm-6')
        }
    });
  }

  /* Cadastro */
  function mostrarSenha(){
    var senha = document.querySelector('#inputSenha')
    if(senha.type === "password"){
        senha.type = "text"
    } else if (senha.type === "text"){
        senha.type = "password";
    }
}

    const formataCPF = event => {
    let input = event.target;
    input.value = cpf(input.value);
    };

    const cpf = value => {
    if (!value) return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    return value;
    };
    
    const formataTEL = event => {
    let input = event.target;
    input.value = telefone(input.value);
    };

    const telefone = value => {
    if (!value) return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
    };