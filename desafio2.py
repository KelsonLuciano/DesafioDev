lista = [1, 2, 3, 4, 5, 6]
entrada = int(input('Escolha um número: '))

def busca(lista, entrada):

    a = 0
    b = len(lista) -1

    while a <= b:
        c = (a + b) // 2
        if entrada == lista[c]:
            return c
        elif entrada > lista[c]:
            a = c + 1
        elif entrada < lista[c]:
            b = c - 1

    return -1

print(busca(lista, entrada))