entrada = str(input('Digite uma palavra: '))

a = ''
loop = True

if entrada == entrada[::-1]:
    a = entrada
    loop = False

limite = 0
alcance = len(entrada) - 1

while loop:
    while limite <= len(entrada):
        inicio = 0
        limite = alcance
        trecho = entrada[inicio:limite]
        if trecho == trecho[::-1]:
            a = trecho
            loop = False
            break
        limite += 1
        inicio += 1
    alcance -= 1
    if alcance < 1:
        loop = False

print(a)
