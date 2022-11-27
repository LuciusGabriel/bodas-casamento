const casamento = document.querySelector('#data')
const resposta = document.querySelector('#resultado')

function calcular(){
    let dataCasamento = casamento.value
    if(casamento.value===''){
        alert('Por favor preencha com uma data!')
    }else{
        dataCasamento = new Date(dataCasamento)
        var today = new Date();
    
        let diffInTime = Math.abs(today - dataCasamento)
        let timeInOneMoth = 1000 * 60 * 60 * 24 * 30
        let diffInMoth = diffInTime / timeInOneMoth
        
        return diffInMoth
    }
}

function resultado(){
    const weddingMonths = calcular()   
        if(weddingMonths < 1){  
            console.log(weddingMonths)
            resposta.innerHTML = `<h1>Vocês ainda estão no início! <br> Em breve completarão a primeira Bodas!</h1>`
            resposta.innerHTML += `<p><img src="https://www.madrejoias.com.br/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/p/a/par-de-alian_a-em-ouro-18k-tradicional-8g-5mm-noivado-e-casamento-_-perto_1.jpg" class="imagem-bodas"></p>`
            }else if(weddingMonths >= 1 && weddingMonths < 2){
                resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de Beijinho!</h1>`
                resposta.innerHTML += `<p><img src="https://naminhapanela.com/wp-content/uploads/2021/04/Beijinho-de-coco-4-720x720.jpg" class="imagem-bodas"></p>`
                }else if(weddingMonths >= 2 && weddingMonths < 3){
                    resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de Sorvete!</h1>`
                    resposta.innerHTML += `<p><img src="https://static.clubedaanamariabraga.com.br/wp-content/uploads/2016/07/sorvete-cremoso-sortido.jpg" class="imagem-bodas"></p>`
                    }else if(weddingMonths >= 3 && weddingMonths < 4){
                            resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de Algodão-Doce!</h1>`
                            resposta.innerHTML += `<p><img src="https://www.omundodaquimica.com.br/curiosidade/imagens/al_algodao1.jpg" class="imagem-bodas"></p>`
                        }else if(weddingMonths >= 4 && weddingMonths < 5){
                                resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de Pipoca!</h1>`
                                resposta.innerHTML += `<p><img src="https://images.aws.nestle.recipes/original/8b93a5e2db24a573dd2948709d45c631_pipoca-leite-po-molico-receitas-nestle.jpg" class="imagem-bodas"></p>`
                            }else if(weddingMonths >= 5 && weddingMonths < 6){
                                    resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de Chocolate!</h1>`
                                    resposta.innerHTML += `<p><img src="https://conteudo.imguol.com.br/c/entretenimento/eb/2022/07/06/diferentes-tipos-de-chocolate-1657141191223_v2_1170x540.jpg" class="imagem-bodas"></p>`
                                }else if(weddingMonths >= 6 && weddingMonths < 7){
                                    resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de Pluminha!</h1>`
                                    resposta.innerHTML += `<p><img src="https://img.elo7.com.br/product/600x380/3645862/pluma-da-noiva-casamentos.jpg" class="imagem-bodas"></p>`
                                    }else if(weddingMonths >= 7 && weddingMonths < 8){
                                        resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de Purpurina!</h1>`
                                        resposta.innerHTML += `<p><img src="https://mega.ibxk.com.br/2018/02/08/08134644841105.jpg" class="imagem-bodas"></p>`
                                        }else if(weddingMonths >= 8 && weddingMonths < 9){
                                            resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de PomPom!</h1>`
                                            resposta.innerHTML += `<p><img src="https://cf.shopee.com.br/file/5ef96d55ba100d77ad5b75e5605fb838" class="imagem-bodas"></p>`
                                            }else if(weddingMonths >= 9 && weddingMonths < 10){
                                                resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de Maternidade!</h1>`
                                                resposta.innerHTML += `<p><img src="http://www.santacasasertaozinho.com.br/uploads/conteudo/conteudo/2017/04/zKzyC/dollarphotoclub-60474480_840x630.jpg" class="imagem-bodas"></p>`
                                                }else if(weddingMonths >= 10 && weddingMonths < 11){
                                                    resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de Pintinhos!</h1>`
                                                    resposta.innerHTML += `<p><img src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27598/pintinhos-galinha-caipira-cpt.jpg" class="imagem-bodas"></p>`
                                                    }else if(weddingMonths >= 11 && weddingMonths < 12){
                                                        resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de Chicletes!</h1>`
                                                        resposta.innerHTML += `<p><img src="https://s2.glbimg.com/REoBv44IE1sb9bpZPO2lXnT5q78=/620x455/e.glbimg.com/og/ed/f/original/2019/11/21/chicletes.jpg" class="imagem-bodas"></p>`
                                                        }else if(weddingMonths >= 12 && weddingMonths < 13){
                                                            resposta.innerHTML = `<h1>Parabéns! Vocês estão nas Bodas de Papel!</h1>`
                                                            resposta.innerHTML += `<p><img src="https://img.freepik.com/fotos-premium/fundo-branco-de-papel-de-arte_35956-2379.jpg" class="imagem-bodas"></p>`
                                                            }else{
                                                                resposta.innerHTML = `<h1>Desculpe. Atualmente só estamos calculando os 12 primeiros meses!</h1>`
                                                            }
                                                    

        
    
}