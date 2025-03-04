entrada = int(input('Escolha um número: '))
lista = []
a = 0

for i in range(entrada):
    if i != 0:
        if entrada % i == 0:
            lista.append(i)

for i in lista:
    a += i

if a == entrada:
    print('É um número perfeito')
else:
    print('Não é um número perfeito')