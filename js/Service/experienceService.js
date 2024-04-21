const infos = [
    {
        ano: '2023',
        empresa: 'Belaudição, Lda',
        funcao: 'Commercial Sales Representative'
        
    },  
    {
        ano: '2018-2022',
        empresa: 'Pastelaria Rainha Do Tua, Lda',
        funcao: 'Commercial Distribuitor'
        
    },
    {
        ano: '2015-2016',
        empresa: 'Deslumbremérito-BF Group',
        funcao: 'Assistant Manager'
        
    }

  
];

async function getInfo(index){
    return infos[index]
};

async function getInfos(){
    return infos;
}

export default {getInfo, getInfos};