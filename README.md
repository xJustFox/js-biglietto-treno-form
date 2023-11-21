## esercizio di oggi: calcolo del prezzo del biglietto del treno

cartella/repo js-biglietto-treno-form

### Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

### MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
### MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Sono richiesti almeno 5 push.


### Problem solving
1. Inizializza la costante "button"
    1.1 Assegna una funzione a "button"
        2. Inizializzare la variabile "user"
            2.1- Far definire il valore attraverso input all'utente
        3. Inizializzare la variabile "distance_km"
            3.1- Far definire il valore attraverso input all'utente
        4. Inizializzare la variabile "age"
            4.1- Far definire il valore attraverso input all'utente
        5. Inizializzare la variabile "price_new"
            5.1- Definire il valore del bigletto in base ai km da percorrere (0.21 € al km)
        6. Creare un if else per applicare gli sconti in base all'età
7. Mostrare a schermo e in console i valori di "user" "price_new"
