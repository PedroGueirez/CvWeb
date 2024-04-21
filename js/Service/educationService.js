const infos = [
    {
        ano: '2024',
        escola: 'Code For All_',
        diploma: 'Full Stack Programming Bootcamp',
        imagem: 'resources/codeforall.webp'
    },
    {
        ano: '2016-2020',
        escola: 'University Of Trás-Os-Montes And Alto Douro',
        diploma: 'Business Management Degree',
        imagem: 'resources/UTAD.png'
    },
    

  
];

async function getInfo(index){
    return infos[index]
};

async function getInfos(){
    return infos;
}

export default {getInfo, getInfos};