def palindromica(texto: str):
    def analise(comeco: int, fim: int):
        while comeco >= 0 and fim < len(texto) and texto[comeco] == texto[fim]:
            comeco -= 1
            fim += 1
        return texto[comeco + 1:fim]

    maior_palindromo = ""
    for i in range(len(texto)):
        analise1 = analise(i, i)
        if len(analise1) > len(maior_palindromo):
            maior_palindromo = analise1

        analise2 = analise(i, i + 1)
        if len(analise2) > len(maior_palindromo):
            maior_palindromo = analise2

    if len(maior_palindromo) > 2:
        return maior_palindromo
    else: 
        return 'Palindromo não encontrado'

entrada = str(input('Digite uma palavra: '))
print(palindromica(entrada))