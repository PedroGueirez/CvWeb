const perfis = [
    {
        telefone: '93333333',
        email: 'pedro.gueirez@gmail.com',
        morada: 'Porto'
        
    },
  
];

async function getPerfil(index){
    return perfis[index]
};

async function getPerfis(){
    return perfis;
}

export default {getPerfil, getPerfis};