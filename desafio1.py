num1 = int(input('Escolha um número: '))

start = 0
a = 0
b = 1


lista = []

for i in range(num1):
    lista.append(start)
    a = start + b
    start = b
    b = a

print(lista)