saque = int(input('Escolha um valor de saque: '))

cedulas = [100, 50, 20, 10, 5, 2, 1]
qtds = [0, 0, 0, 0, 0, 0, 0]

while saque > 0:
    for i in range(len(cedulas)):
        if saque >= cedulas[i]:
            saque -= cedulas[i]
            qtds[i] += 1
            break

for i in range(len(qtds)):
    if qtds[i] > 0:
        if i == 6:
            print(f'{qtds[i]} moeda(s) de {cedulas[i]}')
        else:
            print(f'{qtds[i]} cédula(s) de {cedulas[i]}')