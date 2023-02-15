const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              text: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              text: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              text: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              text: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              text: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              text: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              text: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "_6",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              text: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "_7",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "_8",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              text: "OK!!",
              status: "received",
            },
          ],
        },
      ],

      newMessage: {
        text: "",
        status: "",
      },

      activeContact: 0,
    };
  },

  methods: {
    // SELEZIONO IL CLICK IL CONTATTO ATTIVO
    switchToContact(index) {
      this.activeContact = index;
      // console.log(index);
    },

    addMessage() {
      const newMessageCopy = {
        text: this.newMessage.text,
        status: "sent",
      };
      console.log(newMessageCopy);
      this.contacts[this.activeContact].messages.push(newMessageCopy);
      // azzero testo di input dopo invocazione
      this.newMessage.text = "";

      // setTimeout(() => {
      //   this.contacts[this.activeContact].messages.push({
      //     text: "ok",
      //     status: "received",
      //   });
      // }, 1000);
    },

    autoReply() {
      setTimeout(() => {
        const newMessageCopy = {
          text: "ok",
          status: "received",
        };
        this.contacts[this.activeContact].messages.push(newMessageCopy);
      }, 1000);
    },
  },
});

app.mount("#app");

// Milestone 3
// ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
// “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// ● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
// un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// ● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
// Consigli utili:
// ● Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti
// ● I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
// ● Per gestire le date, può essere utile la libreria Luxon
// ● La struttura dell’array dei contatti potrebbe avere questa forma:
