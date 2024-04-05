try{
    console.log('Começo do try');

    unicycle;

    console.log('Fim do try -- Não alcançado');
} catch(e){
    console.log('Um erro ocorreu: ' + e);
} finally{
    console.log('Isso sempre vai rodar.');
}

console.log('Continuação do código.')


let json = '{ "idade": 20}';

try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError('Dados incompletos: sem nome');
    }

    console.log(user.name);
} catch(err){
    console.log('JSON Error: ' + err.message)
}